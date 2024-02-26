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
import "./gallerySlider.css";
import "swiper/css/effect-creative";

const SwiperSlider = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={2}
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
          dynamicMainBullets: 6,
          bulletActiveClass: "Gallery-swiper-pagination-bullet-active",
        }}
        grabCursor={true}
        className="myGallerySwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="Gallerycard">
              <img
                src={slide.image}
                alt={slide.caption}
                className="Gallery-background-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
