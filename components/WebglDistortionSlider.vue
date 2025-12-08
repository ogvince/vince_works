<template>
  <div class="webgl-slider">
    <canvas ref="canvas" class="webgl-canvas"></canvas>

    <!-- Petit overlay optionnel pour debug / navigation -->
    <div class="webgl-ui">
      <button @click="prevSlide">Prev</button>
      <span>{{ currentIndex + 1 }} / {{ slides.length }}</span>
      <button @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';

type Slide = {
  src: string;
};

// 🔹 Slides de test : remplace par tes vraies images (stills de vidéos, etc.)
const slides: Slide[] = [
  { src: '/images/projects/vince_tv.jpg' },
  { src: '/images/projects/vince_insta.jpg' },
  // ajoute ce que tu veux
];

const canvas = ref<HTMLCanvasElement | null>(null);
const currentIndex = ref(0);

// Three.js core
let scene: THREE.Scene;
let camera: THREE.OrthographicCamera;
let renderer: THREE.WebGLRenderer;
let material: THREE.ShaderMaterial;
let mesh: THREE.Mesh;
let animationFrameId: number | null = null;

// Textures
const textures: THREE.Texture[] = [];

// Uniforms
const uniforms = {
  uTexture1: { value: null as THREE.Texture | null },
  uTexture2: { value: null as THREE.Texture | null },
  uProgress: { value: 0.0 },
  uTime: { value: 0.0 },
  uResolution: { value: new THREE.Vector2(1, 1) },
};

// --- Shaders (simple effet “eau / distortion”) ---

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uResolution;

  // Petit noise
  float random(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec2 uv = vUv;

    // Normalisation aspect ratio (optionnel, simple)
    vec2 aspect = vec2(
      uResolution.x / max(uResolution.x, uResolution.y),
      uResolution.y / max(uResolution.x, uResolution.y)
    );
    uv = uv * aspect + (0.5 - 0.5 * aspect);

    // Distortion “eau” avec sin + noise
    float wave = sin(uv.y * 12.0 + uTime * 1.8) * 0.03;
    float noise = (random(uv * 5.0 + uTime * 0.1) - 0.5) * 0.03;

    // On modifie différemment les UV de chaque texture pour sentir la morph
    vec2 uv1 = uv;
    vec2 uv2 = uv;

    uv1.x += (wave + noise) * (1.0 - uProgress) * 1.5;
    uv2.x += (wave - noise) * uProgress * 1.5;

    vec4 tex1 = texture2D(uTexture1, uv1);
    vec4 tex2 = texture2D(uTexture2, uv2);

    float p = smoothstep(0.0, 1.0, uProgress);
    vec4 color = mix(tex1, tex2, p);

    gl_FragColor = color;
  }
`;

// --- Init Three.js ---

const loadTextures = async (): Promise<void> => {
  const loader = new THREE.TextureLoader();

  for (const slide of slides) {
    await new Promise<void>((resolve, reject) => {
      loader.load(
        slide.src,
        (tex) => {
          tex.minFilter = tex.magFilter = THREE.LinearFilter;
          tex.generateMipmaps = false;
          textures.push(tex);
          resolve();
        },
        undefined,
        (err) => reject(err)
      );
    });
  }
};

const initScene = () => {
  if (!canvas.value) return;

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: false,
  });

  const dpr = Math.min(window.devicePixelRatio, 2);
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight);

  uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);

  material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};

const setInitialTextures = () => {
  if (textures.length < 2) return;

  uniforms.uTexture1.value = textures[0];
  uniforms.uTexture2.value = textures[1];
  uniforms.uProgress.value = 0.0;
};

const renderLoop = () => {
  uniforms.uTime.value += 0.016; // ~60fps

  renderer.render(scene, camera);
  animationFrameId = requestAnimationFrame(renderLoop);
};

const onResize = () => {
  if (!renderer) return;

  const width = window.innerWidth;
  const height = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio, 2);

  renderer.setPixelRatio(dpr);
  renderer.setSize(width, height);
  uniforms.uResolution.value.set(width, height);
};

// --- Transition logique ---

const goToSlide = (nextIndex: number) => {
  if (textures.length === 0) return;

  const currentTexIndex = currentIndex.value % textures.length;
  const nextTexIndex = nextIndex % textures.length;

  uniforms.uTexture1.value = textures[currentTexIndex];
  uniforms.uTexture2.value = textures[nextTexIndex];
  uniforms.uProgress.value = 0.0;

  currentIndex.value = nextTexIndex;

  gsap.to(uniforms.uProgress, {
    value: 1,
    duration: 1.0,
    ease: 'power2.inOut',
  });
};

const nextSlide = () => {
  const next = (currentIndex.value + 1) % slides.length;
  goToSlide(next);
};

const prevSlide = () => {
  const prev = (currentIndex.value - 1 + slides.length) % slides.length;
  goToSlide(prev);
};

// --- Lifecycle Vue ---

onMounted(async () => {
  await loadTextures();
  initScene();
  setInitialTextures();
  renderLoop();

  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
  if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);

  // cleanup basique
  if (mesh) {
    mesh.geometry.dispose();
    (mesh.material as THREE.Material).dispose();
  }
  textures.forEach((t) => t.dispose());
});

// expose aux boutons du template
</script>

<style scoped>
.webgl-slider {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.webgl-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* UI de test optionnelle */
.webgl-ui {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  padding: 6px 10px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  border-radius: 999px;
}

.webgl-ui button {
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  color: white;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 999px;
}
</style>
