import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../../../Store/CartContext';
import './ProductCart.css';

const ProductCart = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <Card className="product-card">
      <Card.Img  variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary" onClick={() => addItemToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCart;
