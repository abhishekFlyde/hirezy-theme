"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStaggeredScroll = void 0;

var _react = require("react");

var useStaggeredScroll = function useStaggeredScroll(containerClass) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$isDesktop = options.isDesktop,
      isDesktop = _options$isDesktop === void 0 ? true : _options$isDesktop,
      _options$desktopGaps = options.desktopGaps,
      desktopGaps = _options$desktopGaps === void 0 ? [320, 440, 680] : _options$desktopGaps,
      _options$mobileGaps = options.mobileGaps,
      mobileGaps = _options$mobileGaps === void 0 ? [120, 120, 120] : _options$mobileGaps,
      _options$trigger = options.trigger,
      trigger = _options$trigger === void 0 ? containerClass : _options$trigger,
      _options$numberOfItem = options.numberOfItems,
      numberOfItems = _options$numberOfItem === void 0 ? 3 : _options$numberOfItem,
      _options$animationDur = options.animationDuration,
      animationDuration = _options$animationDur === void 0 ? 0.8 : _options$animationDur,
      _options$easing = options.easing,
      easing = _options$easing === void 0 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : _options$easing,
      _options$startPositio = options.startPosition,
      startPosition = _options$startPositio === void 0 ? 0.4 : _options$startPositio,
      _options$endPosition = options.endPosition,
      endPosition = _options$endPosition === void 0 ? 0.1 : _options$endPosition,
      _options$staggerDelay = options.staggerDelay,
      staggerDelay = _options$staggerDelay === void 0 ? 0.15 : _options$staggerDelay,
      _options$allowReverse = options.allowReverse,
      allowReverse = _options$allowReverse === void 0 ? false : _options$allowReverse;
  (0, _react.useEffect)(function () {
    var container = document.querySelector(containerClass);
    var triggerElement = document.querySelector(trigger);
    if (!container || !triggerElement) return;
    var cards = Array.from(container.children);
    if (cards.length === 0) return;
    var hasAnimated = false;
    var ticking = false;
    var transitionStyle = "transform ".concat(animationDuration, "s ").concat(easing, ", opacity ").concat(animationDuration, "s ease-out"); // ✅ Initial positions

    cards.forEach(function (card, index) {
      var gap = isDesktop ? desktopGaps[index] || desktopGaps[desktopGaps.length - 1] : mobileGaps[index] || mobileGaps[mobileGaps.length - 1];
      card.style.transform = "translateY(".concat(gap, "px)");
      card.style.opacity = "1"; // No opacity effect for mobile

      card.style.transition = transitionStyle;
      card.style.willChange = "transform";
    });

    var handleScroll = function handleScroll() {
      if (hasAnimated && !allowReverse || ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var rect = triggerElement.getBoundingClientRect();
        var windowHeight = window.innerHeight; // ✅ Desktop behavior (original)

        if (isDesktop) {
          var startPoint = windowHeight * startPosition;
          var endPoint = windowHeight * endPosition;
          var progress = 0;

          if (rect.top < startPoint) {
            var distance = Math.max(0, startPoint - rect.top);
            var totalDistance = startPoint - endPoint;
            progress = Math.min(1, distance / totalDistance);
          }

          cards.forEach(function (card, index) {
            var initialGap = desktopGaps[index] || desktopGaps[desktopGaps.length - 1];
            var stagger = index * staggerDelay;
            var cardProgress = Math.max(0, Math.min(1, (progress - stagger) / (1 - stagger)));
            var easeProgress = 1 - Math.pow(1 - cardProgress, 2);
            var translateY = initialGap * (1 - easeProgress);
            card.style.transform = "translateY(".concat(translateY, "px)");
          });
          if (progress >= 0.95 && !hasAnimated) hasAnimated = true;
        } // ✅ MOBILE: independent scroll zones per card
        else {
            var scrollTop = window.scrollY || window.pageYOffset;
            var triggerTop = triggerElement.offsetTop;
            var scrollDistance = scrollTop - triggerTop + windowHeight * 0.8; // change this value for distance between cards 👇

            var scrollGap = 450; // px per card — try 400 for more space

            cards.forEach(function (card, index) {
              var revealStart = index * scrollGap;
              var revealEnd = revealStart + scrollGap; // calculate progress per card

              var rawProgress = (scrollDistance - revealStart) / (revealEnd - revealStart);
              var progress = Math.max(0, Math.min(1, rawProgress));
              var easeProgress = 1 - Math.pow(1 - progress, 2);
              var initialGap = mobileGaps[index] || mobileGaps[mobileGaps.length - 1];
              var translateY = initialGap * (1 - easeProgress);
              card.style.transform = "translateY(".concat(translateY, "px)"); // ✅ Once fully animated, lock position (disable reverse)

              if (progress >= 1) {
                card.dataset.animated = "true";
              }
            });
            var allDone = cards.every(function (c) {
              return c.dataset.animated === "true";
            });

            if (allDone) {
              hasAnimated = true;
              window.removeEventListener("scroll", handleScroll);
              console.log("🎉 All cards animated once!");
            }
          }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    window.addEventListener("resize", handleScroll, {
      passive: true
    });
    handleScroll();
    return function () {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isDesktop, containerClass, desktopGaps, mobileGaps, trigger, numberOfItems, animationDuration, easing, startPosition, endPosition, staggerDelay, allowReverse]);
};

exports.useStaggeredScroll = useStaggeredScroll;