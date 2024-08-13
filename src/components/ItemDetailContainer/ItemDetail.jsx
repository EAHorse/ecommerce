import React, { useState, useContext } from 'react';
import ItemCount from '../Count/ItemCount';
import { CartContext } from '../../context/CartContext.jsx';
import FormatPrice from '../../util/FormatPrice.js';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

export const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);

  const addProduct = (count) => {
    const cartProduct = { ...product, quantity: count };
    addToCart(cartProduct);
    setShowItemCount(false);
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={product.image} alt={product.title} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-description">{product.description}</p>
        <p className="item-price">{FormatPrice(product.price)}</p>
        {
          showItemCount ? (
          <ItemCount 
            onAddToCart={addProduct} 
            stock={product.stock}
          />) : (
            <>
              <Link to="/cart" className="go-cart-link">Go to cart</Link>
              <Link to="/" className="go-shopping">Go shopping</Link>
            </>
          )
        }
        
      </div>
    </div>
  );
};
