<template>
  <swiper
  :loop="true"
  :modules="modules"
  :autoplay="{
    delay: 8000,
    disableOnInteraction: false,
  }"
  effect="fade">
      <swiper-slide>
        <img src="/images/slider/saigon-bike.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider/tee.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider/hanoi-couple.jpg"/>
      </swiper-slide>
    </swiper>
  </template>
  <script>
  import { Autoplay, EffectFade } from 'swiper';
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
        modules: [Autoplay, EffectFade],
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