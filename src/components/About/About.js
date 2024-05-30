import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import bandmember form "./s"
import band from '../../Store/Band Members.png';
import './About.css';

const About = () => {
  return (
    <Container className="about-container">
      <h1 className="about-heading">The Generics</h1>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center">
          <Image 
            src={band}
            roundedCircle 
            className="about-image" 
            alt="Company Logo" 
          />
        </Col>
        <Col xs={12} md={6}>
        <h2>About</h2>
          <p className="about-text">
            Our company has been at the forefront of the industry for over a decade, delivering unparalleled service and innovative solutions to our valued customers. We pride ourselves on our commitment to excellence and our ability to meet the evolving needs of our clients.
            Our company has been at the forefront of the industry for over a decade, delivering unparalleled service and innovative solutions to our valued customers. We pride ourselves on our commitment to excellence and our ability to meet the evolving needs of our clients.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
