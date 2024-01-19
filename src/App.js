import React from 'react';
import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductListItem from './ProductListItem';
import './bootstrap.min.css'
import Nav from './Nav';
import {Switch, Route } from 'react-router-dom'; // Import Routes
import Productlist from './Productlist'
import Details from './Details';
function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
    alert(`${product.name} is added successfully!`);
  };

  const deleteProduct = (product) => {
    setProducts(products.filter((productItem) => productItem.id !== product.id));
    alert(`${product.name} is removed successfully!`);
  };

  return (
      <div className='App'>
        <Route path='/' component= {Nav}/>
        <Switch>
          <Route exact path='/' component={Productlist}/>
          <Route path='/details' component={Details}/>
        </Switch>
        <ProductForm addProductProp={addProduct} />
        {products.map((product) => (
          <ProductListItem key={product.id} item={product} deleteProductProp={deleteProduct} />
        ))}
      </div>
  );
}

export default App;
