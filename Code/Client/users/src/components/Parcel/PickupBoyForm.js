import React, { useState } from 'react';
import axios from 'axios';
import FileInput from '../Fileinput/firebase';
import styles from '../Fileinput/styles.module.css'

const PickupBoyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    vehicleType: '',
    cnicNumber: '',
    city: '',
    picture: '',
    drivingLicense: '',
    vehiclePapers: '',
    referenceNumber: '',
  });
 
  const [submitting, setSubmitting] = useState(false);

  const handleChange = ({currentTarget:input}) => {
    setFormData({...formData ,
          [input.name]:input.value
        });
    // if (input.type === 'file') {
    //   // Handle file uploads
    //   setFormData(prevFormData => ({
    //     ...prevFormData,
    //     [input.name]: input.files[0] // Set the file object directly
    //   })); 
    // } else {
    //   // For other inputs, update the state normally
    //   setFormData(prevFormData => ({
    //     ...prevFormData,
    //     [input.name]: input.value
    //   }));
    // }
  //   setFormData({...formData ,
  //     [input.name]:input.value
  //   });

  };

  const handleInputState = (name,value) => {
    setFormData((prev)=>({...prev,[name]:value}))
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting to true when the form is being submitted

    // const data = new FormData();
    // for (const key in formData) {
    //   data.append(key, formData[key]);
    // }

    try {
      const url="http://localhost:5000/register"
      const response = await axios.post(url, formData);
      console.log(response.data);
      // Show a success alert or handle the success state as needed
     
      alert('Form submitted successfully!'); 
      // Redirect the user to the homepage
      // window.location.href = '/'; 
    } catch (error) {
      console.log('Error:', error);

      // Show an error alert or handle the error state as needed
      alert('Error submitting the form. Please try again.');
    } 
  };
  return (<>

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
              placeholder="Name"
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
              placeholder="abc@gmail.com"
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
            <FileInput
              type="image" 
              name="picture"
              label="Select Image"
              handleInputState={handleInputState}
              value={formData.picture}
            />
    
          </div>
          <div className="mb-3 col-md-6">
            {/* <input
              type="file"
              className="form-control"
              id="drivingLicense"
              name="drivingLicense"
              accept="application/pdf,image/*"
              onChange={handleChange}
              required
            /> */}
             <FileInput
              type="image"
              name="drivingLicense"
              label="Select License"
              handleInputState={handleInputState}
              value={formData.drivingLicense}
            />
          </div>
        </div>
        {/* ... other fields ... */}
        <div className="row">
          <div className="mb-3 col-md-6">
            {/* <input
              type="file"
              className="form-control"
              id="vehiclePapers"
              name="vehiclePapers"
              accept="application/pdf,image/*"
              onChange={handleChange}
              required
            /> */}
            <FileInput
              type="image"
              name="vehiclePapers"
              label="Select Vehicle Paper"
              handleInputState={handleInputState}
              value={formData.vehiclePapers}
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
        <button type="submit" className="btn btn-primary" >
            submit</button>
      </form>
    </div>
    </div>
    </>);
};

export default PickupBoyForm;
