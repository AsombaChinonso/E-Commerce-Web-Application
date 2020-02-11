import React, { Component } from 'react'
import {storeProducts, detailProduct}  from './data';

// CONTEXT for the PRODUCT-PROVIDER
const ProductContext = React.createContext();
// PROVIDER for the PRODUCTS
class ProductProvider extends Component {
    state = {
        // products:storeProducts, USE SYNTAX IF YOU WILL NOT NEDD TO MANIPULATE DATA
        products:[],
        details:detailProduct,
        cart:storeProducts,
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts = ()=>{
        let tempProducts = [];
        storeProducts.forEach(prodItem =>{
            const singleItem = {...prodItem};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products:tempProducts};
        })
    }



    // Handle detail method
    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {details:product};
        })
    };

    addToCart = (id) =>{
        // console.log('Add to card with id equals',{id});
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=> {
            return {products:tempProducts, cart:[...this.state.cart, product]}
        })
    }

    // FOR THE MODAL
    openModal = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product, modalOpen:true};
        })
    }

    closeModal = () =>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }

    increment = (id)=>{
        console.log('this is increment')
    }

    decrement = (id)=>{
        console.log('this is decrement')
    }

    removeItem = (id)=>{
        console.log('this is remove item')
    }

    clearItem = ()=>{
        console.log('cart was cleared!')
    }



    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearItem:this.clearItem,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
