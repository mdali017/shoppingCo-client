import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://global.caremebd.com/cdn/shop/files/Care_me_books_banner_5.jpg?v=1658396527"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://global.caremebd.com/cdn/shop/files/web_banner.png?v=1667043726"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://global.caremebd.com/cdn/shop/files/web_size.png?v=1677401504"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://global.caremebd.com/cdn/shop/files/Care_me_books_banner_5.jpg?v=1658396527"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://global.caremebd.com/cdn/shop/files/Best_Selling_products_web_banner.jpg?v=1667043726"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://global.caremebd.com/cdn/shop/files/Global_Smart_Watch_Banner.jpg?v=1658396431"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
