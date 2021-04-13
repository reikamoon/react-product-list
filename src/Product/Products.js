import React from 'react'
import data, { categoriesUnique } from '../data.js';
import './Product.css'


export default function Products(props) {
    const { category, setCategory } = props
    // a list of buttons 

    const display_cat = categoriesUnique.map((item, index) => {
        return (
            <div>
            <button
                className="button-items"
                key={index}
                onClick={() => {
                    setCategory(item)

                }}
            >{item}
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