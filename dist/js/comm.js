// slide txt

gsap.from(".word", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,

  scrollTrigger: {
    trigger: ".about-bottom",
    start: "top center",
  },
});

// slide js

// document.addEventListener("DOMContentLoaded", function () {
//   var swiper = new Swiper(".mySwiper", {
//     // Your Swiper configuration options
//   });

//   ScrollTrigger.create({
//     trigger: "#swiper-section",
//     start: "top top",
//     end: "bottom bottom",
//     onEnter: () => {
//       var wrapper = document.querySelector(".swiper-wrapper");
//       gsap.to(wrapper, {
//         y: -wrapper.scrollHeight,
//         duration: 0.5, // Adjust the duration as needed
//         ease: "power2.inOut", // You can use different easing functions
//       });
//     },
//     onLeaveBack: () => {
//       var wrapper = document.querySelector(".swiper-wrapper");
//       gsap.to(wrapper, {
//         y: 0,
//         duration: 0.5, // Adjust the duration as needed
//         ease: "power2.inOut", // You can use different easing functions
//       });
//     },
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    // Your Swiper configuration options
  });

  var isSnapped = false; // Add this variable to track if the snap is active

  ScrollTrigger.create({
    trigger: "#swiper-section",
    start: "top top",
    end: "bottom top",
    onEnter: () => {
      var wrapper = document.querySelector(".swiper-wrapper");
      var trigger = document.querySelector("#swiper-section");
      var centerY = (trigger.clientHeight - wrapper.clientHeight) / 2; // Center the snapped slider
      gsap.to(wrapper, {
        y: centerY,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          isSnapped = true; // Snap is active when animation completes
        },
      });
    },
    onLeaveBack: () => {
      var wrapper = document.querySelector(".swiper-wrapper");
      if (isSnapped) {
        // Prevent snap release when scrolling quickly
        var trigger = document.querySelector("#swiper-section");
        var centerY = (trigger.clientHeight - wrapper.clientHeight) / 2; // Center the snapped slider
        gsap.to(wrapper, {
          y: centerY,
          duration: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            isSnapped = false; // Snap is released when animation completes
          },
        });
      }
    },
  });

  swiper.on("slideChange", function () {
    if (swiper.isEnd) {
      ScrollTrigger.getById("swiper-section").disable();
      swiper.detachEvents(); // Disable swiper events when you reach the last slide
    } else {
      ScrollTrigger.getById("swiper-section").enable();
      swiper.attachEvents(); // Enable swiper events when not on the last slide
    }
  });
});
