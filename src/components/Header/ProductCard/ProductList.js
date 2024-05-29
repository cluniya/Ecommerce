import React from 'react';
import ProductCart from './ProductCart';
import './ProductCart.css';

// import seeCart from '../../UI/SeeCart';

function ProductList(props) {
  return (
    <div className='container'>
      {props.productData.map((product, index) => (
        <ProductCart
          key={index}
          title={product.title}
          price={product.price}
          image={product.imageUrl}
        //   description={product.description}
        />
      ))}
      {/* <seeCart/> */}
    </div>
  );
}

export default ProductList;
