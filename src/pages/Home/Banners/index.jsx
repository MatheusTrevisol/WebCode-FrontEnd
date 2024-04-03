import "./styles.scss";

import { SwiperSlide } from 'swiper/react';

import { SliderSwiper } from "../../../components/SliderSwiper";

export function Banners() {
  const banners = [
    {id: 1, image: "images/banners/banner-principal-1.png"},
    {id: 2, image: "images/banners/banner-principal-2.png"},
    {id: 3, image: "images/banners/banner-principal-3.png"}
  ]

  return (
    <div className="banners">
      <div className="swiper-pagination-banners"></div>
      <SliderSwiper 
        slidesPerView={1}
        navigation={false}
        pagination={{
          clickable: true , 
          el: '.swiper-pagination-banners',
          type: "bullets"
        }}
        loop={true}
      >
        {
          banners &&
          banners.map(banner => (
            <SwiperSlide key={String(banner.id)}>
              <div className="wrapper">
                <img className="banners-images" src={banner.image} />

                <button className="button-banner">Conheça agora!</button>
              </div>
            </SwiperSlide>
          ))
        }
      </SliderSwiper>
    </div>
  );
}