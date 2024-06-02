// src/components/Auth/AuthUser.js
import React, { useContext, useRef, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import AuthContext from '../../Store/AuthContext';
import {useNavigate} from 'react-router-dom';
const AuthUser = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const Authctx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const url = isLogin
      ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0uQnA_EaNQWaw_tSFYly0S2NTYWxB7ig'
      : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0uQnA_EaNQWaw_tSFYly0S2NTYWxB7ig';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      setIsLoading(false);
      if (res.ok) {
        emailRef.current.value = '';
        passwordRef.current.value = '';
        history('/');
        return res.json();
      } else {
        return res.json().then(data => {
          let errorMessage = 'Authentication failed!';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      if(isLogin){
        Authctx.login(data.idToken);
      }
    }).catch(err => {
      setIsLoading(false);
      alert(err.message);
    });
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  if (Authctx.isLoggedIn) {
    return <h2>you are Successfully logged in...</h2>
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              {isLoading ? 'Sending request...' : isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </Form>
          <Button variant="link" className="mt-3 w-100" onClick={toggleAuthMode}>
            {isLogin ? 'Create new account' : 'Sign in with existing account'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthUser;
