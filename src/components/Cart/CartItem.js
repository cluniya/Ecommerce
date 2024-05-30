import React, { useContext } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './CartItem.css';
import { CartContext } from '../../Store/CartContext';

function CartItem() {
  const { cartIsOpen, toggleCartHandler, cartItems, removeItemFromCart } = useContext(CartContext);

  if (!cartIsOpen) return null;

  return (
    <div className="cart-overlay">
      <Container className="cart-container">
        <Row>
          <Col className="text-end">
            <Button variant="secondary" onClick={toggleCartHandler}>Close</Button>
          </Col>
        </Row>
        <h2 className="text-center mb-3">Shopping Cart</h2>
        <Row>
          <Col>
            <ul className="cart-list">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item mb-2">
                  <Row>
                    <Col xs={3}>
                      <Image src={item.imageUrl} alt={item.title} className="cart-item-image" fluid />
                    </Col>
                    <Col>
                      <h4>{item.title}</h4>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <div className="d-flex align-items-center">
                        <Button variant="danger" onClick={() => removeItemFromCart(item)}>Remove</Button>
                      </div>
                    </Col>
                  </Row>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartItem;
