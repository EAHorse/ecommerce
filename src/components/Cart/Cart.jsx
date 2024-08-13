import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import FormatPrice from '../../util/FormatPrice.js';
import { Link } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
  const { cart, totalPrice, removeFromCart, removeAll } = useContext(CartContext);

  //Early return
  if(cart.length === 0){
    return(
      <div className="empty-cart-container">
        <div className="empty-cart-content">
          <h2 className="empty-cart-title">Your Cart is Empty!</h2>
          <p className="empty-cart-message">It seems your cart is empty.</p>
          <Link to="/" className="empty-cart-link">Browse Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-list">
        {cart.map((cartProduct) => (
          <div key={cartProduct.id} className="cart-item">
            <img className="cart-item-image" src={cartProduct.image} alt={cartProduct.title} />
            <div className="cart-item-details">
              <p className="cart-item-title">{cartProduct.title}</p>
              <p className="cart-item-quantity">Quantity: {cartProduct.quantity}</p>
              <p className="cart-item-price">Unit Price: {FormatPrice(cartProduct.price)}</p>
              <p className="cart-item-partial-price">Partial Price: {FormatPrice(cartProduct.quantity * cartProduct.price)}</p>
            </div>
            <button className="cart-item-remove" onClick={() => removeFromCart(cartProduct.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2 className="cart-total-price">Total Price: {FormatPrice(totalPrice())}</h2>
        <button className="cart-remove-all" onClick={removeAll}>Delete All</button>
        <Link to="/checkout" className="shopping">Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
