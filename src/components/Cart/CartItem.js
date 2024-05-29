import React, { useContext } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './CartItem.css';
import { CartContext } from '../../Store/CartContext';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

function CartItem() {
  const { isCartOpen, cartCloseHandler } = useContext(CartContext);

  if (!isCartOpen) return null;

  return (
    <Container className="cart-container">
      <h2 className="text-center mb-1">Shopping Cart</h2>
      <Row>
        <Col>
          <ul className="cart-list">
            {cartElements.map((item, index) => (
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
                        onChange={() => {}}
                        min="1"
                        className="form-control me-3 quantity-input"
                      />
                      <Button variant="danger">Remove</Button>
                    </div>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="text-end">
          <Button variant="secondary" onClick={cartCloseHandler}>Close</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CartItem;
