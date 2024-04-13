import React, { useState } from 'react';
import style from "./rentalBookingForm.module.css";
import Button from '../../../atoms/button/Button';

const RentalBookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    cnic: '',
    zipCode: '',
    address: ''
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('bookingForm', JSON.stringify(formData));
    setIsPopupOpen(true); // Show the popup after saving the data
  };

  const closePopup = () => {
    setIsPopupOpen(false);
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
              required
              onChange={handleChange}
            />
          </div>
          <div className={style.formfiled}>
            <label htmlFor="lastName" className={style.formlabel}>Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              onChange={handleChange}
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
              required
              onChange={handleChange}
            />
          </div>
          <div className={style.formfiled}>
            <label htmlFor="email" className={style.formlabel}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
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
              required
              onChange={handleChange}
            />
          </div>
          <div className={style.formfiled}>
            <label htmlFor="zipCode" className={style.formlabel}>Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.formfiled}>
          <label htmlFor="address" className={style.formlabel}>Address:</label>
          <textarea
            style={{ marginTop: '2px' }}
            id="address"
            name="address"
            rows={4}
            required
            onChange={handleChange}
          />
        </div>

        <div className={style.btn}>
          <Button
            type="submit"
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