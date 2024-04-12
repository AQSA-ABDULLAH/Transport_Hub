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
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));

    // Optionally, add zip code validation
    if (name === 'zipCode' && !value.trim()) {
      console.error('Zip code is required');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     // Retrieve carDetails from local storage
     const filterData = JSON.parse(localStorage.getItem('filterData'));
     if (!filterData) {
       console.error('Car details not found in local storage');
       return;
     }

    // Check for empty fields in formData
    const isEmpty = Object.values(formData).some(x => x.trim() === '');
    if (isEmpty) {
      console.error('Please fill in all required fields');
      return;
    }

    // Retrieve carDetails from local storage
    const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
    if (!selectedCar) {
      console.error('Car details not found in local storage');
      return;
    }

    // Combine formData with carDetails
    const combinedData = { ...formData, filterData: filterData };

    // Log combined data to console (for debugging)
    console.log('Sending combined data:', combinedData);

    // Send combined data to server
    axios.post('http://localhost:5000/api/rental-booking/book-rental', combinedData)
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