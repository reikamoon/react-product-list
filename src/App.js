import data, { categories, productCount, categoriesAndCount, categoriesUnique } from './data';
import React, { useState } from 'react';
import Product from './Product/Products'
import ProductFilter from './ProductFilter/ProductFilter';
import './App.css';

function App() {
  const [category, setCategory] = useState('All');

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
                setCategory('all')
              }}/>
              </div>
        )
    })
  return (
    <div className="App">
     <Product category={category} setCategory={setCategory} />
     <ProductFilter category={category} />
    </div>
  );
}

export default App;
