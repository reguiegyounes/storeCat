import React, { Component } from "react";
import ProductItem from "../components/products/ProductItem";
import {GetAll as getAll} from '../api/products'

export default class ProductsPage extends Component{

    state={
        products:[]
    }
    componentDidMount(){
        getAll().then(
            data => {
                this.setState({
                    products:data
                })
                console.log({data});
            }
        );
    }
    render(){
        return (
            <div>
                <h1>Products</h1>
                <div className="row">
                    {
                        this.state.products.map( product =>
                            <div className="col-4" key={product.id}>
                                <ProductItem product={product}/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}