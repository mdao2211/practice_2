import React from 'react';

export const ProductListItem = ({ item, deleteProductProp }) => {
  const deleteProduct = () => deleteProductProp(item);


  return (
    <div className='popup' >
      <div>{item.name}</div>
      <div>{item.quantity}</div>
      <div>{item.price}</div>
      <div>
        <input type="button" value="Delete" onClick={deleteProduct} />
      </div>
    </div>
  );
};

export default ProductListItem;
