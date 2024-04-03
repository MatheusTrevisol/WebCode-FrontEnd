import "./styles.scss";
import { useEffect } from "react";

import { HeaderNav } from "../HeaderNav";

import { FaSignal, FaBatteryFull } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";

export function Header() {
  useEffect(() => {
    let alturaX = 53;
    let hasScrolledHeightX = false;

    function handleResize() {
      const header = document.querySelector(".headerNav")
      
      let scrolled = window.scrollY || document.documentElement.scrollTop;

      if(scrolled > alturaX && !hasScrolledHeightX) {
        hasScrolledHeightX = true;

        header.style.background = "white";
      } 

      if(scrolled === 0) {
        hasScrolledHeightX = false;
        
        header.style.background = "transparent";
      }
    }

    window.addEventListener("scroll", handleResize)    
  }, [])

  return (
    <header className="headerDiv">
      <div className="statusBar">
        <span>9:41</span>
        <div className="circle"></div>
        <div className="icons">
          <FaSignal size={18} className="signal" />
          <IoIosWifi size={18} className="wifi" />
          <FaBatteryFull size={18} className="battery" />
        </div>
      </div>

      <HeaderNav />
    </header>
  );
}
