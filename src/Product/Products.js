import React from 'react'
import data, { categoriesUnique, productCount } from '../data.js';
import './Product.css'


export default function Products(props) {
    const { category, setCategory } = props
    // a list of buttons 

    const display_cat = categoriesUnique.map((item, productCount) => {
        return (
            <div>
            <button
                className="button-items"
                onClick={() => {
                    setCategory(item)

                }}
            >{item}{productCount}
            </button>
            <button
              category={'all'}
              onClick={() => {
                return setCategory('all')
              }}/>
              </div>
        )
    })
    return (
        <div>
            {display_cat}
        </div>
    )
}