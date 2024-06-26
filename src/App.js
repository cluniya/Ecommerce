import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeaderNavbar from './components/Header/HeaderNavbar';
import { CartProvider } from './Store/CartContext';
import About from './components/About/About';
import Home from './components/Header/Home';
import ProductDetails from './components/Header/ProductDetail/ProductDetails';
import HomePage from './components/Header/HomePage';
import Contact from './components/Header/Contact';
import AuthUser from './components/Authusers/AuthUser';
import { AuthContextProvider, AuthContext } from './Store/AuthContext';

const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    description: 'A colorful set of items.'
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    description: 'A set of black and white items.'
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    description: 'A set of yellow and black items.'
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    description: 'A set of blue items.'
  },
  {
    id: 5,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    description: 'A colorful set of items.'
  },
  
  {
    id: 6,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    description: 'A set of yellow and black items.'
  },
  {
    id: 7,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    description: 'A set of blue items.'
  },
  {
    id: 8,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    description: 'A set of yellow and black items.'
  },
  {
    id: 9,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    description: 'A set of black and white items.'
  }
];

const App = () => {

  const authCtx = useContext(AuthContext);  
console.log(authCtx.isLoggedIn);
  return (
        <>
          <HeaderNavbar productData={productsArr} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {authCtx.isLoggedIn ?  (
              <>
                <Route path="/store" element={<Home productData={productsArr} />} />
                <Route path="/product/:productId" element={<ProductDetails products={productsArr} />} />
              </>
            ) : (
              <Route path="/store" element={<Navigate to="/auth" />} />
            )}
            <Route path="/auth" element={<AuthUser />} />
          </Routes>
        </>
    
  );
};

export default App;
