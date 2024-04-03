import "./styles.scss";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export function SwiperButtons({ swiperContainerRef }) {
  return (
    <div className="swiper-buttons">
      <button className="left-button" onClick={() => swiperContainerRef.current.swiper.slidePrev()}>
        <MdKeyboardArrowLeft size={22} />
      </button>
      <button className="right-button" onClick={() => swiperContainerRef.current.swiper.slideNext()}>
        <MdKeyboardArrowRight size={22} />
      </button>
    </div>
  )
}
