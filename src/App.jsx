import React, { useState } from 'react'
import './App.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';


function App() {
const [PhoneNumber,setPhoneNumber]=useState('');
const [valid,setValid]=useState(true);

const handleChange=(value)=>{
  setPhoneNumber(value);
  setValid(validatePhoneNumber(value));
};

const validatePhoneNumber=(PhoneNumber)=>{
  const phoneNumberPattern= /^\d{10}$/;
  return phoneNumberPattern.test(PhoneNumber);

}
  return (
    <div className='container'>
      <h2>Phone Number Validation</h2>
      <div className='phone-input-container'></div>
  <label1 className='label'>
    Phone number:
    <PhoneInput
    country={'us'}
    value={PhoneNumber}
    onChange={handleChange}
    inputProps={{
   required: true,
    }}
    />
  </label1>
  {!valid && (
    <p className='error-msg'>Please enter a valid phone number!</p>
  )}
    </div>
  )

}

export default App
