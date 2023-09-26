import React from "react";
import Card from "../../ui/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "../../styles/speakersSliderStyles.css";

export default function SpeakersSlider({ speakers }) {
    return (
        <SwiperComponent
            className="speakersSliderStyles"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={true}
            onSlideChange={() => { }}
            onSwiper={() => { }}
        >
            {speakers.map((speaker) => (
                <SwiperSlide key={speaker.id}>
                    <Card data={speaker} />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );
}
