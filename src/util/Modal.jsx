import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, message, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <Link to='/' onClick={onClose} className="modal-close-link">Close</Link>
      </div>
    </div>
  );
};

export default Modal;
