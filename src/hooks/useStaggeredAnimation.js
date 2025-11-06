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
    end = "bottom 10%",
    mobileStart = "top 90%",
    mobileEnd = "top 40%",
    numberOfItems = 3
  } = options;

  useEffect(() => {
    console.log('🎯 useStaggeredAnimation running...', {
      containerClass,
      isDesktop,
      numberOfItems
    });

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const container = document.querySelector(containerClass);
      const triggerElement = document.querySelector(trigger);
      
      if (!container || !triggerElement) {
        console.log('❌ Elements not found');
        return;
      }

      console.log('✅ Elements found, starting animation');

      // Clear any existing transforms
      gsap.set(`${containerClass} > *`, { clearProps: "all" });

      if (isDesktop) {
        console.log('🖥️ Desktop animation setup');
        
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
        console.log('📱 Mobile animation setup');
        
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