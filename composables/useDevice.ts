import { onMounted, onUnmounted, ref } from 'vue';
import Bowser from 'bowser';

export function useDevice() {
  const windowWidth = ref(0);
  const windowHeight = ref(0);
  const deviceType = ref('');
  const browserName = ref('');

  const updateDimensions = () => {
    if (typeof window === 'undefined') return;
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  };

  onMounted(() => {
    if (typeof window === 'undefined') return;
    const parser = Bowser.getParser(window.navigator.userAgent);
    updateDimensions();
    deviceType.value = parser.getPlatformType();
    browserName.value = parser.getBrowserName();

    window.addEventListener('resize', updateDimensions);
  });

  onUnmounted(() => {
    if (typeof window === 'undefined') return;
    window.removeEventListener('resize', updateDimensions);
  });

  return {
    windowWidth,
    windowHeight,
    deviceType,
    browserName,
  };
}
