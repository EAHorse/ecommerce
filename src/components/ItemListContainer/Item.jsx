import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom'

export const Item = ({product}) => {
  return (
    <Link to={`/detalle/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="item-card">
      <img src={product.image} alt={product.title} className="item-image" />
      <h2 className="item-title">{product.title}</h2>
      <p className="item-description">{product.description}</p>      
    </div>
    </Link>
  )
}
