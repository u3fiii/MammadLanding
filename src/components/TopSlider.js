import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import slider1 from "../assets/img/slider1.svg";
import slider2 from "../assets/img/slider2.svg";
import slider3 from "../assets/img/slider3.svg";
import slider4 from "../assets/img/slider4.svg";

function TopSlider() {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className="top-slider">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img src={slider1} alt="Slider 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="Slider 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="Slider 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="Slider 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopSlider;
