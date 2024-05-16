import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./CustomerForm.css";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import parcelpickupimg2 from "./parcelpickupimg2.jpeg";
import { MdCloudUpload } from "react-icons/md";
import Swal from 'sweetalert2';
import RateCalculator from '../../user-dashboard/RateCalculator';

const Parcelform = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    pickupLocation: "", destinationLocation: "", weight: "", parcelType: "", phone: "", email: "", time: "", address: "",
    selectedCompany: "", rate: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRouteCalculated = (rate, pickupLocation, destinationLocation) => {
    setFormValues(prevState => ({
      ...prevState,
      pickupLocation: pickupLocation,
      destinationLocation: destinationLocation,
      rate: rate
    }));
  };

  const Parcel_form = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/create", formValues);

      // Assuming that the response format is JSON
      const data = response.data;

      Swal.fire({
        icon: 'success',
        title: 'Form Submitted',
        text: 'Your form has been submitted successfully. We will contact you through email.',
      });
      navigate('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error submitting the form. Please try again later.',
      });
      console.error("Error sending the form", error);
    }
  };

  return (
    <>
      <div className="upper">
        <span>
          <p>Send your parcel from your home to anywhere at your own convenience. Send your parcel from your home to anywhere at your own convenience. Send your parcel from your home to anywhere at your own convenienceSend your parcel from your home to anywhere at your own convenienceSend your parcel from your home to anywhere at your own convenienceSend your parcel from your home to anywhere at your own convenience</p>
        </span>
        <span>
          <img src={parcelpickupimg2} alt="Example" />
        </span>
      </div>
      <div className="mb-3">
           
              <h3 style={{textAlign:"center"}}>Search Your Pickup and Destination Location here</h3>
            </div>
      <RateCalculator onRouteCalculated={handleRouteCalculated} />
      <div className="d-flex justify-content-center align-items-center form-container">
        <div className="w-50 p-4 rounded hello">
          <h2 className="text-center mb-4">Parcel Pickup Service</h2>
          <form onSubmit={Parcel_form}>
            <div className="mb-3">
              <label htmlFor="pickupLocation" className="form-label">Pickup Address</label>
              <input type="text" className="form-control" id="pickupLocation" name="pickupLocation" value={formValues.pickupLocation} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="destinationLocation" className="form-label">Destination Address</label>
              <input type="text" className="form-control" id="destinationLocation" name="destinationLocation" value={formValues.destinationLocation} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="weight" className="form-label">Weight (in kg)</label>
              <input type="number" className="form-control" id="weight" name="weight" value={formValues.weight} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="parcelType" className="form-label">Parcel Type</label>
              <select className="form-control" id="parcelType" name="parcelType" value={formValues.parcelType} onChange={handleInputChange}>
                <option value="">Select Parcel Type</option>
                <option value="Personal_letters">Personal letters</option>
                <option value="Greeting_cards">Greeting cards</option>
                <option value="Books_and_magazines">Books and magazines</option>
                <option value="Clothing_and_fashion_accessories">Clothing and fashion accessories</option>
                <option value="Legal_documents">Legal documents</option>
                <option value="Certificates">Certificates</option>
                <option value="Gifts">Gifts</option>
                <option value="Personal_belongings">Personal belongings</option>
                <option value="Clothing_and_accessories">Clothing and accessories</option>
                <option value="Electronics_and_gadgets">Electronics and gadgets</option>
                <option value="Flowers_and_bouquets">Flowers and bouquets</option>
                <option value="Medical_reports_and_records">Medical reports and records</option>
                <option value="Souvenirs">Souvenirs</option>
                {/* Add other parcel type options as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" required className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" placeholder="03343353333" maxLength={11} name="phone" value={formValues.phone} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="abc@gmail.com" value={formValues.email} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">Preferred Time</label>
              <input type="time" className="form-control" id="time" name="time" value={formValues.time} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Pickup Address Detail:</label>
              <textarea className="form-control" id="address" name="address" value={formValues.address} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="selectedCompany" className="form-label">Select Company</label>
              <select className="form-control" id="selectedCompany" name="selectedCompany" value={formValues.selectedCompany} onChange={handleInputChange}>
                <option value="">Select Company</option>
                <option value="TCS">TCS</option>
                <option value="M&P">M&PExpressLogistics</option>
                <option value="LeopardsCourier">LeopardsCourier</option>
                <option value="PakistanPost">PakistanPost</option>
                <option value="DHLPakistan">DHLPakistan</option>
                <option value="BlueEx">BlueEx</option>
                <option value="OverseasCourierService(OCS)">OverseasCourierService(OCS)</option>
                <option value="SpeedExPakistan">SpeedExPakistan</option>
                <option value="PakistanInternationalExpress(PIE)">PakistanInternationalExpress(PIE)</option>
                <option value="APLLogistics">APLLogistics</option>
                {/* Add other company options as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="rate" className="form-label"><bold>Rate</bold></label>
              <p>{Math.round(formValues.rate)}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
              <div>
                <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cash" required />
                <label htmlFor="cashOnDelivery">Cash on Delivery</label>
               </div>
             </div>
            <div className="text-center">
              <button type="submit" className="form-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Parcelform;
