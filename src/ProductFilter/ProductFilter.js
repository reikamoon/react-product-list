import React from 'react'
import data from '../data.js';
import './ProductFilter.css';


export default function ProductNcp(props) {

    const { category } = props


    const display_cat = data.filter((item, index) => {
        if (item.category === category) {
            return true
        }
        return false

    }).map((item, index) => {
        return (



     <div className="Product" key={index}>
        <h1> {item.name}, <i class="far fa-star"></i>{item.rating}</h1>
        <h2>{item.price}</h2>
        <p>{item.description}</p>
        <h3> Category: <button class="categorybutton">{item.category}</button></h3>
        <h4>Units: {item.units}</h4>
        </div>
        )
    })
    return (
        <div>
            
        {display_cat}

        </div>
    )
}