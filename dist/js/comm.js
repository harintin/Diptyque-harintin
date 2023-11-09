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

gsap.from(".line", {
  y: "100%",
  opacity: 0,
  duration: 1.8,
  ease: "power4.out",
  stagger: 0.2,

  scrollTrigger: {
    trigger: ".about-wrap-tit",
    start: "top center",
  },
});

// slide js

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {});

  var isSnapped = true;

  ScrollTrigger.create({
    trigger: "#swiper-section",
    start: "top top",
    end: "bottom bottom",
    onEnter: () => {
      var wrapper = document.querySelector(".swiper-wrapper");
      var trigger = document.querySelector("#swiper-section");
      var centerY = (trigger.clientHeight - wrapper.clientHeight) / 2;
      gsap.to(wrapper, {
        y: centerY,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          isSnapped = false;
        },
      });
    },
    onLeaveBack: () => {
      var wrapper = document.querySelector(".swiper-wrapper");
      if (isSnapped) {
        var trigger = document.querySelector("#swiper-section");
        var centerY = (trigger.clientHeight - wrapper.clientHeight) / 2;
        gsap.to(wrapper, {
          y: centerY,
          duration: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            isSnapped = false;
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
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    onEnter: () => console.log(`Entered section ${index + 1}`),
    onLeaveBack: () => console.log(`Left section ${index + 1}`),
  });
});

// cursor

document.addEventListener("DOMContentLoaded", function (event) {
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function () {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function () {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      TweenLite.to(cursor, 0.3, {
        opacity: 1,
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px",
    });
  };

  window.onmouseout = function (e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0,
    });
    initCursor = false;
  };
});

// back to top

var button = document.getElementById("back-to-top-button");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

button.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

// smooth

function smoothScrollTo(yPosition) {
  gsap.to(window, {
    duration: 100,
    scrollTo: yPosition,
    ease: "power4.inOut",
  });
}

document.getElementById("scrollButton").addEventListener("click", function () {
  smoothScrollTo(2000);
});
