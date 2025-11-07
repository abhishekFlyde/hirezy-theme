// import { useEffect } from 'react';

// export const useStaggeredScroll = (containerClass, options = {}) => {
//   const {
//     isDesktop = true,
//     desktopGaps = [320, 440, 680],
//     mobileGaps = [120, 120, 120],
//     trigger = containerClass,
//     numberOfItems = 3,
    
//     // ✅ NEW: Animation timing control
//     animationDuration = 0.8, // seconds
//     easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
//     // ✅ NEW: Start and end positions (viewport percentage)
//     startPosition = 0.4,  // 40% from top - animation start
//     endPosition = 0.1,    // 10% from top - animation complete
    
//     // ✅ NEW: Stagger delay between cards
//     staggerDelay = 0.15,  // seconds between each card
    
//     // ✅ NEW: Reverse scroll behavior
//     allowReverse = false  // reverse scroll pe animate kare ya nahi
    
//   } = options;

//   useEffect(() => {
//     const container = document.querySelector(containerClass);
//     const triggerElement = document.querySelector(trigger);
    
//     if (!container || !triggerElement) return;

//     const cards = Array.from(container.children);
//     if (cards.length === 0) return;

//     let hasAnimated = false;
//     let ticking = false;

//     // ✅ CSS transition set karein based on duration and easing
//     const transitionStyle = `transform ${animationDuration}s ${easing}, opacity ${animationDuration}s ease-out`;

//     // ✅ Initial positions
//     cards.forEach((card, index) => {
//       const gap = isDesktop ? 
//         (desktopGaps[index] || desktopGaps[desktopGaps.length - 1]) :
//         (mobileGaps[index] || mobileGaps[mobileGaps.length - 1]);
      
//       card.style.transform = `translateY(${gap}px)`;
//       card.style.opacity = '0.7';
//       card.style.transition = transitionStyle;
//       card.style.willChange = 'transform, opacity';
//     });

//     const handleScroll = () => {
//       if ((hasAnimated && !allowReverse) || ticking) return;
      
//       ticking = true;
//       requestAnimationFrame(() => {
//         const rect = triggerElement.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
        
//         // ✅ Start and end points calculate karein
//         const startPoint = windowHeight * startPosition;
//         const endPoint = windowHeight * endPosition;
        
//         let progress = 0;
        
//         if (rect.top < startPoint) {
//           const distance = Math.max(0, startPoint - rect.top);
//           const totalDistance = startPoint - endPoint;
//           progress = Math.min(1, distance / totalDistance);
//         }
        
//         // ✅ Allow reverse animation if enabled
//         if (!allowReverse && progress < 0.95 && hasAnimated) {
//           ticking = false;
//           return;
//         }
        
//         // console.log("Animation Progress:", {
//         //   progress: progress.toFixed(2),
//         //   startPosition,
//         //   endPosition,
//         //   duration: animationDuration
//         // });
        
//         if (progress > 0) {
//           cards.forEach((card, index) => {
//             const initialGap = isDesktop ? 
//               (desktopGaps[index] || desktopGaps[desktopGaps.length - 1]) :
//               (mobileGaps[index] || mobileGaps[mobileGaps.length - 1]);
            
//             // ✅ Staggered animation with configurable delay
//             const stagger = isDesktop ? index * staggerDelay : index * (staggerDelay * 1.5);
//             const cardProgress = Math.max(0, Math.min(1, (progress - stagger) / (1 - stagger)));
            
//             // ✅ Easing function
//             const easeProgress = 1 - Math.pow(1 - cardProgress, 2);
            
//             const translateY = initialGap * (1 - easeProgress);
//             const opacity = 0.7 + (0.3 * easeProgress);
            
//             card.style.transform = `translateY(${translateY}px)`;
//             card.style.opacity = opacity.toString();
//           });
//         }
        
//         // ✅ Mark as completed
//         if (progress >= 0.95 && !hasAnimated) {
//           hasAnimated = true;
//           console.log("🎉 Animation completed!");
//         }
        
//         ticking = false;
//       });
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     window.addEventListener('resize', handleScroll, { passive: true });
    
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleScroll);
//     };
//   }, [isDesktop, containerClass, desktopGaps, mobileGaps, trigger, numberOfItems, 
//       animationDuration, easing, startPosition, endPosition, staggerDelay, allowReverse]);
// };

import { useEffect } from 'react';

export const useStaggeredScroll = (containerClass, options = {}) => {
  const {
    isDesktop = true,
    desktopGaps = [320, 440, 680],
    mobileGaps = [120, 120, 120],
    trigger = containerClass,
    numberOfItems = 3,
    
    // ✅ NEW: Animation timing control
    animationDuration = 0.8, // seconds
    easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
    // ✅ NEW: Start and end positions (viewport percentage)
    startPosition = 0.4,  // 40% from top - animation start
    endPosition = 0.1,    // 10% from top - animation complete
    
    // ✅ NEW: Stagger delay between cards
    staggerDelay = 0.15,  // seconds between each card
    
    // ✅ NEW: Reverse scroll behavior
    allowReverse = false  // reverse scroll pe animate kare ya nahi
    
  } = options;

  useEffect(() => {
    const container = document.querySelector(containerClass);
    const triggerElement = document.querySelector(trigger);
    
    if (!container || !triggerElement) return;

    const cards = Array.from(container.children);
    if (cards.length === 0) return;

    let hasAnimated = false;
    let ticking = false;

    // ✅ CSS transition set karein based on duration and easing
    const transitionStyle = `transform ${animationDuration}s ${easing}, opacity ${animationDuration}s ease-out`;

    // ✅ Initial positions
    cards.forEach((card, index) => {
      const gap = isDesktop ? 
        (desktopGaps[index] || desktopGaps[desktopGaps.length - 1]) :
        (mobileGaps[index] || mobileGaps[mobileGaps.length - 1]);
      
      card.style.transform = `translateY(${gap}px)`;
      card.style.opacity = '0.7';
      card.style.transition = transitionStyle;
      card.style.willChange = 'transform, opacity';
    });

    const handleScroll = () => {
      if ((hasAnimated && !allowReverse) || ticking) return;
      
      ticking = true;
      requestAnimationFrame(() => {
        const rect = triggerElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // ✅ Start and end points calculate karein
        const startPoint = windowHeight * startPosition;
        const endPoint = windowHeight * endPosition;
        
        let progress = 0;
        
        if (rect.top < startPoint) {
          const distance = Math.max(0, startPoint - rect.top);
          const totalDistance = startPoint - endPoint;
          progress = Math.min(1, distance / totalDistance);
        }
        
        // ✅ Allow reverse animation if enabled
        if (!allowReverse && progress < 0.95 && hasAnimated) {
          ticking = false;
          return;
        }
        
        console.log("Animation Progress:", {
          progress: progress.toFixed(2),
          startPosition,
          endPosition,
          duration: animationDuration
        });
        
        if (progress > 0) {
          cards.forEach((card, index) => {
            const initialGap = isDesktop ? 
              (desktopGaps[index] || desktopGaps[desktopGaps.length - 1]) :
              (mobileGaps[index] || mobileGaps[mobileGaps.length - 1]);
            
            // ✅ Staggered animation with configurable delay
            const stagger = isDesktop ? index * staggerDelay : index * (staggerDelay * 1.5);
            const cardProgress = Math.max(0, Math.min(1, (progress - stagger) / (1 - stagger)));
            
            // ✅ Easing function
            const easeProgress = 1 - Math.pow(1 - cardProgress, 2);
            
            const translateY = initialGap * (1 - easeProgress);
            const opacity = 0.7 + (0.3 * easeProgress);
            
            card.style.transform = `translateY(${translateY}px)`;
            card.style.opacity = opacity.toString();
          });
        }
        
        // ✅ Mark as completed
        if (progress >= 0.95 && !hasAnimated) {
          hasAnimated = true;
          console.log("🎉 Animation completed!");
        }
        
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDesktop, containerClass, desktopGaps, mobileGaps, trigger, numberOfItems, 
      animationDuration, easing, startPosition, endPosition, staggerDelay, allowReverse]);
};