import "./styles.scss";
import { useRef } from "react";

import { SlidersSections } from "../../../components/SlidersSections";

import { SwiperButtons } from "../../../components/SliderSwiper/SwiperButtons";
import { SliderSwiper } from "../../../components/SliderSwiper";
import { SwiperSlide } from 'swiper/react';


export function Blog() {
  const swiperContainerBlogsRef = useRef(null);

  const blogs = [
    {id: 1, image: "images/blog/blog-1.png", title: "NOVO LOGO, MESMA ESSÊNCIA." , text: "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!" },
    {id: 2, image: "images/blog/blog-2.png", title: "É AMANHÃ", text: "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️" },
    {id: 3, image: "images/blog/blog-3.png", title: "descubra o glamour em cada passo." , text: "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨" },
  ]

  return (
    <SlidersSections className="blogs">
      <div>
        <div className="text-header">
          <h2>Conheça Mais</h2>
          <p>Fique por dentro de tudo que acontece na Bebecê.</p>
        </div>
        {
          <SwiperButtons swiperContainerRef={swiperContainerBlogsRef} />
        }
      </div>
      <div className="swiper-pagination-blogs"></div>

      <SliderSwiper 
        swiperContainerRef={swiperContainerBlogsRef} 
        slidesPerView={1} 
        spaceBetween={0} 
        navigation={false}
        pagination={{
          clickable: true , 
          el: '.swiper-pagination-blogs',
          type: "bullets"
        }}
        loop={false}
      >
        {
          blogs &&
          blogs.map(blog => (
            <SwiperSlide key={String(blog.id)}>
              <a href="#">
                <div className="card">
                  <div className="card-image">
                    <img src={blog.image} alt="" />
                  </div>
                  <div className="card-text">
                    <h6>{blog.title}</h6>
                    <p>{blog.text}</p>
                    <span>Saiba mais!</span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))
        }
      </SliderSwiper>
    </SlidersSections>
  );
}