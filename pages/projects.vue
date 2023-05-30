<template>
  <swiper
  :loop="true"
  :modules="modules"
  :mousewheel="true"
  :autoplay="{
    delay: 8000,
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
  <swiper-slide>
    <img src="/images/projects/vince_01.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/vince_tv.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/vince_insta.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/advena_01.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/advena_02.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/cypher_01.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/cypher_02.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/cypher_03.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/cypher_04.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/neuweb-01.jpg"/>
  </swiper-slide>
  <swiper-slide>
    <img src="/images/projects/neuweb-02.jpg"/>
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