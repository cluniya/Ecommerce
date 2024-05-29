import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FooterBar.css';

function FooterBar() {
  return (
    <footer className="bg-dark text-white p-4">
      <Container>
        <Row>
          <Col md="4">
            <h5>About Us</h5>
            <p>We are a leading e-commerce platform providing the best products at the best prices.</p>
          </Col>
          <Col md="4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#shop" className="text-white">Shop</a></li>
              <li><a href="#contact" className="text-white">Contact Us</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#facebook" className="text-white">Facebook</a></li>
              <li><a href="#twitter" className="text-white">Twitter</a></li>
              <li><a href="#instagram" className="text-white">Instagram</a></li>
              <li><a href="#linkedin" className="text-white">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterBar;
