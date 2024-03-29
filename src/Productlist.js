import React, {Component} from 'react'
import { ProductConsumer } from './contextAPI'
import Product from './Product'
export default class Productlist extends Component{
    render(){
        return(
            <div className='container'>
                <div>
                    <h1>Find ur Cars</h1>
                </div>
                <div className='row'>
                    <ProductConsumer >
                        {(value) => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product}/>
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}