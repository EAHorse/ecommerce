import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ onAddToCart, onMinusToCart, stock, totalItems}) => {
  const [count, setCount] = useState(1);
  console.log("stock::",stock);
  console.log("totalItems::",totalItems);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (stock >= count) {
      onAddToCart(count);
    }
  };

  const handleMinusToCart = () => {
    if (count <= totalItems) {
      onMinusToCart(count);
    }
  };

  return (
    <div className="item-count-container">
      <button onClick={handleMinusToCart} className="remove-from-cart-button" disabled={totalItems === 0}>Eliminar del carrito</button>
      <div className="counter">
        <button onClick={decrement} className="counter-button" disabled={stock === 0 || count === 1}>-</button>
        <span className="counter-number">{count}</span>
        <button onClick={increment} className="counter-button" disabled={stock === 0}>+</button>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button" disabled={stock === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
