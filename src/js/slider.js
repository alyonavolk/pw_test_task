import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export class Slider {
  constructor (
    selector = ".swiper",
    config = {
      slidesPerView: "auto",
      spaceBetween: 20,
      direction: "horizontal",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    }
  ) {
    this.selector = selector;
    if (this.selector) {
      this.slider = new Swiper(selector, {
        ...config,
        modules: [Navigation],
        autoHeight: true
      });
    }
  }

  init (selector) {
    this.clickSlides();
    this.slider.init(selector);
  }

  clickSlides () {
    this.slider.on("activeIndexChange", () => {
      this.currentSlides(".slider__content--current");
    });
  }
}
