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
    <video autoplay muted loop class="intro-video">
      <source src="/videos/2000.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

    <swiper-slide style="background:black">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/bm.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Various clothing design</div>

  </swiper-slide>

<swiper-slide style="background:#84b176">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/nokia.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>


 <swiper-slide style="background:black">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/cphr.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>



  
 <swiper-slide style="background:black">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/cphr2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>


 <swiper-slide style="background:black">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/dzt.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

  <swiper-slide style="background:black">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/neueweb.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

    <swiper-slide style="background:white">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/advena.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

    <swiper-slide style="background:white">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/shapes.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Branding Experimentation</div>

  </swiper-slide>

      <swiper-slide style="background:black">
    <video autoplay muted loop class="intro-video">
      <source src="/videos/wecg.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="caption">Logo Branding</div>

  </swiper-slide>

   <swiper-slide style="background:black">
    <video autoplay muted loop class="intro-video">
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
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 100%;
      height:100%;
      object-fit:cover;
    }
    video{
      height:100%;
      width: auto;
      color:white;
    }
}
}
 .caption {
    position: absolute;
    bottom: 10px;
    background: #F2F2F2;
    left: calc(50vw - 220px);
    z-index: 1000;
    width: 440px;
    height: 60px;
    border-radius: 5px;
    font-family: Lausanne;
    font-family: "Lausanne 500";
    display: flex;
    align-items: center;
    justify-content: center;
}


@media screen and (max-width: 700px){
video{
  height:auto!important;
  width: 100%!important;
}

 .caption {
    position: absolute;
    bottom: 10px;
    background: #F2F2F2;
    left: 10px;
    z-index: 1000;
    width: calc(100vw - 20px);
    height: 60px;
    border-radius: 5px;
    font-family: Lausanne;
    font-family: "Lausanne 500";
    display: flex;
    align-items: center;
    justify-content: center;
}


}
</style>