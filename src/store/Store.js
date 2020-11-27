import {compose, createStore,applyMiddleware,combineReducers} from 'redux';
import CartReducer from './reducers'
import thunk from 'redux-thunk'
import throttle from "lodash.throttle";

function loadState() {
    try {
        const state=localStorage.getItem('cart');
        if (state!==null) {
            return JSON.parse(state);
        }
    } catch (error) {
        console.log('error: LocalStorage')
    }

    return {
        cart:[]
    };
    
}

function saveState(state) {
    console.log('saving state ...');
    localStorage.setItem('cart',JSON.stringify(state))
}





const rootReducers=combineReducers({
    cart:CartReducer,
})


const Store=createStore(rootReducers,loadState(),compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
) );

Store.subscribe( throttle(()=>{
            saveState(Store.getState());
        }
    ,2000)
);

export default Store;