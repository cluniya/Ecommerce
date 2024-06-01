// src/components/Auth/ChangePassword.js
import React, { useContext, useRef, useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import AuthContext from '../../Store/AuthContext';

const ChangePassword = (props) => {
  const authCtx = useContext(AuthContext);
  const newPasswordRef = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;
    
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC0uQnA_EaNQWaw_tSFYly0S2NTYWxB7ig';

    if(authCtx.isLoggedIn){
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              idToken: authCtx.token,
              password: enteredNewPassword,
              returnSecureToken: false,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
        }).then(res => {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
            if (res.ok) {
            } else {
                return res.json().then(data => {
                    let errorMessage = 'Password update failed!';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    alert(errorMessage);
                });
            }
        }).catch(err => {
            alert('Password update failed!');
        });
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Change Password</h2>
          {showAlert && <Alert variant="success">Password Updated Successfully</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formNewPassword">
              <Form.Label>Enter New Password</Form.Label>
              <Form.Control type="password" minLength='7' placeholder="password" ref={newPasswordRef} required />
            </Form.Group>
            <Button onClick={props.onClick} variant="primary" type="submit" className="w-100">
              Change Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
