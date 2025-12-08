<template>
  <div
    class="hero-webgl-slider"
    @wheel.prevent="onWheel"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <canvas ref="canvas" class="webgl-canvas"></canvas>

    <!-- Caption fixe liée au slide actif -->
    <div class="caption-fixed" v-if="activeSlide">
      <div class="caption-text" :style="{ opacity: captionState.opacity }">
        <strong>{{ activeSlide.title }}</strong>
        <span>{{ activeSlide.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed, reactive } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';

type Slide = {
  desktopSrc: string;
  mobileSrc?: string;
  title: string;
  desc: string;
};

const props = defineProps<{
  slides: Slide[];
  mobileBreakpoint?: number;
}>();

const canvas = ref<HTMLCanvasElement | null>(null);
const currentIndex = ref(0);
const isTransitioning = ref(false);

const breakpoint = computed(() => props.mobileBreakpoint ?? 700);
const slideCount = computed(() => props.slides.length);

const activeSlide = computed(() =>
  props.slides[currentIndex.value] ?? null
);

// état d’opacité du texte du caption
const captionState = reactive({ opacity: 1 });

// --- WebGL / Three ---
let scene: THREE.Scene;
let camera: THREE.OrthographicCamera;
let renderer: THREE.WebGLRenderer;
let material: THREE.ShaderMaterial;
let mesh: THREE.Mesh;
let rafId: number | null = null;

type VideoEntry = {
  el: HTMLVideoElement;
  tex: THREE.VideoTexture | THREE.Texture;
  size: THREE.Vector2;
};

// ⚠️ IMPORTANT : on garde le même index que props.slides
const videos: VideoEntry[] = [];

const uniforms: Record<string, any> = {
  uTexture1: { value: null as THREE.Texture | null },
  uTexture2: { value: null as THREE.Texture | null },
  uProgress: { value: 0 },
  uTime: { value: 0 },
  uResolution: { value: new THREE.Vector2(1, 1) },
  uTexture1Size: { value: new THREE.Vector2(1, 1) },
  uTexture2Size: { value: new THREE.Vector2(1, 1) },

  uGlassRefractionStrength: { value: 1.0 },
  uGlassChromaticAberration: { value: 0.0 },
  uGlassBubbleClarity: { value: 1.0 },
  uGlassEdgeGlow: { value: 0.1 },
  uGlassLiquidFlow: { value: 1.0 },
};

const vertexShader = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */`
  precision highp float;

  varying vec2 vUv;

  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uTexture1Size;
  uniform vec2 uTexture2Size;

  uniform float uGlassRefractionStrength;
  uniform float uGlassChromaticAberration;
  uniform float uGlassBubbleClarity;
  uniform float uGlassEdgeGlow;
  uniform float uGlassLiquidFlow;

  // "contain" : full height, largeur auto, bandes noires
  vec2 getContainUV(vec2 uv, vec2 textureSize) {
    vec2 s = uResolution / textureSize;
    float scale = min(s.x, s.y);
    vec2 scaledSize = textureSize * scale;
    vec2 offset = (uResolution - scaledSize) * 0.5;
    vec2 pixelPos = uv * uResolution;
    vec2 local = (pixelPos - offset) / scaledSize;
    return local;
  }

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n00 = noise(i);
    float n10 = noise(i + vec2(1.0, 0.0));
    float n01 = noise(i + vec2(0.0, 1.0));
    float n11 = noise(i + vec2(1.0, 1.0));

    float nx0 = mix(n00, n10, f.x);
    float nx1 = mix(n01, n11, f.x);

    return mix(nx0, nx1, f.y);
  }

  vec4 glassEffect(vec2 uv, float progress) {
    float glassStrength = 0.08 * uGlassRefractionStrength;
    float chromaticAberration = 0.02 * uGlassChromaticAberration;
    float waveDistortion = 0.025;
    float clearCenterSize = 0.3 * uGlassBubbleClarity;
    float surfaceRipples = 0.004;
    float liquidFlow = 0.015 * uGlassLiquidFlow;
    float rimLightWidth = 0.05;
    float glassEdgeWidth = 0.025;

    // centre plus bas
    vec2 center = vec2(0.5, 0.0);
    vec2 p = uv * uResolution;

    vec2 uv1_raw = getContainUV(uv, uTexture1Size);
    vec2 uv2_raw = getContainUV(uv, uTexture2Size);

    bool outside1 = (uv1_raw.x < 0.0 || uv1_raw.x > 1.0 ||
                     uv1_raw.y < 0.0 || uv1_raw.y > 1.0);
    bool outside2 = (uv2_raw.x < 0.0 || uv2_raw.x > 1.0 ||
                     uv2_raw.y < 0.0 || uv2_raw.y > 1.0);

    vec2 uv1 = clamp(uv1_raw, 0.0, 1.0);
    vec2 uv2_base = clamp(uv2_raw, 0.0, 1.0);

    float maxRadius = length(uResolution) * 0.85;
    float bubbleRadius = progress * maxRadius;
    vec2 sphereCenter = center * uResolution;

    float dist = length(p - sphereCenter);
    float normalizedDist = dist / max(bubbleRadius, 0.001);
    vec2 direction = (dist > 0.0) ? (p - sphereCenter) / dist : vec2(0.0);
    float inside = smoothstep(bubbleRadius + 3.0, bubbleRadius - 3.0, dist);

    float distanceFactor = smoothstep(clearCenterSize, 1.0, normalizedDist);
    float time = uTime * 1.0;

    vec2 liquidSurface = vec2(
      smoothNoise(uv * 100.0 + time * 0.3),
      smoothNoise(uv * 100.0 + time * 0.2 + 50.0)
    ) - 0.5;
    liquidSurface *= surfaceRipples * distanceFactor;

    vec2 distortedUV = uv2_base;

    if (inside > 0.0) {
      float refractionOffset = glassStrength * pow(distanceFactor, 1.5);
      vec2 flowDirection = normalize(direction + vec2(sin(time), cos(time * 0.7)) * 0.3);
      distortedUV -= flowDirection * refractionOffset;

      float wave1 = sin(normalizedDist * 22.0 - time * 3.5);
      float wave2 = sin(normalizedDist * 35.0 + time * 2.8) * 0.7;
      float wave3 = sin(normalizedDist * 50.0 - time * 4.2) * 0.5;
      float combinedWave = (wave1 + wave2 + wave3) / 3.0;

      float waveOffset = combinedWave * waveDistortion * distanceFactor;
      distortedUV -= direction * waveOffset + liquidSurface;

      vec2 flowOffset = vec2(
        sin(time + normalizedDist * 10.0),
        cos(time * 0.8 + normalizedDist * 8.0)
      ) * liquidFlow * distanceFactor * inside;

      distortedUV += flowOffset;
    }

    vec4 currentImg = outside1
      ? vec4(0.0, 0.0, 0.0, 1.0)
      : texture2D(uTexture1, uv1);

    vec4 newImg;
    if (outside2) {
      newImg = vec4(0.0, 0.0, 0.0, 1.0);
    } else if (inside > 0.0) {
      float aberrationOffset = chromaticAberration * pow(distanceFactor, 1.2);

      vec2 uv_r = distortedUV + direction * aberrationOffset * 1.2;
      vec2 uv_g = distortedUV + direction * aberrationOffset * 0.2;
      vec2 uv_b = distortedUV - direction * aberrationOffset * 0.8;

      uv_r = clamp(uv_r, 0.0, 1.0);
      uv_g = clamp(uv_g, 0.0, 1.0);
      uv_b = clamp(uv_b, 0.0, 1.0);

      float r = texture2D(uTexture2, uv_r).r;
      float g = texture2D(uTexture2, uv_g).g;
      float b = texture2D(uTexture2, uv_b).b;
      newImg = vec4(r, g, b, 1.0);
    } else {
      newImg = texture2D(uTexture2, uv2_base);
    }

    if (inside > 0.0) {
      float rim = smoothstep(1.0 - rimLightWidth, 1.0, normalizedDist) *
                  (1.0 - smoothstep(1.0, 1.01, normalizedDist));
      float rimLightIntensity = 0.08 * uGlassEdgeGlow;
      newImg.rgb += rim * rimLightIntensity;

      float edge = smoothstep(1.0 - glassEdgeWidth, 1.0, normalizedDist) *
                   (1.0 - smoothstep(1.0, 1.01, normalizedDist));
      float glassEdgeOpacity = 0.06 * uGlassEdgeGlow;
      newImg.rgb = mix(newImg.rgb, vec3(1.0), edge * glassEdgeOpacity);
    }

    if (progress > 0.95) {
      vec4 pureNewImg = outside2
        ? vec4(0.0, 0.0, 0.0, 1.0)
        : texture2D(uTexture2, uv2_base);
      float endTransition = (progress - 0.95) / 0.05;
      newImg = mix(newImg, pureNewImg, endTransition);
    }

    return mix(currentImg, newImg, inside);
  }

  void main() {
    gl_FragColor = glassEffect(vUv, uProgress);
  }
`;

// --- Helpers vidéos ---

const chooseSrcForSlide = (slide: Slide): string => {
  const width = window.innerWidth;
  if (width < breakpoint.value && slide.mobileSrc) {
    return slide.mobileSrc;
  }
  return slide.desktopSrc;
};

const createFallbackTexture = (): VideoEntry => {
  const c = document.createElement('canvas');
  c.width = 2;
  c.height = 2;
  const ctx = c.getContext('2d');
  if (ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 2, 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;

  const dummyVideo = document.createElement('video');
  const size = new THREE.Vector2(2, 2);

  return { el: dummyVideo, tex, size };
};

// ⚠️ ICI : on force videos[index] = slide[index]
const loadVideosAsTextures = async (): Promise<void> => {
  // on réserve la taille pour garder l'ordre
  videos.length = props.slides.length;

  const promises = props.slides.map((slide, index) => {
    return new Promise<void>((resolve) => {
      const src = chooseSrcForSlide(slide);
      const video = document.createElement('video');

      video.src = src;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', 'true');
      video.autoplay = false;
      video.preload = 'auto';
      video.crossOrigin = 'anonymous';

      const onCanPlay = () => {
        const tex = new THREE.VideoTexture(video);
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.format = THREE.RGBFormat;

        const size = new THREE.Vector2(
          video.videoWidth || 1920,
          video.videoHeight || 1080
        );

        videos[index] = { el: video, tex, size };
        video.removeEventListener('canplay', onCanPlay);
        video.removeEventListener('error', onError);
        resolve();
      };

      const onError = () => {
        console.warn('Error loading video:', src);
        videos[index] = createFallbackTexture();
        video.removeEventListener('canplay', onCanPlay);
        video.removeEventListener('error', onError);
        resolve();
      };

      video.addEventListener('canplay', onCanPlay);
      video.addEventListener('error', onError);
    });
  });

  await Promise.all(promises);

  // sécurité : si une case est restée vide, on met un fallback
  for (let i = 0; i < videos.length; i++) {
    if (!videos[i]) {
      videos[i] = createFallbackTexture();
    }
  }
};

const initThree = () => {
  if (!canvas.value) return;

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: false,
  });

  const dpr = Math.min(window.devicePixelRatio, 2);
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setPixelRatio(dpr);
  renderer.setSize(w, h);
  uniforms.uResolution.value.set(w, h);

  material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};

const startRenderLoop = () => {
  const loop = () => {
    uniforms.uTime.value += 0.016;

    videos.forEach(v => {
      if (!v.el.paused && !v.el.ended) {
        v.tex.needsUpdate = true;
      }
    });

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(loop);
  };
  loop();
};

const setInitialTextures = () => {
  if (!videos.length) return;

  const fromIdx = 0;
  const toIdx = slideCount.value > 1 ? 1 : 0;

  const current = videos[fromIdx];
  const next = videos[toIdx];

  uniforms.uTexture1.value = current.tex;
  uniforms.uTexture2.value = next.tex;
  uniforms.uTexture1Size.value.copy(current.size);
  uniforms.uTexture2Size.value.copy(next.size);
  uniforms.uProgress.value = 0;

  videos.forEach(v => {
    v.el.pause();
    v.el.currentTime = 0;
  });
  current.el.currentTime = 0;
  current.el.play().catch(() => {});
};

// --- Navigation / transitions ---

const goTo = (target: number) => {
  if (!videos.length || isTransitioning.value || !slideCount.value) return;

  const to = (target + slideCount.value) % slideCount.value;
  const from = currentIndex.value;
  if (to === from) return;

  isTransitioning.value = true;

  const current = videos[from];
  const nextVideo = videos[to];

  uniforms.uTexture1.value = current.tex;
  uniforms.uTexture2.value = nextVideo.tex;
  uniforms.uTexture1Size.value.copy(current.size);
  uniforms.uTexture2Size.value.copy(nextVideo.size);
  uniforms.uProgress.value = 0;

  videos.forEach(v => {
    v.el.pause();
  });
  nextVideo.el.currentTime = 0;
  nextVideo.el.play().catch(() => {});

  const DURATION = 0.7;

  const tl = gsap.timeline({
    onComplete: () => {
      uniforms.uTexture1.value = nextVideo.tex;
      uniforms.uTexture1Size.value.copy(nextVideo.size);
      uniforms.uProgress.value = 0;
      isTransitioning.value = false;
    },
  });

  // effet verre
  tl.to(uniforms.uProgress, {
    value: 1,
    duration: DURATION,
    ease: 'power2.inOut',
  }, 0);

  // texte du caption : fade out → blanc → fade in
  tl.to(captionState, {
    opacity: 0,
    duration: 0.25,
    ease: 'power2.out',
  }, 0);

  tl.call(() => {
    currentIndex.value = to;
  }, undefined, 0.30);

  tl.to(captionState, {
    opacity: 1,
    duration: 0.25,
    ease: 'power2.in',
  }, 0.25);
};

const next = () => goTo(currentIndex.value + 1);
const prev = () => goTo(currentIndex.value - 1);

// --- Wheel / Touch / Key ---

const isScrollLocked = ref(false);
const SCROLL_LOCK_MS = 700;
const WHEEL_THRESHOLD = 20;

const onWheel = (event: WheelEvent) => {
  if (isScrollLocked.value || isTransitioning.value || !videos.length) return;

  const delta = event.deltaY;
  if (Math.abs(delta) < WHEEL_THRESHOLD) return;

  isScrollLocked.value = true;

  if (delta > 0) {
    next();
  } else {
    prev();
  }

  setTimeout(() => {
    isScrollLocked.value = false;
  }, SCROLL_LOCK_MS);
};

const touchStartY = ref(0);

const onTouchStart = (e: TouchEvent) => {
  touchStartY.value = e.changedTouches[0].clientY;
};

const onTouchEnd = (e: TouchEvent) => {
  if (isTransitioning.value || !videos.length) return;

  const endY = e.changedTouches[0].clientY;
  const diff = endY - touchStartY.value;

  if (Math.abs(diff) < 40) return;

  if (diff < 0) next();
  else prev();
};

const onKeyDown = (e: KeyboardEvent) => {
  if (!videos.length || isTransitioning.value) return;

  if (['ArrowDown', 'ArrowRight', 'Space'].includes(e.code)) {
    e.preventDefault();
    next();
  } else if (['ArrowUp', 'ArrowLeft'].includes(e.code)) {
    e.preventDefault();
    prev();
  }
};

const onResize = () => {
  if (!renderer) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio, 2);
  renderer.setPixelRatio(dpr);
  renderer.setSize(w, h);
  uniforms.uResolution.value.set(w, h);
};

// lifecycle

onMounted(async () => {
  if (!slideCount.value) return;

  await loadVideosAsTextures();
  initThree();
  setInitialTextures();
  startRenderLoop();

  window.addEventListener('resize', onResize);
  window.addEventListener('keydown', onKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
  window.removeEventListener('keydown', onKeyDown);

  if (rafId !== null) cancelAnimationFrame(rafId);

  videos.forEach(v => {
    v.el.pause();
    v.tex.dispose();
  });

  if (mesh) {
    mesh.geometry.dispose();
    (mesh.material as THREE.Material).dispose();
  }
  if (renderer) {
    renderer.dispose();
  }
});

defineExpose({ next, prev, goTo });
</script>

<style scoped lang="scss">
.hero-webgl-slider {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overscroll-behavior: none;
}

@supports (height: 100dvh) {
  .hero-webgl-slider {
    height: 100dvh;
  }
}

.webgl-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* Caption fixe */
.caption-fixed {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);

  background: #f2f2f2;
  border-radius: 5px;
  min-height: 60px;
  width: 440px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  gap: 12px;

  z-index: 9999;
}

.caption-text {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.caption-fixed strong {
  font-family: "Lausanne 500";
}

.caption-fixed span {
  font-family: "Lausanne 300";
}

@media screen and (max-width: 700px) {
  .caption-fixed {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
    font-size: 14px;
    width: calc(100vw - 20px);
    left: 10px;
    transform: none;
    justify-content: flex-start;
  }
}
</style>
