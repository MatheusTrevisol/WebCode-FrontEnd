import "./styles.scss";

import { useEffect, useState } from "react";

import { useCart } from "../../hooks/cart";

import { Logo } from "../Logo";
import { ButtonIcon } from "../ButtonIcon";
import { MenuDisplay } from "../MenuDisplay";

import { IoIosMenu } from "react-icons/io"
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";

export function HeaderNav() {
  const { cartProducts } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleMenuHamburguer() {
    setMenuOpen(!menuOpen);
  }

  /*muda a logo e a cor dos icons baseado no scroll*/
  useEffect(() => {
    let alturaX = 53;

    function handleResize() {
      const logo = document.querySelector(".logo")
      const icons = document.querySelectorAll(".iconHeader")
      const numberOfProducts = document.querySelector(".numberOfProductsInCart")
      
      let scrolled = window.scrollY || document.documentElement.scrollTop;

      if(scrolled > alturaX && !isScrolled) {
        logo.setAttribute('src', 'images/logo-preto.png');

        icons.forEach(icon => {
          icon.style.color = "black";
        })

        numberOfProducts.style.color = "black";

        setIsScrolled(true)
      } 

      if(scrolled === 0) {
        logo.setAttribute('src', 'images/logo-branco.png');

        icons.forEach(icon => {
          icon.style.color = "white";
        })

        numberOfProducts.style.color = "white";

        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleResize)    
  }, [isScrolled])
  
  return (
    <div className="headerNav">
      <div className="content">
        <div className="firstIcons">
          <ButtonIcon onClick={handleMenuHamburguer} className="menu headerIcons">
            <IoIosMenu className="iconHeader" size={16} />
          </ButtonIcon>
          <ButtonIcon className="wifi headerIcons">
            <IoSearchOutline className="iconHeader" size={16} />
          </ButtonIcon>
        </div>

        <Logo />
        
        <div className="lastIcons">
          <ButtonIcon className="profile headerIcons">
            <IoPersonOutline className="iconHeader" size={16} />
          </ButtonIcon>
          <ButtonIcon className="bag headerIcons">
            <PiBag className="iconHeader" size={16} />

            <span className="numberOfProductsInCart">
              {
                cartProducts &&
                cartProducts.length
              }
            </span>
          </ButtonIcon>
        </div>
      </div>

      {/*MENU HAMBURGUER*/}
      <MenuDisplay toggle={handleMenuHamburguer} menuOpen={menuOpen} />
    </div>
  );
}