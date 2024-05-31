// src/components/Header/ProductDetail/ProductDetails.js
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { CartContext } from '../../../Store/CartContext';
import './ProductDetails.css';

const ProductDetails = ({ products }) => {

    const { addItemToCart } = useContext(CartContext);

  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) {
    return <div>Product not found</div>;
  }

  const images = [
    product.imageUrl,
    product.imageUrl,
    product.imageUrl,
    
  ]; // Replace with actual URLs or multiple product images

  return (
    <Container className="product-details">
      <Row>
        <Col md={6}>
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="zoom-container">
                  <img
                    src={image}
                    alt={`Product image ${index}`}
                    className="zoom-image"
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <Button variant="primary" onClick={() => addItemToCart(product)}>
            Add to Cart
          </Button>
          <div className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="review">
              <p>★★★★☆</p>
              <p>Great product, highly recommend!</p>
            </div>
            <div className="review">
              <p>★★★☆☆</p>
              <p>Good quality, but could be better.</p>
            </div>
            {/* Add more reviews as needed */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
