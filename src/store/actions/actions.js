import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART,CHANGE_QUANTITY} from './types';

// add to cart
export function createAddToCartAction(productInfo,quantity) {
    return{
        type:ADD_TO_CART,
        productInfo,
        quantity
    }
}
export function addToCart(productInfo,quantity) {
    return (dispatch)=>{
        dispatch(createAddToCartAction(productInfo,quantity))
    }
}
// remove from cart
function createRemoveFromCartAction(index) {
    return{
        type:REMOVE_FROM_CART,
        index
    }
}
export function removeFromCart(index) {
    return (dispatch)=>{
        dispatch(createRemoveFromCartAction(index))
    }
}
// changing quantity of product
function createChangeQuantityAction(productInfo,quantity) {
    return{
        type:CHANGE_QUANTITY,
        productInfo,
        quantity
    }
}
export function changeQuantity(productInfo,quantity) {
    return (dispatch)=>{
        dispatch(createChangeQuantityAction(productInfo,quantity))
    }
}

// clear cart
export function clearCart() {
    return{
        type:CLEAR_CART
    }
}