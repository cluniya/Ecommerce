// src/components/Header/HeaderNavbar.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './HeaderNavbar.css';
import CartButton from '../Cart/CartButton';
import CartItem from '../Cart/CartItem';
import AuthContext from '../../Store/AuthContext';
import ChangePassword from '../Authusers/ChangePassword';

function HeaderNavbar(props) {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = ()=>{
    if (isLoggedIn) {
      authCtx.logout();
    }
  }

  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleClose = () => setShowChangePassword(false);
  const handleShow = () => setShowChangePassword(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">The Generics</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/store">Store</Nav.Link>
              <Nav.Link as={Link} to="/about">About us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>Link</Nav.Link>
            </Nav>
            <Button onClick = {logoutHandler} variant="outline-primary" as={Link} to="/auth" className="me-2">
              {isLoggedIn ? 'Logout' : 'Sign In'}
            </Button>
            <CartButton />
            {isLoggedIn && (
              <FontAwesomeIcon icon={faUser} className="ms-3" style={{ cursor: 'pointer' }} onClick={handleShow} />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CartItem />
      <Modal show={showChangePassword} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangePassword />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HeaderNavbar;
