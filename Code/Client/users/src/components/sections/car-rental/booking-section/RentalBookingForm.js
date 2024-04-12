import React, { useState } from 'react';
import style from "./rentalBookingForm.module.css";
import Button from '../../../atoms/button/Button';

const RentalBookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    cnic: '',
    zipcode: '',
    address: '',
    deliveryAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Store form data into local storage
    localStorage.setItem('formData', JSON.stringify(formData));
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
            <label htmlFor="phoneNo" className={style.formlabel}>Phone No:</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
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
            <label htmlFor="zipcode" className={style.formlabel}>Zip Code:</label>
            <input
              id="zipcode"
              name="zipcode"
              value={formData.zipcode}
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