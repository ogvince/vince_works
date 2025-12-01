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
      <swiper-slide style="background:#c3c3c3">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 1 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 2 -->
      <swiper-slide style="background:#84b176">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 3 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 4 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 5 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 6 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 7 -->
      <swiper-slide style="background:white">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 8 -->
      <swiper-slide style="background:white">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 9 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
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
        </div>
      </swiper-slide>

      <!-- 10 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
            class="intro-video"
          >
            <source src="/videos/0109.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </swiper-slide>

      <!-- 11 -->
      <swiper-slide>
        <div class="slide-inner">
          <img src="/images/projects/vince_tv.jpg" />
        </div>
      </swiper-slide>

      <!-- 12 -->
      <swiper-slide>
        <div class="slide-inner">
          <img src="/images/projects/vince_insta.jpg" />
        </div>
      </swiper-slide>
    </swiper>

    <!-- CAPTION FIXE LIÉ AU SLIDE ACTIF -->
    <div class="caption-fixed">
      {{ captions[activeIndex] }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
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

    // Texte des captions, dans le même ordre que les slides (0 → 12)
    const captions = ref([
      'Logo Branding',             // 0
      'Various clothing design',   // 1
      'Logo Branding',             // 2
      'Logo Branding',             // 3
      'Logo Branding',             // 4
      'Logo Branding',             // 5
      'Logo Branding',             // 6
      'Logo Branding',             // 7
      'Branding Experimentation',  // 8
      'Logo Branding',             // 9
      'Logo Branding',             // 10
      'Logo Branding',             // 11 (vince_tv)
      'Content Production',        // 12 (vince_insta)
    ]);

    const activeIndex = ref(0);

    const onSlideChange = (swiper) => {
      // avec loop: true, on utilise realIndex pour ignorer les duplicats internes
      activeIndex.value = swiper.realIndex;
    };

    return {
      modules,
      captions,
      activeIndex,
      onSlideChange,
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
  /* on le remonte bien au-dessus de la barre du navigateur */
  bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);

  background: #f2f2f2;
  border-radius: 5px;
  min-height: 60px;

  max-width: 440px;
  width: calc(100% - 32px);

  font-family: "Lausanne 500", Lausanne, sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
}

/* Mobile : on peut le remonter encore un peu si tu veux */
@media screen and (max-width: 700px) {
  .caption-fixed {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
    font-size: 14px;
  }
}
</style>
