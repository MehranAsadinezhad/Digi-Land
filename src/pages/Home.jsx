import React, { useState } from "react";
import "../styles/homeImagesSlider.css";
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
import { useQuery } from "@tanstack/react-query";
import { getHomeImages } from "../services/apiHomeImages";
import Loader from "../ui/loader";
import { NavLink } from "react-router-dom";

export default function Home() {
  const {
    data: homeImages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["home"],
    queryFn: getHomeImages,
  });
  const [count, setCount] = useState(1);
  if (isLoading) return <Loader />;
  return (
    <>
      <div>
        <Swiper
          className="homeImagesSlider"
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
          onSwiper={(swiper) => console.log(swiper)}
        >
          {homeImages.map((image) => (
            <SwiperSlide key={image.id}>
              <NavLink to={`/${image.title}`}>
                <img
                  className="rounded-b-3xl"
                  src={image.image}
                  alt={image.id}
                ></img>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
