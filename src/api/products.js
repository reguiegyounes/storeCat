import Products from "./products.json";

export function GetAll() {
    return Promise.resolve(Products);
}

export function GetById(id) {
    const product=Products.find(item => item.id === id);
    return Promise.resolve(product);
}

export default{
    GetAll,GetById
}