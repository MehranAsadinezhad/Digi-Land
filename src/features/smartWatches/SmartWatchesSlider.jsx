import React from "react";
import Card from "../../ui/Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "../../styles/smartWatchesSliderStyles.css";

export default function TabletsSlider({ smartWatches }) {
    return (
      <>
        <SwiperComponent
          className="smartWacthesSliderStyles hidden sm:block xl:hidden"
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={2}
          navigation={true}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {smartWatches.map((watches) => (
            <SwiperSlide key={watches.id}>
              <Card data={watches} />
            </SwiperSlide>
          ))}
        </SwiperComponent>

        <SwiperComponent
          className="smartWacthesSliderStyles xxl:hidden hidden xl:block"
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={3}
          navigation={true}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {smartWatches.map((watches) => (
            <SwiperSlide key={watches.id}>
              <Card data={watches} />
            </SwiperSlide>
          ))}
        </SwiperComponent>

        <SwiperComponent
          className="smartWacthesSliderStyles xxl:block hidden"
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={5}
          navigation={true}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {smartWatches.map((watches) => (
            <SwiperSlide key={watches.id}>
              <Card data={watches} />
            </SwiperSlide>
          ))}
        </SwiperComponent>

        <SwiperComponent
          className="smartWatchesSliderStylesSm sm:hidden"
          modules={[Navigation, Pagination, A11y]}
          //   spaceBetween={200}
          slidesPerView={1}
          navigation={true}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {smartWatches.map((watches) => (
            <SwiperSlide
              className="flex items-center justify-center"
              key={watches.id}
            >
              <Card data={watches} />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </>
    );
}
