import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART,CHANGE_QUANTITY} from '../actions/types';


export default function CartReducer(state,action) {
    switch (action.type) {
        case (ADD_TO_CART):{
            return[
                    ...state, 
                    {
                        product:action.productInfo,
                        quantity:action.quantity
                    }
                ]
        }
        case (CHANGE_QUANTITY):{
            var newCart=state;

            for (var item in newCart) {
                if (newCart[item].product.id === action.productInfo.id) {
                    console.log('find it');
                    newCart[item].quantity = action.quantity;
                   break; //Stop this loop, we found it!
                }
              }
            console.log(newCart);
            return [...newCart];
            
        }
        case (REMOVE_FROM_CART):{
            const itemIndex=action.index;
            const newState=[...state];
            newState.splice(itemIndex,1);
            console.log(newState);
            return newState;
        }
        case (CLEAR_CART):{
           return[]
        }
        default:{
            if(state===undefined)
                {return [];}

            return state;
        }
            
    }
    
}