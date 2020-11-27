import React, { Component } from "react";
import CartItem from "../components/cart/CartItem";
import {clearCart} from '../store/actions/actions'
import {connect} from 'react-redux'



class CartPage extends Component{

    state={
        products:[]
    }
    
    order=()=>{
        //send request of ordre
        
        //clear cart
        if (this.props.getState.cart.length !==0) {
            this.props.clearCart_dispatch();
        }
        
    }

    render(){
        return (
        
            <div>
                <h1>Cart</h1>
                <div className="row">
                    {
                        
                        this.props.cartItems.map( (item,index) =>
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex pb-3"  key={index}>
                                <CartItem cartItem={item} index={index}/>
                            </div>
                        )
                    }
                </div>
                <h3>Total: {this.props.total}$</h3>
                <button className="btn btn-primary btn-block" onClick={this.order}>Buy</button>
                
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
        ,
        getState:state
    }
}
const mapDispatchProps=(dispatch)=>{
    
    return {
        clearCart_dispatch:()=> {
            dispatch(clearCart());
        }
    };
}



export default connect(mapStateToProps,mapDispatchProps)(CartPage);