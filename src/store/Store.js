import {createStore} from 'redux';

const initialState={
    cart:[
            {
                product:{
                    "id": 1,
                    "name": "White Cat",
                    "price": 100,
                    "image": "/images/1.jpg",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                quantity:5
            },
            {
                product:
                {
                  "id": 2,
                  "name": "Angry Cat",
                  "price": 1000,
                  "image": "/images/2.jpg",
                  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                quantity:2
            }
        ]
}



function reducers(state){
    return state;
}


const Store=createStore(reducers,initialState);

export default Store;