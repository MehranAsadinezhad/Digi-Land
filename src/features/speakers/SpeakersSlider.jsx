import React from "react";
import Card from "../../ui/Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "../../styles/SpeakersSliderStyles.css";

export default function SpeakersSlider({ speakers }) {
  return (
    <>
      <SwiperComponent
        className="speakersSliderStyles hidden sm:block xl:hidden"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={2}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {speakers.map((speaker) => (
          <SwiperSlide key={speaker.id}>
            <Card data={speaker} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        className="speakersSliderStyles xxl:hidden hidden xl:block"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={3}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {speakers.map((speaker) => (
          <SwiperSlide key={speaker.id}>
            <Card data={speaker} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        className="speakersSliderStyles xxl:block hidden"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={5}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {speakers.map((speaker) => (
          <SwiperSlide key={speaker.id}>
            <Card data={speaker} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        className="speakersSliderStylesSm sm:hidden"
        modules={[Navigation, Pagination, A11y]}
        //   spaceBetween={200}
        slidesPerView={1}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {speakers.map((speaker) => (
          <SwiperSlide
            className="flex items-center justify-center"
            key={speaker.id}
          >
            <Card data={speaker} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  );
}
