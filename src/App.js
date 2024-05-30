// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import HeaderNavbar from './components/Header/HeaderNavbar';
// import { CartProvider } from './Store/CartContext';
// import About from './components/About/About';
// import Home from './components/Header/Home';
// import HomePage from './components/Header/HomePage';

// const productsArr = [
//   {
//     title: 'Colors',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//   },
//   {
//     title: 'Black and white Colors',
//     price: 50,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//   },
//   {
//     title: 'Yellow and Black Colors',
//     price: 70,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//   },
//   {
//     title: 'Blue Color',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//   },
//   {
//     title: 'Colors',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//   },
//   {
//     title: 'Black and white Colors',
//     price: 50,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//   },
//   {
//     title: 'Yellow and Black Colors',
//     price: 70,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//   },
//   {
//     title: 'Blue Color',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//   }
// ];

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <HeaderNavbar productData={productsArr} />
//         <Routes>
//           <Route path="/" element={<HomePage/>} />
//           <Route path="/store" element={<Home productData={productsArr} />} />
//           <Route path="/about" element={<About />} />
//           {/* Other routes */}
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;

import React from 'react'
import ApiTesting from './components/ApiTesting'

const App = () => {
  return (
    <div>
      <ApiTesting/>
    </div>
  )
}

export default App
