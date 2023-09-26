import Card from '../../ui/card'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import "../../styles/handsfreesSliderStyles.css";

export default function HandsfreesSlider({ handsfrees }) {

    return (
        <SwiperComponent className='handsfreesSliderStyles'
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={true}
            onSlideChange={() => { }}
            onSwiper={() => { }}
        >
            {handsfrees.map((handsfree) => (
                <SwiperSlide key={handsfree.id}>
                    <Card data={handsfree} />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    )
}
