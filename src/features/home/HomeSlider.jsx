import "../../styles/homeImagesSliderStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { NavLink } from "react-router-dom";

export default function HomeSwiper({ homeImages }) {
  return (
    <>
      <Swiper
        className="homeImagesSlider hidden bg-lightGrey shadow-xl sm:block"
        modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
        effect={"fade"}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        // pagination={{ clickable: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {homeImages.map((image) => (
          <SwiperSlide key={image.id}>
            <NavLink to={`/${image.title}`}>
              <img
                className="h-full rounded-b-3xl"
                src={image.image}
                alt={image.id}
              ></img>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="homeImagesSliderSm bg-lightGrey shadow-xl sm:hidden"
        modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
        effect={"fade"}
        spaceBetween={50}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {homeImages.map((image) => (
          <SwiperSlide key={image.id} className="h-[150px]">
            <NavLink to={`/${image.title}`}>
              <img
                className="h-full rounded-b-3xl"
                src={image.image}
                alt={image.id}
              ></img>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
