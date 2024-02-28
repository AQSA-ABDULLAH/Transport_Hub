import React, { useState } from 'react';
import style from "./rentalBookingForm.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    // Perform actions with form data, such as submitting to a server or storing in state
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`${style.bookingForm}`}>
      <h2 className={`mb-4 ${style.text_spacing}`}>CUSTOMER DETAILS:</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="firstName" className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="lastName" className="form-label">Last Name:</label>
            <input
              type="text"
              id="lastName"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="phoneNo" className="form-label">Phone No:</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              className="form-control"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="cnic" className="form-label">CNIC:</label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              className="form-control"
              value={formData.cnic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="zipcode" className="form-label">Zip Code:</label>
            <input
              id="zipcode"
              name="zipcode"
              className="form-control"
              value={formData.zipcode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <textarea
            id="address"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <h2>Delivery Address</h2>
          <span>Plz provide correct delivery address (In case of need delivery):</span>
          <input
            type="text"
            id="cnic"
            name="cnic"
            value={formData.cnic}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={`btn btn-primary ${style.btn}`}>Submit</button>
      </form>
    </div>

  );
};

export default RentalBookingForm;