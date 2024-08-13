import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import useLoader from '../../hooks/useLoader';
import useScreenLoader from '../../hooks/useScreenLoader';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../db/db.js';

const ItemListContainer = ({ saludo }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, startLoading, stopLoading] = useLoader();
  const [LoaderComponent] = useScreenLoader(loading);

  const getProducts = async () => {
    startLoading();
    try {
      const refProducts = collection(db, 'products');
      const dataDb = await getDocs(refProducts);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    } finally {
      stopLoading();
    }
  };

  const getProductsByCategory = async () => {
    startLoading();
    try {
      const refProducts = collection(db, 'products');
      const queryDb = query(refProducts, where('category', '==', categoryId));
      const dataDb = await getDocs(queryDb);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products by category: ", error);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [categoryId]);

  return (
    <div>
      <p>{saludo}</p>
      {loading ? LoaderComponent : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
