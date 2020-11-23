import React from 'react';
import {BrowserRouter as Router,Route ,Link} from 'react-router-dom';
import {connect} from 'react-redux'
import "./CartIcon.css";
import "./FontAwsomeIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CartIcon(props) {
    return(
        <div  id="cart-icon">
            <Link to="/cart">
                <FontAwesomeIcon icon="shopping-cart" color="gray" size="2x" />
                <span className="badge badge-danger">{props.totalQuantity}</span>
            </Link>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return {
        totalQuantity:state.cart.reduce(
            (total,item)=> total+item.quantity ,
            0
        )
    }
}


export default connect(mapStateToProps)(CartIcon);