import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom';
import ButtonContainer from '../reuseables/ButtonContainer'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    console.log(value);
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                        return (
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 col-md-6 col-lg-4 mx-auto 
                                    text-center text-capitalize p-5">
                                        <h4 className="my-0">Item has been added to cart</h4>
                                        <img src={img} className="img-fluid" alt={title} />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price:<span><strong>${price}</strong></span></h5>
                                        <Link to="/" >
                                            <ButtonContainer  onClick={()=> closeModal()}>
                                                back to shop
                                            </ButtonContainer>
                                        </Link>
                                        <div className="py-1"></div>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={()=> closeModal()}>
                                                Go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
                
            </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background: rgba(0,0,0,0.3); 
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
    }
`