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
