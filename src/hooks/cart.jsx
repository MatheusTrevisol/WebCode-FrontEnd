import { createContext, useContext, useEffect, useState } from "react";

import { toast } from 'react-toastify';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("@wecode:products_in_cart")));
  const [cartProducts, setCartProducts] = useState(products ? products : []);
 
  useEffect(() => {
    function setActualProducts() {
      localStorage.setItem('@wecode:products_in_cart', JSON.stringify(cartProducts));
      setProducts(JSON.parse(localStorage.getItem("@wecode:products_in_cart")));
    }

    setActualProducts();
  }, [cartProducts]);

  function checkIfProductExistsInCart(id) {
    const exists = cartProducts.find(product => product.id === id);

    return exists;
  }

  function addOneProductToCart(product) {
    const exists = checkIfProductExistsInCart(product.id);

    if(!exists) { // if product is not in cart
      setCartProducts([...cartProducts, product]);
      toast.success("Adicionado ao carrinho!");
    } else { // if product is in cart
      return toast.error("Este produto já consta em seu carrinho!");
    }
  }

  return (
    <CartContext.Provider value={{
      addOneProductToCart,
      cartProducts,
      checkIfProductExistsInCart
    }}>
      {children}
    </CartContext.Provider>
  )
};

function useCart() {
  const context = useContext(CartContext);

  return context;
};

export {
  CartProvider,
  useCart
}

