import "./styles.scss";
import { useEffect, useRef, useState } from "react";

import { ButtonIcon } from "../../../components/ButtonIcon";

import { SlidersSections } from "../../../components/SlidersSections";
import { SwiperButtons } from "../../../components/SliderSwiper/SwiperButtons";
import { SliderSwiper } from "../../../components/SliderSwiper";
import { SwiperSlide } from 'swiper/react';

import { useCart } from "../../../hooks/cart";

import { getProducts} from "../../../utils";

import heartDefault from "../../../icons/heart-default.svg";
import heartFav from "../../../icons/heart-fav.svg";
import bag from "../../../icons/bag.svg";

export function Releases() {
  const { addOneProductToCart } = useCart();

  const [releases, setReleases] = useState([]);

  const swiperContainerReleasesRef = useRef(null);

  function handleFavRelease(e, release) {
    e.preventDefault()
    const updatedReleases = releases.map(item => {
      if (item.id === release.id) {
        return { ...item, favorite: item.favorite ? 0 : 1};
      }
      
      return item;
    });

    setReleases(updatedReleases);
  }

  function handleAddToCart(e, release) {
    e.preventDefault()
    
    addOneProductToCart(release);
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await getProducts();
      setReleases(response)
    }

    fetchProducts();
  }, [])

  return (
    <SlidersSections className="releases slider-div">
      <div>
        <h2>Lançamentos</h2>
        {
          <SwiperButtons swiperContainerRef={swiperContainerReleasesRef} />
        }
      </div>
      <SliderSwiper 
        swiperContainerRef={swiperContainerReleasesRef} 
        slidesPerView={1.66} 
        spaceBetween={20} 
        navigation={false}
        loop={false}
      >
        {
          releases &&
          releases.map(release => (
            <SwiperSlide key={String(release.id)}>
              <a href="#">
                <div className="card">
                  <div className="card-image-div">
                    <ButtonIcon onClick={(e) => handleFavRelease(e, release)} className="heartButton">
                      <img className="heart" src={release.favorite === 1 ? heartFav : heartDefault} />
                    </ButtonIcon>
                    <ButtonIcon onClick={(e) => handleAddToCart(e, release)} className="bagButton">
                      <img className="bag" src={bag} />
                    </ButtonIcon>
                    <img className="card-image" src={release.image} alt="" />
                    { 
                      release.price.isDiscount && 
                      <span>10% OFF</span>
                    }  
                  </div>
                  <div className="card-text">
                    <p>{release.name}</p>
                    <div className="spanDiv">
                      {
                        release.price.isDiscount &&
                        <del className="isDiscountDiv">R$ {release.price.isDiscount}</del>
                      }
                      <span>R$ {release.price.amount}</span>
                    </div>
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