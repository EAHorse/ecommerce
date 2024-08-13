import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams, Link } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import db from '../db/db.js';
import useLoader from '../../hooks/useLoader';
import useScreenLoader from '../../hooks/useScreenLoader';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [loading, startLoading, stopLoading] = useLoader();
  const [LoaderComponent] = useScreenLoader(loading);

  const getProduct = async () => {
    startLoading();
    try {
      const docRef = doc(db, 'products', productId);
      const dataDb = await getDoc(docRef);
      if (dataDb.exists() && dataDb.data().title) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data);
      } else {
        setProduct(null);
      }
    } catch (error) {
      console.error("Error fetching product: ", error);
      setProduct(null);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  if (loading) {
    return LoaderComponent;
  }

  if (!loading && !product) {
    return (
      <div className="empty-cart-container">
        <div className="empty-cart-content">
          <h2 className="empty-cart-title">404!</h2>
          <p className="empty-cart-message">Product not found.</p>
          <Link to="/" className="empty-cart-link">Browse Products</Link>
        </div>
      </div>
    );
  }
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
