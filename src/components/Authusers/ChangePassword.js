// src/components/Auth/ChangePassword.js
import React, { useContext, useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import AuthContext from '../../Store/AuthContext';

const ChangePassword = () => {

    const AuthCtx = useContext(AuthContext);
  const newPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;
    
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC0uQnA_EaNQWaw_tSFYly0S2NTYWxB7ig'

    if(AuthCtx.isLoggedIn){
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              idToken: AuthCtx.token,
              password: enteredNewPassword,
              returnSecureToken: false,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
        }
        ).then(res =>{
            console.log(res);
        })
    }

    // Add your logic to change the password, e.g., sending a request to your backend.
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Change Password</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formNewPassword">
              <Form.Label> Enter New Password</Form.Label>
              <Form.Control type="password" minLength='7' placeholder="password" ref={newPasswordRef} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Change Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
