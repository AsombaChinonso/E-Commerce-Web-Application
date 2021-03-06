import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart"
import { ProductConsumer } from '../../Context';
import CartList from './CartList';

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {cart} = value;
                    if(cart.length > 0){
                       return  (
                       <React.Fragment>
                           <section className="py-5">
                            <Title name="your" title=" cart"></Title>
                            <CartColumns/>
                            <CartList/>
                        </section >
                       </React.Fragment>
                        );
                    }else{
                       return  <EmptyCart/>
                    }
                }}
            </ProductConsumer>
        )
    }
}
