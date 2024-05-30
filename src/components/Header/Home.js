import React from 'react';
import ProductList from './ProductCard/ProductList';
const Home = ({ productData }) => {
  return (
    <div>
      <h1>The Generics</h1>
      <ProductList productData={productData} />
    </div>
  );
}

export default Home;
