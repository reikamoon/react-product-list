import React from 'react';
import data from '../data.json';
import './ProductDetails.css';

function ProductDetails(props) {
    const{ name, description, price, category, rating, units } = props
    return (
        <div className="ProductText">
        <h1> {name}, <i class="far fa-star"></i>{rating}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
        <h3> Category: <b>{category}</b></h3>
        <h4>Units: {units}</h4>
        </div>
    )
}

export default ProductDetails