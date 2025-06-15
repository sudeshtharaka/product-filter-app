import React, { useState, useEffect } from 'react';
import productsData from './products.json';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Product List</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>Filter by Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '180px',
              textAlign: 'center'
            }}
          >
            <img src={product.image} alt={product.title} width="150" />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
