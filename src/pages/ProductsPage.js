import React, { useState,useEffect } from "react";
import ProductItem from "../components/products/ProductItem";
import {GetAll as getAll} from '../api/products'


export default function ProductsPage() {

    const [products,setProducts]=useState([]);
    
    useEffect(() => {
        getAll().then(
            data => {
                setProducts(data);
                console.log({data});
            }
        );
    }, [])
    return (
        <div>
            <h1>Products</h1>
            <div className="row">
                {
                    products.map( product =>
                        <div className="col-sm-4 d-flex pb-3"  key={product.id}>
                            <ProductItem product={product}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
    
}