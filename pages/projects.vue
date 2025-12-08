<template>
  <div class="hero-swiper" @wheel.prevent="onWheel">
    <swiper
      :loop="true"
      :modules="modules"
      :mousewheel="false"
      :keyboard="{ enabled: true }"
      :breakpoints="swiperBreakpoints"
      effect="fade"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slide.id"
        :style="{ background: slide.background }"
      >
        <div class="slide-inner">
          <video
            v-if="hydrated"
            :key="`${slide.id}-${isMobile ? 'm' : 'd'}`"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source :src="isMobile ? slide.mobileSrc : slide.desktopSrc" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>
    </swiper>

    <div class="caption-fixed" v-if="slides[activeIndex]">
      <strong>{{ slides[activeIndex].title }}</strong>
      <span>{{ slides[activeIndex].desc }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { Keyboard, Mousewheel, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/effect-fade';

const modules = [Mousewheel, Keyboard, Autoplay, EffectFade];
const swiperBreakpoints = {
  0: { direction: 'vertical' },
  900: { direction: 'vertical' },
};

const slides = [
  { id: 'mxm', background: 'black', mobileSrc: '/videos/mxm.mp4', desktopSrc: '/videos/mxm.mp4', title: 'MXM®', desc: '3D Chrome Experiment' },
  { id: 'clearwave', background: 'black', mobileSrc: '/videos/clearwave.mp4', desktopSrc: '/videos/clearwave.mp4', title: 'ClearWave™', desc: '3D Glass Experiment' },
  { id: '2000', background: '#c3c3c3', mobileSrc: '/videos/2000m.mp4', desktopSrc: '/videos/2000.mp4', title: '2000+®', desc: 'Type & Logo Design' },
  { id: 'bleu-mercure', background: 'black', mobileSrc: '/videos/bm.mp4', desktopSrc: '/videos/bm.mp4', title: 'Bleu Mercure®', desc: 'Various clothing designs' },
  { id: 'nokia', background: '#84b176', mobileSrc: '/videos/nokia.mp4', desktopSrc: '/videos/nokia.mp4', title: 'Obsidian Factory', desc: 'Pixel art logo design' },
  { id: 'cphr-1', background: 'black', mobileSrc: '/videos/cphrm.mp4', desktopSrc: '/videos/cphr.mp4', title: 'CPHR®', desc: 'Logo design & 3D Render' },
  { id: 'cphr-2', background: 'black', mobileSrc: '/videos/cphr2m.mp4', desktopSrc: '/videos/cphr2.mp4', title: 'CPHR®', desc: 'Logo design & 3D Render' },
  { id: 'dzt', background: 'black', mobileSrc: '/videos/dztm.mp4', desktopSrc: '/videos/dzt.mp4', title: 'DZT', desc: 'Various Type Beat Artworks' },
  { id: 'neueweb', background: 'black', mobileSrc: '/videos/neuewebm.mp4', desktopSrc: '/videos/neueweb.mp4', title: 'Neueweb®', desc: 'Branding' },
  { id: 'advena', background: 'white', mobileSrc: '/videos/advenam.mp4', desktopSrc: '/videos/advena.mp4', title: 'Advena', desc: 'Golden ratio logo design' },
  { id: 'shapes', background: 'white', mobileSrc: '/videos/shapesm.mp4', desktopSrc: '/videos/shapes.mp4', title: 'Shapes', desc: 'Digital shape exploration' },
  { id: 'wecg', background: 'black', mobileSrc: '/videos/wecgm.mp4', desktopSrc: '/videos/wecg.mp4', title: 'WECG', desc: 'Logo Design' },
];

const hydrated = ref(false);
const width = ref(1024);
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

const swiperInstance = ref(null);
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const isScrolling = ref(false);
const SCROLL_LOCK_MS = 700; // évite les scrolls multiples trop rapprochés

const onWheel = (event) => {
  if (!swiperInstance.value || isScrolling.value) return;

  const delta = event.deltaY || 0;
  if (Math.abs(delta) < 20) return;

  isScrolling.value = true;
  delta > 0 ? swiperInstance.value.slideNext() : swiperInstance.value.slidePrev();

  setTimeout(() => {
    isScrolling.value = false;
  }, SCROLL_LOCK_MS);
};

const activeIndex = ref(0);
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<style lang="scss">
.hero-swiper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overscroll-behavior: none; /* évite le rebond / scroll du viewport */

  @supports (height: 100dvh) {
    height: 100dvh;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  pointer-events: none; /* aucune interaction possible → pas de plein écran */
  z-index: 0;
}

.caption-fixed {
  position: fixed;
  left: 50%;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 440px;
  min-height: 60px;
  padding: 0 16px;
  text-align: center;
  background: #f2f2f2;
  border-radius: 5px;
  z-index: 9999;
}

.caption-fixed strong {
  font-family: "Lausanne 500";
}

.caption-fixed span {
  font-family: "Lausanne 300";
}

@media screen and (max-width: 700px) {
  .hero-swiper {
    height: 100vh; // éviter 100dvh sur anciens devices
  }

  .caption-fixed {
    left: 10px;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
    transform: none;
    width: calc(100vw - 20px);
    padding: 10px 14px;
    font-size: 14px;
    justify-content: flex-start;
  }
}
</style>
