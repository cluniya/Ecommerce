import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartIsOpen,setCartIsOpen] = useState(false);

  const cartOpenHandler = (event) => {
    setCartIsOpen((prev)=>!prev);
    console.log(cartIsOpen);
  };

  return (
    <CartContext.Provider value={{ cartIsOpen,setCartIsOpen,cartOpenHandler }}>
      {children}
    </CartContext.Provider>
  );
};
