import React, { useContext } from 'react';
import './CartButton.css'; // Custom CSS for styling the button
import CartItem from './CartItem';
import { CartContext } from '../../Store/CartContext';

function CartButton() {
  const {isCartOpen,cartOpenHandler}=useContext(CartContext)
  console.log(isCartOpen);
  return (
    <>
    <button className="cart-button" onClick={cartOpenHandler}>
      <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-simple-linear-260nw-1090161545.jpg" alt="Cart" className="cart-icon" />
      <span className="cart-text">Cart</span>
    </button>
    {/* <CartItem/> */}
    </>
  );
}

export default CartButton;
