import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useStaggeredAnimation = (containerClass, options = {}) => {
  const {
    isDesktop = true,
    desktopGaps = [320, 440, 680],
    mobileGaps = [120, 120, 120],
    trigger = containerClass,
    start = "10% bottom",
    end = "center 30%",
    mobileStart = "top 80%",
    mobileEnd = "bottom 20%",
    numberOfItems = 3
  } = options;

  useEffect(() => {

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const container = document.querySelector(containerClass);
      const triggerElement = document.querySelector(trigger);
      
      if (!container || !triggerElement) {
        return;
      }

      // Clear any existing transforms
      gsap.set(`${containerClass} > *`, { clearProps: "all" });

      if (isDesktop) {
        
        // Set initial positions for desktop
        for (let i = 0; i < numberOfItems; i++) {
          gsap.set(`${containerClass} > *:nth-child(${i + 1})`, { 
            y: desktopGaps[i] || desktopGaps[desktopGaps.length - 1] 
          });
        }
        
        // Animate all cards together
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
        
        // Set initial positions for mobile
        for (let i = 0; i < numberOfItems; i++) {
          gsap.set(`${containerClass} > *:nth-child(${i + 1})`, { 
            y: mobileGaps[i] || mobileGaps[mobileGaps.length - 1] 
          });
        }
        
        // Animate each card individually on mobile
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
    }, 500);

    return () => clearTimeout(timer);
  }, [isDesktop, containerClass, desktopGaps, mobileGaps, trigger, start, end, mobileStart, mobileEnd, numberOfItems]);
};