import React, { useContext } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './CartItem.css';
import { CartContext } from '../../Store/CartContext';

function CartItem() {
  const { isCartOpen, cartItems, cartCloseHandler, removeItemFromCart } = useContext(CartContext);
  
  if (!isCartOpen) return null;

  return (
    <Container className="cart-container">
      <h2 className="text-center mb-2">Shopping Cart</h2>
      <Col className="text-end">
          <Button variant="secondary" onClick={cartCloseHandler}>Close</Button>
        </Col>
      <Row>
        <Col>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item mb-4">
                <Row>
                  <Col xs={3}>
                    <Image src={item.imageUrl} alt={item.title} className="cart-item-image" fluid />
                  </Col>
                  <Col>
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <div className="d-flex align-items-center">
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="form-control me-3 quantity-input"
                      />
                      <Button variant="danger" onClick={() => removeItemFromCart(item.title)}>Remove</Button>
                    </div>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
  );
}

export default CartItem;
