import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

const App = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [stock, setStock] = useState(10);

  const handleAddToCart = (count) => {
    if (stock >= count) {
      setTotalItems(totalItems + count);
      setStock(stock - count);
    }
  };

  const handleMinusToCart = (count) => {
    if (totalItems >= count) {
      setTotalItems(totalItems - count);
      setStock(stock + count);
    }
  };

  return (
    <div className="App">
      <NavBar totalItems={totalItems} />
      <ItemListContainer 
        saludo="¡Ecommerce Motorcycle!"
        onAddToCart={handleAddToCart} 
        onMinusToCart={handleMinusToCart} 
        stock={stock} 
        totalItems={totalItems}
         />
    </div>
  );
};

export default App;
