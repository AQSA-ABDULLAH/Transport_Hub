import React, { useState } from 'react';
import Navbar from '../atoms/Navbar/Navbar';
import axios from 'axios';
const PickupBoyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    vehicleType: '',
    cnicNumber: '',
    city: '',
    picture: null,
    drivingLicense: null,
    vehiclePapers: null,
    referenceNumber: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting to true when the form is being submitted

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/register', data);

      console.log(response.data);

      // Show a success alert or handle the success state as needed
      alert('Form submitted successfully!');
      
      // Redirect the user to the homepage
      window.location.href = '/'; // You can replace '/' with the desired URL
    } catch (error) {
      console.error('Error:', error);

      // Show an error alert or handle the error state as needed
      alert('Error submitting the form. Please try again.');
    } finally {
      setSubmitting(false); // Set submitting back to false after the request is completed
    }
  };
  return (<>
  <Navbar/> 
  <div className="d-flex justify-content-center align-items-center form-container" style={{ minHeight: '100vh',color: 'white'}}>
      <div className="w-50 p-4 rounded " style={{backgroundColor: '#b491d2',marginTop: '20px'}}>
      <h2>Register as Pickup Boy</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="vehicleType" className="form-label">
              Vehicle Type
            </label>
            <select
              className="form-select"
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              required
            >
              <option value="">Select Vehicle</option>
              <option value="bike">Bike</option>
              <option value="smallTruck">Small Truck</option>
              <option value="boxTruck">Box Truck</option>
              <option value="cargoVan">Cargo Van</option>
              <option value="walkInTruck">Walk-In Truck</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="cnicNumber" className="form-label">
              CNIC Number
            </label>
            <input
              type="number"
              className="form-control"
              id="cnicNumber"
              name="cnicNumber"
              value={formData.cnicNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <select
              className="form-select"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              <option value="karachi">Karachi</option>
              <option value="lahore">Lahore</option>
              {/* Add more cities as needed */}
            </select>
          </div>
        </div>
        {/* ... other fields ... */}
        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="picture" className="form-label">
              Picture
            </label>
            <input
              type="file"
              className="form-control"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="drivingLicense" className="form-label">
              Driving License
            </label>
            <input
              type="file"
              className="form-control"
              id="drivingLicense"
              name="drivingLicense"
              accept="application/pdf,image/*"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* ... other fields ... */}
        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="vehiclePapers" className="form-label">
              Vehicle Papers
            </label>
            <input
              type="file"
              className="form-control"
              id="vehiclePapers"
              name="vehiclePapers"
              accept="application/pdf,image/*"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="referenceNumber" className="form-label">
              Reference Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="referenceNumber"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
      </form>
    </div>
    </div>
    </>);
};

export default PickupBoyForm;
