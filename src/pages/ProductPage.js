import React, { Component } from "react";
import {GetById as getById} from '../api/products'
import {addToCart,changeQuantity} from '../store/actions/actions'
import {connect} from 'react-redux'


class ProductPage extends Component{

    state = {
        product:{},
        loading:true,
        quantity:0
    }
    componentDidMount(){
        const id=this.props.match.params.id;
        getById(parseInt(id)).then(
            product => {
                this.setState({
                    ...this.state,
                    product:product,
                    loading:false
                });
                console.log({product});
            }
        );
    }
    changeQuantity=(event)=> {
        const val=event.target.value;
        if(val==="") {
            event.target.value='0';
            this.setState({
                quantity: 0
            });
        }
        else{
            this.setState({
                quantity: parseInt(val)
            });
        }
       
        
    }
    btnAddToCart= (product)=>{

        if(this.state.quantity===0)return;

        var isChangeQuantity=true;
        const Count=this.props.cartItems.reduce(
            (count,item)=> {
                if(product.id===item.product.id){
                    count++;
                    if(item.quantity===this.state.quantity){
                        isChangeQuantity=false;
                    }
                }
                return count;
            },0
        )
        if(Count===0){
            this.props.addToCart(product,this.state.quantity);
        }
        else{
            if (isChangeQuantity) {
                this.props.changeQuantity(product,this.state.quantity);
            }
        }
        
    }
    render(){
        if(this.state.loading){
            return 'Loading ...'
        }
        const product=this.state.product;
        const quantity=this.state.quantity;
        return (
            <div>
               
               <div className="row">
                    <div className="col-6">
                        <img src={product.image} width="100%" alt={product.name}/>
                    </div>
                    <div className="col-6">
                        <h1>{product.name}</h1>
                        <p>Price: {product.price}$</p>
                        <p>{product.description}</p>
                        <br/><br/>
                        <input type="number" min="0" defaultValue={quantity} onChange={this.changeQuantity}/>
                        <br/><br/>
                        <p>Total : {quantity * product.price}$</p>
                        <button className="btn btn-primary" onClick={()=>this.btnAddToCart(product)}>Add to cart</button>
                    </div>
               </div>
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


export default connect(mapStateToProps,{addToCart,changeQuantity})(ProductPage);