import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../Count/ItemCount';
import { CartContext } from '../../context/CartContext.jsx';

export const ItemDetail = ({ product }) => {
  const [stock, setStock] = useState(10);
  const { addToCart, removeFromCart, totalItems } = useContext(CartContext);

  const handleAddToCart = (count) => {
    if (stock >= count) {
      addToCart(count);
      setStock(stock - count);
    }
  };

  const handleMinusToCart = (count) => {
    if (totalItems >= count) {
      removeFromCart(count);
      setStock(stock + count);
    }
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={product.image} alt={product.title} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-description">{product.description}</p>
        <p className="item-price">${product.price}</p>
        <ItemCount 
          onAddToCart={handleAddToCart} 
          onMinusToCart={handleMinusToCart} 
          stock={stock}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
};
