import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import styled from 'styled-components';
import {ProductConsumer} from '../Context'

export default class ProductList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title=" products"/>
                        <div className="row">
                             <ProductConsumer>
                                 { value =>{
                                     console.log(value)
                                     return value.products.map(product =>{
                                        return <Product key={product.id} product={product}/>
                                    })
                                 }}
                             </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// const Title = styled.title`
//     color: var(--mainBlue)
// `