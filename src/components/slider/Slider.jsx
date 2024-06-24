import "./slider.scss";
import React, { useEffect, useRef } from "react";
import { Slider as SliderPlugin } from "../../js/slider";
import Btn from "../btn/Btn";
import Arrow from "../arrow/arrow";

const Slider = ({ items = [], instance = "swiper" }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new SliderPlugin(`.${instance}`);
  }, []);

  return (
    <div className="slider">
      <div className={`swiper ${instance}`} ref={swiperRef}>
        <div className="swiper-wrapper">
          {items.map((item) => {
            return <div className="swiper-slide">
              {item}
            </div>;
          })}
        </div>
      </div>
      <div className="slider__btn">
        <Btn classes="btn--isHexagon swiper-button-prev" leftIcon={<Arrow />}/>
        <Btn classes="btn--isHexagon swiper-button-next" leftIcon={<Arrow />} />
      </div>
    </div>
  );
};

export default Slider;
