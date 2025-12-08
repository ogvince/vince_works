<template>
  <div class="hero-swiper" @wheel.prevent="onWheel">
    <swiper
      :loop="true"
      :modules="modules"
      :mousewheel="false"
      :keyboard="{ enabled: true }"
      :breakpoints="{
        '0': { direction: 'vertical' },
        '900': { direction: 'vertical' }
      }"
      effect="fade"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <!-- 0 - MXM -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <!-- Mobile -->
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/mxm.mp4" type="video/mp4" />
          </video>
          <!-- Desktop -->
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/mxm.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 1 - ClearWave -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/clearwave.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/clearwave.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 2 - 2000 -->
      <swiper-slide style="background:#c3c3c3">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/2000m.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/2000.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 3 - Bleu Mercure -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/bm.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/bm.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 4 - Nokia -->
      <swiper-slide style="background:#84b176">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/nokia.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/nokia.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 5 - CPHR (M) -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/cphrm.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/cphr.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 6 - CPHR 2 -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/cphr2m.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/cphr2.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 7 - DZT -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/dztm.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/dzt.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 8 - Neueweb -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/neuewebm.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/neueweb.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 9 - Advena -->
      <swiper-slide style="background:white">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/advenam.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/advena.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 10 - Shapes -->
      <swiper-slide style="background:white">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/shapesm.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/shapes.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>

      <!-- 11 - WECG -->
      <swiper-slide style="background:black">
        <div class="slide-inner">
          <video
            v-if="hydrated && isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/wecgm.mp4" type="video/mp4" />
          </video>
          <video
            v-else-if="hydrated && !isMobile"
            class="bg-video"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
          >
            <source src="/videos/wecg.mp4" type="video/mp4" />
          </video>
        </div>
      </swiper-slide>
    </swiper>

    <!-- CAPTION FIXE LIÉ AU SLIDE ACTIF -->
    <div class="caption-fixed" v-if="captions[activeIndex]">
      <strong>{{ captions[activeIndex].title }}</strong>
      <span>{{ captions[activeIndex].desc }}</span>
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
    const hydrated = ref(false);
    const width = ref(1024);
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

    // --- Swiper instance & scroll handler (desktop) ---
    const swiperInstance = ref(null);
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };

    const isScrolling = ref(false);
    const SCROLL_LOCK_MS = 700; // durée pendant laquelle on ignore les scrolls suivants

    const onWheel = (event) => {
      if (!swiperInstance.value) return;
      if (isScrolling.value) return;

      const delta = event.deltaY || 0;

      // petit mouvement → on ignore
      if (Math.abs(delta) < 20) return;

      isScrolling.value = true;

      if (delta > 0) {
        swiperInstance.value.slideNext();
      } else {
        swiperInstance.value.slidePrev();
      }

      setTimeout(() => {
        isScrolling.value = false;
      }, SCROLL_LOCK_MS);
    };

    const captions = ref([
      { title: 'MXM®', desc: '3D Chrome Experiment' },
      { title: 'ClearWave™', desc: '3D Glass Experiment' },
      { title: '2000+®', desc: 'Type & Logo Design' },
      { title: 'Bleu Mercure®', desc: 'Various clothing designs' },
      { title: 'Obsidian Factory', desc: 'Pixel art logo design' },
      { title: 'CPHR®', desc: 'Logo design & 3D Render' },
      { title: 'CPHR®', desc: 'Logo design & 3D Render' },
      { title: 'DZT', desc: 'Various Type Beat Artworks' },
      { title: 'Neueweb®', desc: 'Branding' },
      { title: 'Advena', desc: 'Golden ratio logo design' },
      { title: 'Shapes', desc: 'Digital shape exploration' },
      { title: 'WECG', desc: 'Logo Design' },
    ]);

    const activeIndex = ref(0);

    const onSlideChange = (swiper) => {
      activeIndex.value = swiper.realIndex;
    };

    return {
      modules,
      captions,
      activeIndex,
      onSlideChange,
      hydrated,
      isMobile,
      swiperInstance,
      onSwiper,
      onWheel,
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
  overscroll-behavior: none; /* évite le rebond / scroll du viewport */
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

/* Vidéo de background */
.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none; /* aucune interaction possible → pas de plein écran */
  z-index: 0;
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
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  z-index: 9999;
}

.caption-fixed strong {
  font-family: "Lausanne 500";
}

.caption-fixed span {
  font-family: "Lausanne 300";
}

@media screen and (max-width: 700px) {
  .bg-video {
    object-fit: contain;
  }

  .caption-fixed {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
    font-size: 14px;
    width: calc(100vw - 20px);
    left: 10px;
    transform: none;
    justify-content: flex-start;
    padding: 10px 14px;
  }
}
</style>
