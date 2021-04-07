import React from 'react';
import data from '../data.json';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Product.css';


function ProductList() {
    const list = data.map(( { name, description, category, rating, units, price }, i) => {
        return (
        <ProductDetails
        name={name}
        description={description}
        rating={rating}
        units={units}
        price={price}
        category={category}
        />
        )
    })

    return (
        <div className="ProductList">
        { list }
        </div>
    )
}

export default ProductList