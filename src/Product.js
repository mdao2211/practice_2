import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {Card, Row, Col, Button, CardBody, CardFooter} from 'react-bootstrap'
import { ProductConsumer} from "./contextAPI";
export default class Product extends Component{
    render(){
        const {id, title, img, price, inCart} = this.props.product;
        return(
            <div className="col-9 mx-auto col-md-6 col-lg-3 ">
                <ProductConsumer>
                    {(value) => (
                        <Card style={{width: '10rem', height: '10rem', margin:'2rem'}}>
                            <Link to='./Details'>
                                <Card.Img variant="top" src={img}/>
                            </Link>
                            <CardBody style={{width:'10rem', height:'10rem'}}>
                                <Card.Title>{title}</Card.Title>
                            </CardBody>
                            
                        </Card>
                    )}
                </ProductConsumer>

            </div>
        )
    }
}