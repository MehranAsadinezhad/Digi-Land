import Card from '../../ui/Card'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import "../../styles/handsfreesSliderStyles.css";

export default function HandsfreesSlider({ handsfrees }) {

    return (
      <>
        <SwiperComponent
          className="handsfreesSliderStyles hidden sm:block xl:hidden"
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={2}
          navigation={true}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {handsfrees.map((handsfree) => (
            <SwiperSlide key={handsfree.id}>
              <Card data={handsfree} />
            </SwiperSlide>
          ))}
        </SwiperComponent>

        <SwiperComponent
          className="handsfreesSliderStyles xxl:hidden hidden xl:block"
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={3}
          navigation={true}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {handsfrees.map((handsfree) => (
            <SwiperSlide key={handsfree.id}>
              <Card data={handsfree} />
            </SwiperSlide>
          ))}
        </SwiperComponent>

        <SwiperComponent
          className="handsfreesSliderStyles xxl:block hidden"
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={5}
          navigation={true}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {handsfrees.map((handsfree) => (
            <SwiperSlide key={handsfree.id}>
              <Card data={handsfree} />
            </SwiperSlide>
          ))}
        </SwiperComponent>

        <SwiperComponent
          className="handsfreesSliderStylesSm sm:hidden"
          modules={[Navigation, Pagination, A11y]}
          //   spaceBetween={200}
          slidesPerView={1}
          navigation={true}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {handsfrees.map((handsfree) => (
            <SwiperSlide
              className="flex items-center justify-center"
              key={handsfree.id}
            >
              <Card data={handsfree} />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </>
    );
}
