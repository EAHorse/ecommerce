import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (count) => {
    setTotalItems((prevTotal) => prevTotal + count);
  };

  const removeFromCart = (count) => {
    setTotalItems((prevTotal) => Math.max(prevTotal - count, 0));
  };

  return (
    <CartContext.Provider value={{ totalItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
