import React, { useContext } from 'react';
import './CartButton.css';
import { CartContext } from '../../Store/CartContext';

function CartButton() {
  const { toggleCartHandler, cartItems } = useContext(CartContext);

  return (
    <button className="cart-button" onClick={toggleCartHandler}>
      <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-simple-linear-260nw-1090161545.jpg" alt="Cart" className="cart-icon" />
      <span className="cart-text">Cart ({cartItems.length})</span>
    </button>
  );
}

export default CartButton;
