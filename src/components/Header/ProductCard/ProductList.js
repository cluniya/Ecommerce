import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCart from './ProductCart';

const ProductList = ({ productData }) => {
  return (
    <Container>
      <Row>
        {productData.map((product, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <ProductCart product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
