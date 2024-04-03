import "./styles.scss";
import { useRef } from "react";

import { SlidersSections } from "../../../components/SlidersSections";

import { SliderSwiper } from "../../../components/SliderSwiper";
import { SwiperButtons } from "../../../components/SliderSwiper/SwiperButtons";

import { SwiperSlide } from 'swiper/react';

export function Categorys() {
  const categorysTypes = [
    {id: 1, image: "images/categorys/banner-botas.png", description: "Botas"},
    {id: 2, image: "images/categorys/banner-scarpins.png", description: "Scarpins"},
    {id: 3, image: "images/categorys/banner-sapatilhas.png", description: "Sapatilhas"},
    {id: 4, image: "images/categorys/banner-sandalias.png", description: "Sandálias"},
  ]

  const swiperContainerCategoryRef = useRef(null);

  return (
    <SlidersSections className="categorys slider-div" >
      <div>
        <h2>Categorias</h2>
        {
          <SwiperButtons swiperContainerRef={swiperContainerCategoryRef} />
        }
      </div>
      <div className="category-slider">
        <SliderSwiper 
          swiperContainerRef={swiperContainerCategoryRef} 
          slidesPerView={2.65}
          spaceBetween={12}
          navigation={false}
          loop={false}
        >
          {
            categorysTypes &&  
            categorysTypes.map(category => (
              <SwiperSlide key={String(category.id)}>
                <a href="#">
                  <div className="card">
                    <div className="card-image-div">
                      <img className="card-image" src={category.image} alt="" />
                    </div>
                    <div className="card-text">
                      <p>{category.description}</p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))
          }
        </SliderSwiper>
      </div>
    </SlidersSections>
  );
}