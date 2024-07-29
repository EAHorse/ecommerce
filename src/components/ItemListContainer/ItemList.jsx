import React from 'react';
import { Item } from './Item';
import './ItemList.css';

export const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};
