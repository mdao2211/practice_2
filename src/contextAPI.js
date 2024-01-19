// contextAPI.js
import React, { Component } from 'react';
import { dataProducts } from './appData';  // Adjust the import statement

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: dataProducts,
    // Remove 'prodInDetails' if it is not used
  };
  getItem = (id) =>{
    const product = this.state.products.find(item => item.id ===  id)
    return product
  }

  handleDetails = (id) =>{
    const product = this.getItem(id)
    this.setState(()=>{
      return {detailProduct:product}
    })
  }
  render() {
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
