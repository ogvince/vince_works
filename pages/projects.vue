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
  <swiper-slide style="background:#c3c3c3">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/2000.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

    <swiper-slide style="background:black">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/bm.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Various clothing design</div>

  </swiper-slide>

<swiper-slide style="background:#84b176">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/nokia.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>


 <swiper-slide style="background:black">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/cphr.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>



  
 <swiper-slide style="background:black">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/cphr2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>


 <swiper-slide style="background:black">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/dzt.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

  <swiper-slide style="background:black">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/neueweb.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

    <swiper-slide style="background:white">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/advena.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

    <swiper-slide style="background:white">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/shapes.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Branding Experimentation</div>

  </swiper-slide>

      <swiper-slide style="background:black">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/wecg.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

   <swiper-slide style="background:black">
   <video
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  class="intro-video"
>
      <source src="/videos/0109.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

  
  <swiper-slide>
    <img src="/images/projects/vince_tv.jpg"/>
     <div class="caption">Logo Branding</div>
  </swiper-slide>


  <swiper-slide>
    <img src="/images/projects/vince_insta.jpg"/>
     <div class="caption">Content Production</div>
  </swiper-slide>
  

    </swiper>
  </template>
<script>
import { onMounted, onBeforeUnmount } from 'vue';
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

    const setVH = () => {
      const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    onMounted(() => {
      setVH();
      window.addEventListener('resize', setVH);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', setVH);
    });

    return { modules };
  },
};
</script>


<style lang="scss">
.swiper{
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  .swiper-slide {
   width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img{
      width: 100%;
      height:100%;
      object-fit:cover;
    }
    video{
      height:100%;
      width: auto;
      color:white;
      pointer-events: none;
    }
}
}
.swiper-slide .caption {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 16px; // ou un peu plus si tu veux
  min-height: 48px;

  background: #F2F2F2;
  border-radius: 5px;
  padding: 8px 12px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;
}


@media screen and (max-width: 700px){
  .swiper-slide video {
    height: auto !important;
    width: 100% !important;
    z-index: 900 !important;
  }

  .swiper-slide .caption {
    position: absolute;
    bottom: 20px; 
    width: calc(100vw - 20px);
    height: 60px;

    background: #F2F2F2;
    z-index: 999 !important;
  }



}
</style>