import { ref, onMounted, onUnmounted } from 'vue';
import Bowser from "bowser";

export function useDevice() {
  const windowWidth = ref(0);
  const windowHeight = ref(0);
  const deviceType = ref('');
  const browserName = ref('');

  const updateDimensions = () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  };

  onMounted(() => {
    const parser = Bowser.getParser(window.navigator.userAgent);
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
    deviceType.value = parser.getPlatformType();
    browserName.value = parser.getBrowserName();

    window.addEventListener('resize', updateDimensions);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateDimensions);
  });

  return {
    windowWidth,
    windowHeight,
    deviceType,
    browserName
  }
}