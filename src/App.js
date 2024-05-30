import React from 'react';
import HeaderNavbar from './components/Header/HeaderNavbar';
import { CartProvider } from './Store/CartContext';
import { BrowserRouter as Router, Route, Routes, RouterProvider  } from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom'
import About from './components/About/About';
import Home from './components/Header/Home';



const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];
// const router = createBrowserRouter=([
//   {path:'/',element:<Home productData={productsArr} />},
//   {path:'/about',element:<About />},
//   {}
//  ])
 
const App = () => {
  // return(
  //   <CartProvider>
  //     <RouterProvider router={router}>
  //     <HeaderNavbar productData={productsArr} />
  //       <Routes />
  //     </RouterProvider>
  //   </CartProvider>
  // )
  return (
    <CartProvider>
      <Router>
        <HeaderNavbar productData={productsArr} />
        <Routes>
          <Route path="/" element={<Home productData={productsArr} />} />
          <Route path="/about" element={<About />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </CartProvider>
  );
}
export default App;