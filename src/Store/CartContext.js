import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartOpenHandler = () => {
    setIsCartOpen(prevState => !prevState);
  };

  const cartCloseHandler = () => {
    setIsCartOpen(false);
  };

  const addItemToCart = (item) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        cartItem => cartItem.title === item.title
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (itemTitle) => {
    setCartItems(prevItems => prevItems.filter(item => item.title !== itemTitle));
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, cartItems, cartOpenHandler, cartCloseHandler, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
