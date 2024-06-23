import swiper from "swiper";
import { Navigation } from "swiper/modules";

export default class Slider {
  constructor (
    selector = ".swiper",
    config = {
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    }
  ) {
    this.selector = selector;
    if (this.selector) {
      this.slider = new swiper(selector, {
        ...config,
        modules: [Navigation],
        init: false,
        autoHeight: true,
        simulateTouch: false
      });
      this.init(this.selector);
    }
  }

  init (selector) {
    this.slider.init(selector);
  }
}
