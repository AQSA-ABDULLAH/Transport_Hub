import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carFiltering.module.css"; // Create a new CSS file for custom styles

const CarFiltering = ({ onFilter, onFilterApplied }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState(null);
  const [dropDate, setDropDate] = useState(null);
  const navigate = useNavigate();

  const handleFilter = () => {
    const filterCriteria = {
      pickupLocation,
      dropLocation,
      pickupDate,
      dropDate,
    };
    navigate('/ViewCars');
    // const handleFilter = () => {
    //   const filterCriteria = {
    //     pickupLocation,
    //     // ... (other filter criteria)
    //   };
    //   onFilterApplied(filterCriteria);
    //   // Trigger the callback when the filter is applied
    //   navigate('/ExtendedDetailPage');
    // };
  };
  const currentDate = new Date();

  return (
    <div className="d-flex justify-content-center align-items-center m-3">
      <div
        className="container-fluid border"
        style={{
          width: "80%",
          backgroundColor: "white",
          padding: "30px",
        }}
      >
        <div className="row">
          <div className="col mb-3">
            <label className="form-label">Pickup Location:</label>
            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="form-select custom-select"
            >
              <option value="">Select Pickup Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>
          <div className="col mb-3">
            <label className="form-label">Return Location:</label>
            <select
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              className="form-select custom-select"
            >
              <option value="">Select Return Location</option>
              <option value="locationA">Location A</option>
              <option value="locationB">Location B</option>
              <option value="locationC">Location C</option>
            </select>
          </div>
          <div className="col mb-3">
            <label className="form-label">Pickup Date:</label>
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              className="form-control custom-date-picker"
              placeholderText="Click to select a date"
              minDate={currentDate}
            />
          </div>
          <div className="col mb-3">
            <label className="form-label">Return Date:</label>
            <DatePicker
              selected={dropDate}
              onChange={(date) => setDropDate(date)}
              className="form-control custom-date-picker"
              placeholderText="Click to select a date"
              minDate={currentDate}
            />
          </div>
          <div className="col mb-3 d-flex align-items-center justify-content-center">
            <button
              className="btn "
              onClick={handleFilter} 
              style={{
                backgroundColor: "rgb(126, 34, 206)",
                color: "white",
                borderRadius: "2px",
              }}
            >
              Show Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFiltering;
