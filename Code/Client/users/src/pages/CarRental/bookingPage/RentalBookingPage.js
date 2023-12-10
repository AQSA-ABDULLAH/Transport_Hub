import React, { useState } from 'react';
import Navbar from "../../../components/atoms/Navbar/Navbar"

const RentalBookingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    address: '',
    cnic: '',
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
    <>
    <Navbar/>
      <h2>Rental Details and Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone No:</label>
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cnic">CNIC:</label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <h2>Delivery Address</h2>
          <span>In case of delivery</span>
          <label htmlFor="cnic">Delivery Address:</label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RentalBookingPage;

