import data, { categories, productCount, categoriesAndCount, categoriesUnique } from './data';
import React, { useState } from 'react';
import Product from './Product/Products'
import ProductFilter from './ProductFilter/ProductFilter';
import './App.css';

function App() {
  const [category, setCategory] = useState('All');

  const display_cat = categoriesUnique.map((item, index) => {
        return (
            <button
                className="button-items"
                key={index}
                onClick={() => {
                    setCategory(item)

                }}
            >{item}
            </button>
        )
    })
  return (
    <div className="App">
     {display_cat}
     <button
            className="button-items"
              category={'All'}
              label="All"
              onClick={() => {
                setCategory('All')
              }}/>
    </div>
  );
}

export default App;
