import data, { categories, productCount, categoriesAndCount, categoriesUnique } from './data';
import React, { useState } from 'react';
import Product from './Product/Products'
import ProductFilter from './ProductFilter/ProductFilter';
import './App.css';

function App() {
  const [category, setCategory] = useState('All');

  const display_cat = categoriesUnique.map((item) => {
        return (
            <button
                className="button-items"
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
            onClick={() => {
                setCategory('All')
              }}
              >All {data.length}
              </button>
      <ProductFilter category={category} />
    </div>
  );
}

export default App;
