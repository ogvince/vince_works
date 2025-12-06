<template>
  <div class="hero-swiper">
    <swiper
      :loop="true"
      :modules="modules"
      :mousewheel="true"
      :keyboard="{ enabled: true }"
      :breakpoints="{
        '0': {
          direction: 'vertical',
        },
        '900': {
          direction: 'horizontal',
        }
      }"
      effect="fade"
      @slideChange="onSlideChange"
    >
      <!-- 0 -->
             <swiper-slide style="background:#black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <!-- Mobile -->
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/mxm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <!-- Desktop -->
            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/mxm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <swiper-slide style="background:#black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <!-- Mobile -->
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/clearwave.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <!-- Desktop -->
            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/clearwave.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>


      <swiper-slide style="background:#c3c3c3">
        <div class="slide-inner">
          <template v-if="hydrated">
            <!-- Mobile -->
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/2000m.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <!-- Desktop -->
            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/2000.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <!-- 1 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/bm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/bm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <!-- 2 -->
      <swiper-slide style="background:#84b176">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/nokia.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/nokia.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <!-- 3 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/cphrm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/cphr.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <!-- 4 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/cphr2m.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/cphr2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <!-- 5 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/dztm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/dzt.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <!-- 6 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/neuewebm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/neueweb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <!-- 7 -->
      <swiper-slide style="background:white">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/advenam.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/advena.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <!-- 8 -->
      <swiper-slide style="background:white">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/shapesm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/shapes.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>

      <!-- 9 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/wecgm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/wecg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </template>
        </div>
      </swiper-slide>


    </swiper>

    <!-- CAPTION FIXE LIÉ AU SLIDE ACTIF -->
<div class="caption-fixed" v-if="captions[activeIndex]">
  <strong>{{ captions[activeIndex].title }}</strong><span>{{ captions[activeIndex].desc }}</span>
</div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { Mousewheel, Keyboard, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [Mousewheel, Keyboard, Autoplay, EffectFade];

    // --- Détection largeur (simple & SSR-safe) ---
    const hydrated = ref(false);       // vrai uniquement côté client après mount
    const width = ref(1024);           // valeur par défaut côté SSR
    const isMobile = computed(() => width.value < 700);

    const updateWidth = () => {
      if (typeof window !== 'undefined') {
        width.value = window.innerWidth;
      }
    };

    onMounted(() => {
      hydrated.value = true;
      updateWidth();
      window.addEventListener('resize', updateWidth);
    });

    onBeforeUnmount(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateWidth);
      }
    });

 const captions = ref([
  { title: 'MXM®', desc: '3D Chrome Experiment' },
  { title: 'ClearWaveTM', desc: '3D Glass Experiment' },
  { title: '2000+®', desc: 'Type & Logo Design' },
  { title: 'Bleu Mercure®', desc: 'Various clothing designs' },
  { title: 'Obsidian Factory', desc: 'Pixel art logo design' },
  { title: 'CPHR®', desc: 'Logo design & 3D Render' },
  { title: 'CPHR®', desc: 'Logo design & 3D Render' },
  { title: 'DZT', desc: 'Various Type Beat Artworks' },
  { title: 'Neueweb®', desc: 'Branding' },
  { title: 'Advena', desc: 'Golden ratio logo design' },
  { title: 'Shapes', desc: 'Digital shape exploration' },
  { title: 'WECG', desc: 'Logo Design' },
]);


    const activeIndex = ref(0);

    const onSlideChange = swiper => {
      activeIndex.value = swiper.realIndex;
    };

    return {
      modules,
      captions,
      activeIndex,
      onSlideChange,
      hydrated,
      isMobile,
    };
  },
};
</script>

<style lang="scss">
.hero-swiper {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

@supports (height: 100dvh) {
  .hero-swiper {
    height: 100dvh;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.slide-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Background vidéo / image dans le slide */
.slide-inner video,
.slide-inner img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.intro-video {
  pointer-events: none; /* évite les interactions qui forcent le plein écran */
}

/* Caption FIXE lié au slide actif */
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
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
}

.caption-fixed strong { font-family: "Lausanne 500"; margin-right: 20px; }
.caption-fixed span {   font-family: "Lausanne 300"; }

@media screen and (max-width: 700px) {
  .caption-fixed {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
    font-size: 14px;
    width: calc(100vw - 20px);
    left: 10px;
    transform: inherit;
  }
}
</style>
