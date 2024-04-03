import "./styles.scss";

import { useState } from "react";

import { LogoBlack } from "../LogoBlack";

import { MdClose } from "react-icons/md";

import { NavMenuItem } from "./NavMenuItem";

export function MenuDisplay({ toggle, menuOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Scarpins", "Mocassim", "Sapatilhas", "Mules", "Peep Toe", "Oxford"];

  return (
    <div className={ menuOpen ? "active menuDisplay" : "menuDisplay"}>
      <div className="headerMenuDisplay">
        <LogoBlack />

        <button className="closeMenu">
          <MdClose size={14} onClick={toggle} />
        </button>
      </div>

      <div className="imageBannerMenuDisplay">
        <img src="images/banners/banner-principal-1.png" alt="" />

        <div className="textBannerMenuDisplay">
          <h5>Celebration - 20 Anos</h5>

          <a href="/">Conheça</a>
        </div>
      </div>

      <div className="navMenuDisplay">
        <ul>
          <li>
            <a href="#">Liquida</a>
          </li>
          <NavMenuItem title="Sapatos" options={options}/>
          <NavMenuItem title="Sandálias" options={options}/>
          <NavMenuItem title="Botas" options={options}/>
          <NavMenuItem title="Tênis" options={options}/>
          <li>
            <a href="#" className="outlet">Outlet</a>
          </li>
        </ul>    
      </div>
    </div>
  );
}