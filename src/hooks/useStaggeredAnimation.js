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
    mobileEnd = "top 40%"
  } = options;

  useEffect(() => {
    if (isDesktop) {
      // Desktop animation
      gsap.set(`${containerClass} > *:nth-child(1)`, { y: desktopGaps[0] });
      gsap.set(`${containerClass} > *:nth-child(2)`, { y: desktopGaps[1] });
      gsap.set(`${containerClass} > *:nth-child(3)`, { y: desktopGaps[2] });
      
      gsap.to(`${containerClass} > *`, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          scrub: true,
          toggleActions: "play none none none",
          once: true,
        },
      });
    } else {
      // Mobile animation
      gsap.set(`${containerClass} > *:nth-child(1)`, { y: mobileGaps[0] });
      gsap.set(`${containerClass} > *:nth-child(2)`, { y: mobileGaps[1] });
      gsap.set(`${containerClass} > *:nth-child(3)`, { y: mobileGaps[2] });
      
      // Individual card animations for mobile
      gsap.to(`${containerClass} > *:nth-child(1)`, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: `${containerClass} > *:nth-child(1)`,
          start: mobileStart,
          end: mobileEnd,
          scrub: true,
          toggleActions: "play none none none",
          once: true,
        },
      });
      
      gsap.to(`${containerClass} > *:nth-child(2)`, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: `${containerClass} > *:nth-child(2)`,
          start: mobileStart,
          end: mobileEnd,
          scrub: true,
          toggleActions: "play none none none",
          once: true,
        },
      });
      
      gsap.to(`${containerClass} > *:nth-child(3)`, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: `${containerClass} > *:nth-child(3)`,
          start: mobileStart,
          end: mobileEnd,
          scrub: true,
          toggleActions: "play none none none",
          once: true,
        },
      });
    }
  }, [isDesktop, containerClass, desktopGaps, mobileGaps, trigger, start, end, mobileStart, mobileEnd]);
};