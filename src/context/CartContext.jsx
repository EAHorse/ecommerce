import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    const existingProduct = cart.find(product => product.id === newProduct.id);

    if (existingProduct) {
      setCart(cart.map(product =>
        product.id === newProduct.id ? { ...product, quantity: product.quantity + newProduct.quantity } : product
      ));
    } else {
      setCart([...cart, { ...newProduct, quantity: newProduct.quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const filterProducts = cart.filter((product) => product.id !== productId);
    setCart(filterProducts);
  };

  const totalCount = () => {
    const totalProducts = cart.reduce((total, cartProduct) => total + cartProduct.quantity, 0);
    return totalProducts;
  };

  const totalPrice = () => {
    const price = cart.reduce((total, cartProduct) => total + (cartProduct.quantity * cartProduct.price), 0);
    return price;
  };

  const removeAll = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalCount, totalPrice, removeAll }}>
      {children}
    </CartContext.Provider>
  );
};
