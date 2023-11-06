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

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    // Your Swiper configuration options
  });

  ScrollTrigger.create({
    trigger: "#swiper-section",
    start: "top top",
    end: "bottom bottom",
    onEnter: () => {
      var wrapper = document.querySelector(".swiper-wrapper");
      gsap.to(wrapper, {
        y: -wrapper.scrollHeight,
        duration: 0.5, // Adjust the duration as needed
        ease: "power2.inOut", // You can use different easing functions
      });
    },
    onLeaveBack: () => {
      var wrapper = document.querySelector(".swiper-wrapper");
      gsap.to(wrapper, {
        y: 0,
        duration: 0.5, // Adjust the duration as needed
        ease: "power2.inOut", // You can use different easing functions
      });
    },
  });
});
