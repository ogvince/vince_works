<template>
  <swiper
  :loop="true"
  :modules="modules"
  :mousewheel="true"
  :autoplay="{
    delay: 4500,
    disableOnInteraction: false,
  }"
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
  <swiper-slide v-if="isDesktop">
    <img src="/images/slider/frames.jpg"/>
  </swiper-slide>
  <swiper-slide v-if="isDesktop">
    <img src="/images/slider/code.jpg"/>
  </swiper-slide>
  <swiper-slide v-if="isDesktop">
    <img src="/images/slider/virgil.jpg"/>
  </swiper-slide>
    <swiper-slide v-if="isDesktop">
      <img src="/images/slider/screen-print.jpg"/>
    </swiper-slide>
    <swiper-slide v-if="isDesktop">
      <img src="/images/slider/tower.jpg"/>
    </swiper-slide>
      <swiper-slide v-if="isDesktop">
        <img src="/images/slider/saigon-bike.jpg"/>
      </swiper-slide>
      <swiper-slide v-if="isDesktop">
        <img src="/images/slider/colors.jpg"/>
      </swiper-slide>
      <swiper-slide v-if="isDesktop">
        <img src="/images/slider/pc.jpg"/>
      </swiper-slide>
      <swiper-slide v-if="isDesktop">
        <img src="/images/slider/tee.jpg"/>
      </swiper-slide>
      <swiper-slide v-if="isDesktop">
        <img src="/images/slider/keyboard.jpg"/>
      </swiper-slide>
      <swiper-slide v-if="isDesktop">
        <img src="/images/slider/artisan.jpg"/>
      </swiper-slide>


      <swiper-slide v-if="isMobile">
        <img src="/images/slider/mobile/frames.jpg"/>
      </swiper-slide>
      <swiper-slide v-if="isMobile">
        <img src="/images/slider/mobile/code.jpg"/>
      </swiper-slide>

        <swiper-slide v-if="isMobile">
          <img src="/images/slider/mobile/screen-print.jpg"/>
        </swiper-slide>
        <swiper-slide v-if="isMobile">
          <img src="/images/slider/mobile/tower.jpg"/>
        </swiper-slide>
          <swiper-slide v-if="isMobile">
            <img src="/images/slider/mobile/saigon-bike.jpg"/>
          </swiper-slide>
          <swiper-slide v-if="isMobile">
            <img src="/images/slider/mobile/colors.jpg"/>
          </swiper-slide>
          <swiper-slide v-if="isMobile">
            <img src="/images/slider/mobile/pc.jpg"/>
          </swiper-slide>
          <swiper-slide v-if="isMobile">
            <img src="/images/slider/mobile/tee.jpg"/>
          </swiper-slide>
          <swiper-slide v-if="isMobile">
            <img src="/images/slider/mobile/keyboard.jpg"/>
          </swiper-slide>
          <swiper-slide v-if="isMobile">
            <img src="/images/slider/mobile/artisan.jpg"/>
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
    img{
      width: 100%;
      height:100%;
      object-fit:cover;
    }
}
}

</style>
