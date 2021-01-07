import React from "react";
import CartItem from "../components/cart/CartItem";
import {clearCart} from '../store/actions/actions'
import {connect} from 'react-redux'


function CartPage({cartItems,total,clearCart_dispatch }) {
    function order() {
        //send request of ordre
        
        //clear cart
        if (cartItems.length !==0) {
            clearCart_dispatch();
        }
        
    };
    

    return (
        <div>
            <h1>Cart</h1>
            <div className="row">
                {
                    cartItems.map( (item,index) =>
                        <div className="col-lg-3 col-md-6 col-sm-12 d-flex pb-3"  key={index}>
                            <CartItem cartItem={item} index={index}/>
                        </div>
                    )
                }
            </div>
            <h3>Total: {total}$</h3>
            <button className="btn btn-primary btn-block" onClick={order}>Buy</button>
            
            <br/><br/>
        </div>
    );
}

function mapStateToProps(state){
    return {
        cartItems:state.cart,
        total:state.cart.reduce(
            (total,item)=> total+(item.quantity*item.product.price) ,
            0
        )
    }
}
function mapDispatchProps(dispatch){
    
    return {
        clearCart_dispatch:()=> {
            dispatch(clearCart());
        }
    };
}



export default connect(mapStateToProps,mapDispatchProps)(CartPage);