import Card from '../../ui/card'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import "../../styles/mobilesSliderStyles.css";

export default function MobilesSlider({mobiles}) {
    // if (isLoading) return <Loader />;
    console.log(mobiles);
  return (
      <SwiperComponent className='mobilesSliderStyles'
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={true}
          onSlideChange={() => { }}
          onSwiper={() => { }}
      >
          {mobiles.map((mobile) => (
              <SwiperSlide key={mobile.id}>
                  <Card data={mobile}/>
              </SwiperSlide>
          ))}
      </SwiperComponent>
  )
}
