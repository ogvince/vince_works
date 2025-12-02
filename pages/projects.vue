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
          <template v-if="hydrated">
            <!-- Mobile -->
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/2000m.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <!-- Desktop -->
            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 1 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
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

            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 2 -->
      <swiper-slide style="background:#84b176">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
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

            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 3 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
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

            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 4 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
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

            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 5 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/dztm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 6 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/neuewebm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 7 -->
      <swiper-slide style="background:white">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/advenam.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 8 -->
      <swiper-slide style="background:white">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/mobile/shapes_mobile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 9 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/mobile/wecg_mobile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
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
          </template>
        </div>
      </swiper-slide>

      <!-- 10 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <template v-if="hydrated">
            <video
              v-if="isMobile"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline
              class="intro-video"
            >
              <source src="/videos/mobile/0109_mobile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              v-else
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
          </template>
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
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
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

    // --- Détection largeur (simple & SSR-safe) ---
    const hydrated = ref(false);       // vrai uniquement côté client après mount
    const width = ref(1024);           // valeur par défaut côté SSR
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

    // --- Captions ---
    const captions = ref([
      'Logo & type design',                   // 0
      'Various clothing design & 3D render ', // 1
      'Logo design',                          // 2
      'Logo design & 3D render',              // 3
      'Logo design & 3D render',              // 4
      'Various artworks',                     // 5
      'Branding',                             // 6
      'Branding & artworks',                  // 7
      'Shapes experiment',                    // 8
      'Logo design',                          // 9
      'Logo design & 3D render',              // 10
      'Content design',                       // 11
      'Content Production',                   // 12
    ]);

    const activeIndex = ref(0);

    const onSlideChange = swiper => {
      activeIndex.value = swiper.realIndex;
    };

    return {
      modules,
      captions,
      activeIndex,
      onSlideChange,
      hydrated,
      isMobile,
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
  object-fit: cover;
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
  bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);

  background: #f2f2f2;
  border-radius: 5px;
  min-height: 60px;
  width: 440px;

  font-family: "Lausanne 500", Lausanne, sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
}

@media screen and (max-width: 700px) {
  .caption-fixed {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
    font-size: 14px;
    width: calc(100vw - 20px);
    left: 10px;
    transform: inherit;
  }
}
</style>
