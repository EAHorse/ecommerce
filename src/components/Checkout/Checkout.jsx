import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import CheckoutForm from './CheckoutForm';
import db from '../db/db.js';
import useLoader from '../../hooks/useLoader.jsx';
import useScreenLoader from '../../hooks/useScreenLoader.jsx';
import Modal from '../../util/Modal.jsx';
import formValidate from '../../util/formValidation.js';
import { toast } from 'react-toastify';

const Checkout = () => {
  const [loading, startLoading, stopLoading] = useLoader();
  const [LoaderComponent] = useScreenLoader(loading);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [header, setHeader] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const [form, setForm] = useState({
    name: '',
    telephone: '',
    email: '',
    confirmEmail: ''
  });

  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, removeAll} = useContext(CartContext);

  const handleChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const response = await formValidate(form);
    if (response.status === "success") {
      const order = {
        buyer: { ...form },
        products: [...cart],
        fecha: Timestamp.fromDate(new Date()),
        total: totalPrice()
      };
      sendOrder(order);
    } else {
      setFormErrors(response.errors || {});
      toast.error(response.message);
    }
  };

  const sendOrder = async (order) => {
    try {
      startLoading();
      const orderRef = collection(db, 'orders');
      const orderDb = await addDoc(orderRef, order);
      setOrderId(orderDb.id);
      setForm({ name: '', telephone: '', email: '', confirmEmail: '' });
    } catch (error) {
      console.error(error);
      setHeader('Error');
      setModalMessage('There was an error processing your order. Please try again.');
      setModalOpen(true);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    if (orderId) {
      setHeader('Success');
      setModalMessage(`Order completed. Save the following order ID: ${orderId}`);
      setModalOpen(true);
      removeAll()
    }
  }, [orderId]);

  return (
    <div>
      {loading ? LoaderComponent : (
        <CheckoutForm
          form={form}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
          formErrors={formErrors}
        />
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        message={modalMessage}
        title={header}
      />
    </div>
  );
};

export default Checkout;
