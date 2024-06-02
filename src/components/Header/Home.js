import React, { Suspense, lazy } from 'react';

const LazyProductList = lazy(() => import('./ProductCard/ProductList'));

const Home = ({ productData }) => {
  return (
    <div>
      <h1>The Generics</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyProductList productData={productData} />
      </Suspense>
    </div>
  );
}

export default Home;
