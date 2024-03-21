import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import styles from "./carrentalstyle.module.css"; // Create a new CSS file for custom styles

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
    <div className={styles.filter_container}>

      <div className={styles.search_container}>
        <h2>Search for Cars</h2>
        <p>Find the best and most affordable cars</p>

        <div className={styles.search}>

          <div>
            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>

          <div>
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              className={styles.datepicker}
              placeholderText="Click to select a date"
              minDate={currentDate}
            />
          </div>

          <div>
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              className={styles.datepicker}
              placeholderText="Click to select a date"
              minDate={currentDate}
            />
          </div>

          <div>
            <select
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
            >
              <option value="locationA">Location A</option>
              <option value="locationB">Location B</option>
              <option value="locationC">Location C</option>
            </select>
          </div>

          <div className="col mb-3">
            <DatePicker
              selected={dropDate}
              onChange={(date) => setDropDate(date)}
              className={styles.datepicker}
              placeholderText="Click to select a date"
              minDate={currentDate}
            />
          </div>

          <div>
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              className={styles.datepicker}
              placeholderText="Click to select a date"
              minDate={currentDate}
            />
          </div>

          <div className={styles.search_button}>
            <button onClick={handleFilter}>
              Show Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFiltering;
