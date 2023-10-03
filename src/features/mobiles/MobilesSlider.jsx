import Card from '../../ui/Card'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import "../../styles/MobilesSliderStyles.css";

export default function MobilesSlider({mobiles}) {
  return (
    <>
      <SwiperComponent
        className="mobilesSliderStyles hidden sm:block xl:hidden"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={2}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {mobiles.map((mobile) => (
          <SwiperSlide key={mobile.id}>
            <Card data={mobile} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        className="mobilesSliderStyles hidden xl:block xxl:hidden"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={3}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {mobiles.map((mobile) => (
          <SwiperSlide key={mobile.id}>
            <Card data={mobile} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        className="mobilesSliderStyles hidden xxl:block"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={5}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {mobiles.map((mobile) => (
          <SwiperSlide key={mobile.id}>
            <Card data={mobile} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        className="mobilesSliderStylesSm sm:hidden"
        modules={[Navigation, Pagination, A11y]}
        // spaceBetween={200}
        slidesPerView={1}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {mobiles.map((mobile) => (
          <SwiperSlide
            className="flex items-center justify-center"
            key={mobile.id}
          >
            <Card data={mobile} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  );
}
