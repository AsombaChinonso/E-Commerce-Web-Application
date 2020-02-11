import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;

        return (
            <ProductCard className="col-9 col-md-6 col-lg-3 mx-auto my-3">
                <div className="card">
                   <ProductConsumer>
                       {value=> (
                           <div className="img-container p-5"  onClick={()=> value.handleDetail(id)}>
                           <Link to="/details">
                               <img src={img} alt={title} className="card-img-top" />
                           </Link>
                           <button className="card-btn" disabled={inCart ? true:false} onClick={ ()=> 
                               {
                                value.addToCart(id);
                                value.openModal(id);
                               }}>
                               {inCart ? (<p className="text-capitalized mb-0" disabled >In cart</p>)
                               : <p>+</p>}
                               {/* <i className="fas fa-cart-plus" /> */}
                           </button>
                      </div>
                       )}
                   
                   </ProductConsumer>
                   <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0"><strong><span >$</span>{price}</strong></h5>
                   </div>
                </div>
            </ProductCard>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        img:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}


const ProductCard = styled.div`
    .card{
        border-color: transparent;
        transition: all 0.5s linear;
    }
    .card-footer{
        border-top: transparent;
        background:transparent;
        transition: all 0.5s linear;
    }
    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background:rgba(247, 247, 247);
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition: all 0.5s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
    .card-btn{
        position:absolute;
        bottom:0;
        right:0;
        padding: 0.2rem, 0.4rem;
        background:var(--lightBlue);
        color:var(--mainWhite);
        border:none;
        border-radius: 0.5rem 0 0 0;
        font-size:1.3rem;
        transform: translate(100%, 100%);
        transition: all 0.5s linear;
    }
    .img-container:hover .card-btn{
        transform: translate(0,0);
    }
    .card-btn:hover{
        color:var(--mainBlue);
        cursor: pointer;
    }
`