import data, { categories, productCount, categoriesAndCount, categoriesUnique } from './data';
import React, { useState } from 'react';
import Product from './Product/Product';
import './App.css';

function App() {
  const listCat = categoriesUnique.map((category) =>
  <button class="categorybutton">{category}</button>
  );

  return (
    <div className="App">
    <h1>{listCat}</h1>
    <Product />
    </div>
  );
}

export default App;
