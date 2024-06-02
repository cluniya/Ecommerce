// src/components/Home/ProductCard/ProductList.js
import React, { useContext } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';
import { CartContext } from '../../../Store/CartContext';

const ProductList = ({ productData }) => {
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container>
      <Row>
        {productData.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="mb-4 product-card" onClick={() => handleCardClick(product.id)}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={(e) => {
                  e.stopPropagation();
                  addItemToCart(product);
                }}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
