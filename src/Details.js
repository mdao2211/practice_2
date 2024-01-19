import React, { Component } from 'react';
import { ProductConsumer } from './contextAPI';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, img, info, price, company, inCart } = value.detailProduct;
          return (
            <div className='container'>
              <div className='col-10 mx-auto text-center'>
                <h1>Your Details</h1>
              </div>
              <div className='row'>
                <div className='col-4 mx-auto col-md-4'>
                  <img src={img} className='img-fluid' />
                </div>
              </div>
              <div className='row'>
                <div className='col-4 mx-auto col-md-4'>
                  <h4>Model: {title}</h4>
                  <h5>
                    <strong>Price: <span>INR</span>{price}</strong>
                  </h5>
                  <p>Some information about this product: </p>
                  <p className='text-muted'>{info}</p>
                  <div>
                    <Link to="/">Product Page</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
