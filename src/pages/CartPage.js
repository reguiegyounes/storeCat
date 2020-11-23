import React, { Component } from "react";
import CartItem from "../components/cart/CartItem";
import {connect} from 'react-redux'


class CartPage extends Component{

    state={
        products:[]
    }
   
    render(){
        return (
            <div>
                <h1>Cart</h1>
                <div className="row">
                    {
                        this.props.cartItems.map( item =>
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex pb-3"  key={item.product.id}>
                                <CartItem cartItem={item}/>
                            </div>
                        )
                    }
                </div>
                <h3>Total: {this.props.total}$</h3>
                <button className="btn btn-primary btn-block">Buy</button>
                
                <br/><br/>
                
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        cartItems:state.cart,
        total:state.cart.reduce(
            (total,item)=> total+(item.quantity*item.product.price) ,
            0
        )
    }
}


export default connect(mapStateToProps)(CartPage);