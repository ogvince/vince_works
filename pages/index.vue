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
  effect="fade">
  <swiper-slide>
    <img src="/images/slider/frames.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/slider/code.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/slider/virgil.jpg"/>
  </swiper-slide>
    <swiper-slide>
      <img src="/images/slider/screen-print.jpg"/>
    </swiper-slide>
    <swiper-slide>
      <img src="/images/slider/tower.jpg"/>
    </swiper-slide>
      <swiper-slide>
        <img src="/images/slider/saigon-bike.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider/colors.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider/pc.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider/tee.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider/hanoi-couple.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider/keyboard.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider/artisan.jpg"/>
      </swiper-slide>

    </swiper>
  </template>
  <script>

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
      return {
        modules: [Mousewheel, Keyboard, Autoplay, EffectFade],
      };
    },
  };
  </script>

<style lang="scss">
  .swiper-slide {
    width: 100vw;
    height: 100vh;
    img{
      width: 100%;
      height:100%;
      object-fit:cover;
    }
}
</style>