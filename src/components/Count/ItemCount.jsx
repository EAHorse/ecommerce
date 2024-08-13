import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ onAddToCart, stock}) => {
  const [count, setCount] = useState(1);

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

  return (
    <div className="item-count-container">
      <div className="counter">
        <button onClick={decrement} className="counter-button" disabled={stock === 0 || count === 1}>-</button>
        <span className="counter-number">{count}</span>
        <button onClick={increment} className="counter-button" disabled={stock === 0}>+</button>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button" disabled={stock === 0}>Add to cart</button>
    </div>
  );
};

export default ItemCount;
