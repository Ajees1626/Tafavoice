import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: 0 },
    ease: 'power2.inOut',
  });
};

export const scrollToElement = (element, offset = 0) => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: element,
      offsetY: offset,
    },
    ease: 'power2.inOut',
  });
};

