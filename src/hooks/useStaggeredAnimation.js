import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useStaggeredAnimation = (containerClass, options = {}) => {
  const {
    isDesktop = true,
    desktopGaps = [320, 640, 1280],
    mobileGaps = [120, 120, 120],
    trigger = containerClass,
    start = "top bottom",
    end = "center center",
    mobileStart = "top 90%",
    mobileEnd = "top 40%",
    numberOfItems = 3 // Default to 3, but can be passed dynamically
  } = options;

  useEffect(() => {
    if (isDesktop) {
      // Desktop animation - set initial positions for each child
      for (let i = 0; i < numberOfItems; i++) {
        gsap.set(`${containerClass} > *:nth-child(${i + 1})`, { 
          y: desktopGaps[i] || desktopGaps[desktopGaps.length - 1] 
        });
      }
      
      // Animate all children to y:0
      gsap.to(`${containerClass} > *`, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          scrub: true,
          once: true,
        },
      });
    } else {
      // Mobile animation - set initial positions for each child
      for (let i = 0; i < numberOfItems; i++) {
        gsap.set(`${containerClass} > *:nth-child(${i + 1})`, { 
          y: mobileGaps[i] || mobileGaps[mobileGaps.length - 1] 
        });
      }
      
      // Animate each child individually on mobile
      for (let i = 0; i < numberOfItems; i++) {
        gsap.to(`${containerClass} > *:nth-child(${i + 1})`, {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: `${containerClass} > *:nth-child(${i + 1})`,
            start: mobileStart,
            end: mobileEnd,
            scrub: true,
            once: true,
          },
        });
      }
    }
  }, [isDesktop, containerClass, desktopGaps, mobileGaps, trigger, start, end, mobileStart, mobileEnd, numberOfItems]);
};