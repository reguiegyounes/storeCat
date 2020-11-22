import React, { Component } from "react";
import {GetById as getById} from '../api/products'


export default class ProductPage extends Component{

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
                })
                console.log({product});
            }
        );
    }
    changeQuantity=(event)=> {
        const val=event.target.value;
        if(val==NaN) {
            this.setState({
                quantity: 0
            })
        }
        else{
            this.setState({
                quantity: parseInt(val)
            })
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
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
               </div>
            </div>
        );
    }
}