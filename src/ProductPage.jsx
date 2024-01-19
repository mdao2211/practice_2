import React from 'react';

const ProductDetail = ({ item }) => {
  return (
    <div>
      <h1>Product Detail</h1>
      <div>Name: {item.title}</div>
      <div>Quantity: {item.count}</div>
      <div>Price: {item.price}</div>
    </div>
  );
};

export default ProductDetail;
