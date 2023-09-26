import React from "react";
import Card from "../../ui/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "../../styles/tabletsSliderStyles.css";

export default function TabletsSlider({ tablets }) {
  return (
    <SwiperComponent
      className="tabletsSliderStyles"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
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
  );
}
