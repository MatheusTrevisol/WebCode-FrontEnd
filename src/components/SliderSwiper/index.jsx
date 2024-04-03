import './styles.scss';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function SliderSwiper({ children, swiperContainerRef, ...rest }) {  
  return (
    <Swiper
      modules={[ Navigation, Pagination, A11y ]}
      ref={swiperContainerRef}
      {...rest}
    >
      {children}
    </Swiper>
  );
}