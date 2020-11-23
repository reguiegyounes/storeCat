import React from "react";
import "../FontAwsomeIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CartItem(props){
    return (
        <div className="card card-outline">
            <img src={props.cartItem.product.image} className="card-img-top" alt={props.cartItem.product.name}/>
            <div className="card-body">
                <h5 className="card-title">{props.cartItem.product.name}</h5>
                <p className="card-text">Price: {props.cartItem.product.price}$</p>
                <p className="card-text">Quantity: {props.cartItem.quantity}</p>
                <p className="card-text">Total: {props.cartItem.product.price*props.cartItem.quantity}$</p>
                <button className="btn btn-danger"><FontAwesomeIcon icon="trash" color="white" size="1x" /> Delete</button>
            </div>
        </div>
    );
}