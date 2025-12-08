<template>
  <WebglVideoSlider
    :slides="slides"
    :mobileBreakpoint="700"
  />
</template>

<script setup lang="ts">
import WebglVideoSlider from '@/components/WebglVideoSlider.vue';

const slides = [
  {
    desktopSrc: '/videos/mxm.mp4',
    mobileSrc: '/videos/mxm.mp4',
    title: 'MXM®',
    desc: '3D Chrome Experiment',
  },
  {
    desktopSrc: '/videos/clearwave.mp4',
    mobileSrc: '/videos/clearwave.mp4',
    title: 'ClearWave™',
    desc: '3D Glass Experiment',
  },
  {
    desktopSrc: '/videos/2000.mp4',
    mobileSrc: '/videos/2000m.mp4',
    title: '2000+®',
    desc: 'Type & Logo Design',
  },
  {
    desktopSrc: '/videos/bm.mp4',
    mobileSrc: '/videos/bm.mp4',
    title: 'Bleu Mercure®',
    desc: 'Various clothing designs',
  },
  {
    desktopSrc: '/videos/nokia.mp4',
    mobileSrc: '/videos/nokia.mp4',
    title: 'Obsidian Factory',
    desc: 'Pixel art logo design',
  },
  {
    desktopSrc: '/videos/cphr.mp4',
    mobileSrc: '/videos/cphrm.mp4',
    title: 'CPHR®',
    desc: 'Logo design & 3D Render',
  },
  {
    desktopSrc: '/videos/cphr2.mp4',
    mobileSrc: '/videos/cphr2m.mp4',
    title: 'CPHR®',
    desc: 'Logo design & 3D Render',
  },
  {
    desktopSrc: '/videos/dztm.mp4',
    mobileSrc: '/videos/dztm.mp4',
    title: 'DZT',
    desc: 'Various Type Beat Artworks',
  },
  {
    desktopSrc: '/videos/neueweb.mp4',
    mobileSrc: '/videos/neuewebm.mp4',
    title: 'Neueweb®',
    desc: 'Branding',
  },
  {
    desktopSrc: '/videos/advena.mp4',
    mobileSrc: '/videos/advenam.mp4',
    title: 'Advena',
    desc: 'Golden ratio logo design',
  },
  {
    desktopSrc: '/videos/shapes.mp4',
    mobileSrc: '/videos/shapesm.mp4',
    title: 'Shapes',
    desc: 'Digital shape exploration',
  },
  {
    desktopSrc: '/videos/wecg.mp4',
    mobileSrc: '/videos/wecgm.mp4',
    title: 'WECG',
    desc: 'Logo Design',
  },
];
</script>

<style>
/* Tu peux laisser vide, tout le layout est géré par WebglVideoSlider */
</style>
