import React, { Component } from 'react'
import {ProductConsumer} from "../Context"
import {Link} from 'react-router-dom';
import ButtonContainer from "../reuseables/ButtonContainer"

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {id, company, img, info, price, title, inCart} = value.details;
                    return(
                        // TITLE SECTION
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto my-3">
                                    <h1 className="text-center text-blue">{title}</h1>
                                </div>
                            </div>
                            {/* PRODUCT IMAGE */}
                            <div className="row">
                                <div className="col-10 col-md-6 mx-auto my-1">
                                    <img src={img} className="img-fluid" alt={title}/>
                                </div>
                                {/* PRODUCT INFO-DETAILS */}
                                <div className="col-10 col-md-6 mx-auto my-1 text-capitalize">
                                    <h2>Model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span><strong>{company}</strong></span>
                                        </h4>
                                    <h4 className="text-blue"><strong>price: <span>${price}</span></strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Product description:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* BUTTONS */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                            <ButtonContainer cart className="mx-2 my-2" disabled={inCart ? true: false}
                                            onClick={()=> {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}    >
                                                {inCart ? "in cart": "Add to cart"}
                                            </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    );
                }}
            </ProductConsumer>
        )
    }
}
