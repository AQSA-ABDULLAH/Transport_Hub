import React, { useState } from 'react';
import style from "./rentalBookingForm.module.css";
import Button from '../../../atoms/button/Button';
import axios from 'axios';

const RentalBookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    cnic: '',
    zipCode: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    // Add zip code validation
    if (name === 'zipCode' && value.trim() === '') {
      // Show an error message or disable the submit button
      console.error('Zip code is required');
    }
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();

    // if (Object.keys(errors).length > 0) {
    //   console.error('Please correct the errors before submitting.');
    //   return;
    // }
  
    // Check if all required fields have values
    const isEmpty = Object.values(formData).some(value => value.trim() === '');
  
    if (isEmpty) {
      console.error('Please fill in all required fields');
      // You can also display an error message to the user here
      return;
    }
  
    localStorage.setItem('formData', JSON.stringify(formData));
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
  
    console.log('Sending data:', storedFormData);
    axios.post('http://localhost:5000/api/rental-booking/book-rental', storedFormData)
      .then(response => {
        console.log('Data sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Failed to send data:', error.response ? error.response.data : error.message);
      });
    
  };
  
  



  return (
    <div className={`${style.bookingForm}`}>
      <h2 className={style.text_spacing}>CUSTOMER DETAILS</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.formrow}>
          <div className={style.formfiled}>
            <label htmlFor="firstName" className={style.formlabel}>First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formfiled}>
            <label htmlFor="lastName" className={style.formlabel}>Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={style.formrow}>
          <div className={style.formfiled}>
            <label htmlFor="phoneNumber" className={style.formlabel}>Phone No:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formfiled}>
            <label htmlFor="email" className={style.formlabel}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={style.formrow}>
          <div className={style.formfiled}>
            <label htmlFor="cnic" className={style.formlabel}>CNIC:</label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formfiled}>
            <label htmlFor="zipCode" className={style.formlabel}>Zip Code:</label>
            <input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={style.formfiled}>
          <label htmlFor="address" className={style.formlabel}>Address:<span className={style.msg}>(Plz provide correct delivery address, In case of need delivery):</span></label>
          <textarea
            style={{ marginTop: '2px' }}
            id="address"
            name="address"
            rows={4}
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.btn}>
          <Button
            primary
            size={"14px"}
            radius={"4px"}
            btnText="Book Rental"
          />
        </div>

      </form>
    </div>

  );
};

export default RentalBookingForm;