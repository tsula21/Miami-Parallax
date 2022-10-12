const sliderMain = new Swiper(".slier_main", {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  mousewheel: {
    sensitivity: 1.5,
  },
  parallax: true,

  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});

const sliderBg = new Swiper(".slier_bg", {
  centerSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll(".slider__item").forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("opened");
  });
});

let desc = document.querySelector(".description");
sliderMain.on("slideChange", (e) => {
  sliderMain.activeIndex > 0
    ? desc.classList.add("hidden")
    : desc.classList.remove("hidden");
});
