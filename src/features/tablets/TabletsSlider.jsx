import React from "react";
import Card from "../../ui/Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "../../styles/TabletsSliderStyles.css";

export default function TabletsSlider({ tablets }) {
  return (
    <>
      <SwiperComponent
        className="tabletsSliderStyles hidden sm:block xl:hidden"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={2}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {tablets.map((tablet) => (
          <SwiperSlide key={tablet.id}>
            <Card data={tablet} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        className="tabletsSliderStyles xxl:hidden hidden xl:block"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={3}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {tablets.map((tablet) => (
          <SwiperSlide key={tablet.id}>
            <Card data={tablet} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        className="tabletsSliderStyles xxl:block hidden"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={5}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {tablets.map((tablet) => (
          <SwiperSlide key={tablet.id}>
            <Card data={tablet} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        className="tabletsSliderStylesSm sm:hidden"
        modules={[Navigation, Pagination, A11y]}
        // spaceBetween={200}
        slidesPerView={1}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {tablets.map((tablet) => (
          <SwiperSlide
            className="flex items-center justify-center"
            key={tablet.id}
          >
            <Card data={tablet} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  );
}
