import React, { useEffect, useState } from 'react';
import getProducts from '../../data/data.js';
import {ItemList} from './ItemList';
import useLoader from '../../hooks/useLoader';
import useScreenLoader from '../../hooks/useScreenLoader';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({saludo}) => {
  const {categoryId} = useParams()
  const [products, setProducts] = useState([])
  const [loading, startLoading, stopLoading] = useLoader();
  const [LoaderComponent] = useScreenLoader(loading);

  useEffect(() => {
    startLoading()

    getProducts()
    .then((response) => {
      if(categoryId){
        const filterResponse = response.filter((product) => product.category === categoryId)
        setProducts(filterResponse)
      }
      else{
        setProducts(response)
      }
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      stopLoading()
    })
  },[categoryId]);
  
  return (
    <div>
        <p>{saludo}</p>
        {loading ? LoaderComponent : <ItemList products={products}/>}
    </div>
  )
}

export default ItemListContainer