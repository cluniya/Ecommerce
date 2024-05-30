import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCartHandler = () => {
    setCartIsOpen((prev) => !prev);
  };

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter(item => item.title !== itemToRemove.title));
  };

  return (
    <CartContext.Provider value={{ cartIsOpen, toggleCartHandler, cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
