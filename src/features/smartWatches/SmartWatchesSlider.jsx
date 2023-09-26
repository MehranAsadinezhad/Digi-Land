import React from "react";
import Card from "../../ui/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "../../styles/smartWatchesSliderStyles.css";

export default function TabletsSlider({ smartWatches }) {
    return (
        <SwiperComponent
            className="smartWatchesSliderStyles"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={true}
            onSlideChange={() => { }}
            onSwiper={() => { }}
        >
            {smartWatches.map((watches) => (
                <SwiperSlide key={watches.id}>
                    <Card data={watches} />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );
}
