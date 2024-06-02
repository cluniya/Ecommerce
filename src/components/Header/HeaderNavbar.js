import React, { useContext, useEffect, useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './HeaderNavbar.css';
import AuthContext from '../../Store/AuthContext';

const CartButton = lazy(() => import('../Cart/CartButton'));
const CartItem = lazy(() => import('../Cart/CartItem'));
const ChangePassword = lazy(() => import('../Authusers/ChangePassword'));

function HeaderNavbar(props) {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    if (isLoggedIn) {
      authCtx.logout();
    }
  };

  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleClose = () => setShowChangePassword(false);
  const handleShow = () => setShowChangePassword(true);

  useEffect(() => {
    const resetLogoutTimer = () => {
      if (isLoggedIn) {
        authCtx.logout();
      }
    };

    // window.addEventListener('mousemove', resetLogoutTimer);
    // window.addEventListener('keypress', resetLogoutTimer);

    return () => {
      window.removeEventListener('mousemove', resetLogoutTimer);
      window.removeEventListener('keypress', resetLogoutTimer);
    };
  }, [isLoggedIn, authCtx]);

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
            <Button onClick={logoutHandler} variant="outline-primary" as={Link} to="/auth" className="me-2">
              {isLoggedIn ? 'Logout' : 'Sign In'}
            </Button>
            <Suspense fallback={<div>Loading...</div>}>
              <CartButton />
            </Suspense>
            {isLoggedIn && (
              <FontAwesomeIcon icon={faUser} className="ms-3" style={{ cursor: 'pointer' }} onClick={handleShow} />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <CartItem />
      </Suspense>
      <Modal show={showChangePassword} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Suspense fallback={<div>Loading...</div>}>
            <ChangePassword />
          </Suspense>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HeaderNavbar;
