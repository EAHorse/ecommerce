import React, { useState } from 'react';
import ItemCount from "../Count/ItemCount";

const ItemListContainer = ({saludo, onAddToCart, onMinusToCart, stock, totalItems}) => {
  return (
    <div>
        <p>{saludo}</p>
        <ItemCount 
          onAddToCart={onAddToCart} 
          onMinusToCart={onMinusToCart} 
          stock={stock} 
          totalItems={totalItems}/>
    </div>
  )
}

export default ItemListContainer