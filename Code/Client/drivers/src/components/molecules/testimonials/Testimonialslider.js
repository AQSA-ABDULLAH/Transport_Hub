import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonialSlider.css";
import "swiper/css/effect-creative";

const Testimonialslider = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCreative,
        ]}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -50],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
          bulletActiveClass: "pagination-bullet-active",
        }}
        grabCursor={true}
        className="testimonialSwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="testimonialcard">
              <p>{slide.testimony}</p>
              <img className="testimony" src={slide.image} alt="" />
              <h3>{slide.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonialslider;
