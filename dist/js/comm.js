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

//   var isSnapped = false; // Initialize the snap state to false

//   ScrollTrigger.create({
//     trigger: "#swiper-section",
//     start: "top top",
//     end: "bottom top",
//     onEnter: () => {
//       var wrapper = document.querySelector(".swiper-wrapper");
//       var trigger = document.querySelector("#swiper-section");
//       var centerY = (trigger.clientHeight - wrapper.clientHeight) / 2; // Center the snapped slider
//       gsap.to(wrapper, {
//         y: centerY,
//         duration: 0.5,
//         ease: "power2.inOut",
//         onComplete: () => {
//           isSnapped = true; // Snap is active when animation completes
//         },
//       });
//     },
//     onLeaveBack: () => {
//       var wrapper = document.querySelector(".swiper-wrapper");
//       if (isSnapped) {
//         // Prevent snap release when scrolling quickly
//         var trigger = document.querySelector("#swiper-section");
//         var centerY = (trigger.clientHeight - wrapper.clientHeight) / 2; // Center the snapped slider
//         gsap.to(wrapper, {
//           y: centerY,
//           duration: 0.2,
//           ease: "power2.inOut",
//           onComplete: () => {
//             isSnapped = false; // Snap is released when animation completes
//           },
//         });
//       }
//     },
//   });

//   swiper.on("slideChange", function () {
//     if (swiper.isEnd) {
//       ScrollTrigger.getById("swiper-section").disable();
//     } else {
//       ScrollTrigger.getById("swiper-section").enable();
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    // Your Swiper configuration options
  });

  var isSnapped = false; // Initialize the snap state to false

  ScrollTrigger.create({
    trigger: "#swiper-section",
    start: "top center",
    end: "bottom center",
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
    } else {
      ScrollTrigger.getById("swiper-section").enable();
    }
  });
});

// scroll smooth

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("#sectionAbout");

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: "#main",
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    onEnter: () => console.log(`Entered section ${index + 1}`),
    onLeaveBack: () => console.log(`Left section ${index + 1}`),
  });
});

gsap.registerPlugin(ScrollTrigger);

const slide = document.querySelectorAll("#swiper-section");

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: "#slide-tit",
    start: "top top", // Snap when the top of the section hits the top of the viewport
    end: "bottom top", // Snap when the bottom of the section hits the top of the viewport
    pin: true, // Pin the section while it's in view
    pinSpacing: false, // Disable pinSpacing to avoid gaps between sections
    onEnter: () => console.log(`Entered section ${index + 1}`),
    onLeaveBack: () => console.log(`Left section ${index + 1}`),
  });
});
