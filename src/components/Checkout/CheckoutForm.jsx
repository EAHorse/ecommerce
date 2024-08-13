import React, { useState } from 'react';
import * as Yup from 'yup';
import './CheckoutForm.css';

const CheckoutForm = ({ form, handleChangeInput, handleSubmitForm, formErrors }) => {
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);

  const handleEmailChange = (e) => {
    handleChangeInput(e);
    setShowConfirmEmail(e.target.value !== '');
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm} className='formContainer'>
        <label className="label">Name: </label>
        <input 
          type='text' 
          name='name' 
          value={form.name} 
          onChange={handleChangeInput} 
          className="input" 
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}
        
        <label className="label">Telephone: </label>
        <input 
          type='text' 
          name='telephone' 
          value={form.telephone} 
          onChange={handleChangeInput} 
          className="input" 
        />
        {formErrors.telephone && <p className="error">{formErrors.telephone}</p>}
        
        <label className="label">Email: </label>
        <input 
          type='email' 
          name='email' 
          value={form.email} 
          onChange={handleEmailChange} 
          className="input" 
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
        
        {showConfirmEmail && (
          <>
            <label className="label">Confirm Email: </label>
            <input 
              type='email' 
              name='confirmEmail' 
              value={form.confirmEmail} 
              onChange={handleChangeInput} 
              className="input" 
            />
            {formErrors.confirmEmail && <p className="error">{formErrors.confirmEmail}</p>}
          </>
        )}
        
        <button type='submit' className="button">Send order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
