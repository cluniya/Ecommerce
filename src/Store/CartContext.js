// src/Store/CartContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
// src/config.js
const API_ENDPOINT = 'https://crudcrud.com/api/0e66f5a87f8c4da3ae2f3b9513012570';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const userEmail = token && token.replace('@', '').replace('.', '');

  useEffect(() => {
    if (token) {
      fetchCartItems();
    }
  }, [token]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/cart${userEmail}`);
      setCartItems(response.data);
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    }
  };

  const toggleCartHandler = () => {
    setCartIsOpen((prev) => !prev);
  };

  const addItemToCart = async (item) => {
    try {
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // Update the quantity if item already exists
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        await axios.put(`${API_ENDPOINT}/cart${userEmail}/${existingItem._id}`, updatedItem);
        setCartItems(prevItems => prevItems.map(cartItem => cartItem.id === item.id ? updatedItem : cartItem));
      } else {
        // Add new item if it doesn't exist
        const newItem = { ...item, quantity: 1 };
        const response = await axios.post(`${API_ENDPOINT}/cart${userEmail}`, newItem);
        setCartItems(prevItems => [...prevItems, { ...newItem, _id: response.data._id }]);
      }
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  const removeItemFromCart = async (itemToRemove) => {
    try {
      await axios.delete(`${API_ENDPOINT}/cart${userEmail}/${itemToRemove._id}`);
      setCartItems(prevItems => prevItems.filter(item => item._id !== itemToRemove._id));
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartIsOpen, toggleCartHandler, cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
