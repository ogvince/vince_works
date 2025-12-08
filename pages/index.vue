<template>
  <swiper
    :loop="true"
    :modules="modules"
    :mousewheel="true"
    :keyboard="{ enabled: true }"
    :breakpoints="{
      '0': { direction: 'vertical' },
      '900': { direction: 'horizontal' }
    }"
    effect="fade"
  >
    <swiper-slide class="landing">
      <div class="slide-inner">
        <!-- Vidéo mobile -->
        <video
          v-if="isMobile"
          class="bg-video"
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
        >
          <!-- tu peux remplacer par /videos/intro-mobile.mp4 si besoin -->
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

        <!-- Vidéo desktop -->
        <video
          v-else
          class="bg-video"
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Mousewheel, Keyboard, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useDevice } from '@/composables/useDevice';
import { computed } from 'vue';

import 'swiper/css';
import 'swiper/css/effect-fade';

const { windowWidth } = useDevice();
const isDesktop = computed(() => windowWidth.value >= 700);
const isMobile = computed(() => windowWidth.value < 700);

const modules = [Mousewheel, Keyboard, Autoplay, EffectFade];
</script>

<style lang="scss">
.swiper {
  width: 100vw;
  height: 100vh;

  @supports (height: 100dvh) {
    height: 100dvh;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    position: relative;
  }
}

.landing {
  background: black;
}

.slide-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Vidéo de fond : remplace complètement .intro-video */
.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none; /* ⬅️ empêche tout clic et plein écran */
  z-index: 0;
}
</style>