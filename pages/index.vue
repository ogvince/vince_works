<template>
  <swiper
  :loop="true"
  :modules="modules"
  :mousewheel="true"
  :keyboard="{
    enabled: true,
  }"
  :breakpoints="{
    '0': {
      direction: 'vertical',
    },
    '900': {
      direction: 'horizontal',
    }
  }"
  effect="fade">
  <swiper-slide class="landing">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/intro.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </swiper-slide>

    </swiper>
  </template>
  <script setup lang="ts">
  import { Mousewheel, Keyboard, Autoplay, EffectFade } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { useDevice } from '@/composables/useDevice';
  import { computed, ref } from 'vue';

  import 'swiper/css';
  import 'swiper/css/effect-fade';

  const { deviceType, windowWidth } = useDevice();
  const isDesktop = computed(() => windowWidth.value >= 700);
  const isMobile = computed(() => windowWidth.value < 700);

  // Swiper and SwiperSlide need to be exposed for the template to use them
  const expose = {
    Swiper,
    SwiperSlide
  }

  const modules = [Mousewheel, Keyboard, Autoplay, EffectFade];
  </script>

<style lang="scss">
.swiper{
  width: 100vw;
  height: 100vh;
  .swiper-slide {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 100%;
      height:100%;
      object-fit:cover;
    }
}
}



.intro-video{
  height:100%;
  width:auto;
  position: absolute;
}

.landing{
  background: black;
}
</style>
