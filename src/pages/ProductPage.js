import React, {Component, useState,useEffect } from "react";
import {GetById as getById} from '../api/products'
import {addToCart,changeQuantity} from '../store/actions/actions'
import {connect} from 'react-redux'


/*class ProductPage extends Component{

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
    handledQuantity=(event)=> {
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
                        <input type="number" min="0" defaultValue={quantity} onChange={this.handledQuantity}/>
                        <br/><br/>
                        <p>Total : {quantity * product.price}$</p>
                        <button className="btn btn-primary" onClick={()=>this.btnAddToCart(product)}>Add to cart</button>
                    </div>
               </div>
            </div>
        );
    }
}*/

function ProductPage(props){

    const [product,setProduct]=useState({});
    const [loading,setLoading]=useState(true);
    const [quantity,setQuantity]=useState(0);

    useEffect(() => {
        const id=props.match.params.id;
        getById(parseInt(id)).then(
            product => {
                setProduct(product);
                setLoading(false);
                console.log(product);
            }
        );
    }, [])
   
    function handledQuantity(event){
        const val=event.target.value;
        if(val==="") {
            event.target.value='0';
            setQuantity(0);
        }
        else{
            setQuantity(parseInt(val))
        }
    }

    function btnAddToCart(product){

        if(quantity===0)return;

        var isChangeQuantity=true;
        const Count=props.cartItems.reduce(
            (count,item)=> {
                if(product.id===item.product.id){
                    count++;
                    if(item.quantity===quantity){
                        isChangeQuantity=false;
                    }
                }
                return count;
            },0
        )
        if(Count===0){
            props.addToCart(product,quantity);
        }
        else{
            if (isChangeQuantity) {
                props.changeQuantity(product,quantity);
            }
        }
        
    }
    
    if(loading){
        return 'Loading ...'
    }
    else{
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
                        <input type="number" min="0" defaultValue={quantity} onChange={handledQuantity}/>
                        <br/><br/>
                        <p>Total : {quantity * product.price}$</p>
                        <button className="btn btn-primary" onClick={()=>btnAddToCart(product)}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cartItems:state.cart
    }
}


export default connect(mapStateToProps,{addToCart,changeQuantity})(ProductPage);