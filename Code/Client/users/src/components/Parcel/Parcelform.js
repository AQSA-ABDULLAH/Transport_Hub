// CustomerForm.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./CustomerForm.css";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import parcelpickupimg2 from "./parcelpickupimg2.jpeg";

const Parcelform = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    pickupLocation: "", weight: "", parcelType: "", phone: "", email: "", time: "", address: "",
    selectedCompany: "", rate: ""
  });
let name,value;
  const handleInputChange = (e) => {
    console.log(e);
    name = e.target.name;
    value=e.target.value;
    
  setFormValues((prevState) => ({
    ...prevState,
    [name]: value,
  
  }));
    // let rate = formValues.rate;

    // if (name === "weight" && formValues.selectedCompany) {
    //   // If weight and selectedCompany are both present, calculate the rate
    //   rate = calculateRate(formValues.selectedCompany, value);
    // }
    // console.log("Input Change", name, value, "Rate", rate);

   
  };
  const Parcel_form = async (e) => {
    e.preventDefault();
    

    try {
      const {
        pickupLocation,
        weight,
        parcelType,
        phone,
        email,
        time,
        address,
        selectedCompany
      } = formValues;
      const rate = weight * 100;
      const response = await axios.post("https://transport-hub-tawny.vercel.app/create", {pickupLocation,
      weight,
      parcelType,
      phone,
      email,
      time,
      address,
      selectedCompany,
      rate
      });

      // Assuming that the response format is JSON
      const data = response.data;

      window.alert("Request sent");
      console.log("Request sent", data);
      navigate('/parcelform');
    } catch (error) {
      window.alert("Error sending the form");
      console.error("Error sending the form", error);
  window.alert("Error sending the form: " + error.message);
    }
  };

  // ... (existing code)

// const Parcel_form=async(e)=>{
// e.preventDefault();
// const{pickupLocation, weight, parcelType, phone, email, time, address,selectedCompany,rate}=formValues;
// try {
//   const res = await fetch("/create", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       pickupLocation,
//       weight,
//       parcelType,
//       phone,
//       email,
//       time,
//       address,
//       selectedCompany,
//       rate
//     }),
//   });

//   if (!res.ok) {
//     throw new Error(`HTTP error! Status: ${res.status}`);
//   }

//   const data = await res.json();
//   window.alert("Request sent");
//   console.log("Request sent", data);
//   navigate('/parcelform');
// } catch (error) {
//   window.alert("Error sending the form");
//   console.error("Error sending the form", error);
// }

// }

  return (
    <>
      <div className="upper">
        <span><p>Send your parcel from your home to anywhere at your own convenience.
          Send your parcel from your home to anywhere at your own convenience.Send your parcel from your home to anywhere at your own convenienceSend your parcel from your home to anywhere at your own convenienceSend your parcel from your home to anywhere at your own convenienceSend your parcel from your home to anywhere at your own convenience</p></span>
        <span>  <img src={parcelpickupimg2} alt="Example" /></span>
      </div>
      <div className="d-flex justify-content-center align-items-center form-container" >
        <div className="w-50 p-4 rounded hello" >
          <h2 className="text-center mb-4">Parcel Pickup Service</h2>
          <form method="POST">
            <div className="mb-3">
              <label htmlFor="pickupLocation" className="form-label">Pickup Location:(City)</label>
              <input type="text" className="form-control" id="pickupLocation" name="pickupLocation" value={formValues.pickupLocation} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="weight" className="form-label">Weight (in kg):</label>
              <input type="number" className="form-control" id="weight" name="weight" value={formValues.weight} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="parcelType" className="form-label">Parcel Type:</label>
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
              <label htmlFor="phone" className="form-label">Phone:</label>
              <input type="tel" className="form-control" id="phone" placeholder="03343353333" maxLength={11} name="phone" value={formValues.phone} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="abc@gmail.com" value={formValues.email} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">Preferred Time:</label>
              <input type="time" className="form-control" id="time" name="time" value={formValues.time} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address:</label>
              <textarea className="form-control" id="address" name="address" value={formValues.address} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="selectedCompany" className="form-label">Select Company:</label>
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
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="rate" className="form-label">Rate:</label>
              <p>{formValues.weight*100}</p>
            </div>
            <div className="text-center">
            <input type="submit" name="parcel-form" onClick={Parcel_form} className="form-submit" value="parcel-form"/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Parcelform;
