import React, { useEffect, useState } from 'react'
import getProducts from '../../data/data.js'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
  const[product, setProduct] = useState({})
  const {productId} = useParams()
 
  useEffect(() => {
    getProducts()
        .then((data) => {
            const productExist = data.find((dataProduct) => dataProduct.id === Number(productId))
            setProduct(productExist)
        })
  }, [])

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer