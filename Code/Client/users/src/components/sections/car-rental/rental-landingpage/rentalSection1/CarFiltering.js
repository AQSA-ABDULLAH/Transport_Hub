import React, { useEffect, useState } from "react";
import axios from 'axios';
import { DatePicker, TimePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from "./carrentalstyle.module.css";

const CarFiltering = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [dropDate, setDropDate] = useState(null);
  const [dropTime, setDropTime] = useState(null);
  const [totalDays, setTotalDays] = useState("");
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const handleFilter = () => {
    // Calculate total days
    if (pickupDate && dropDate) {
      const days = dropDate.diff(pickupDate, "days");
      console.log("Total days:", days);
      setTotalDays(days); // Set total days state
    } else {
      setTotalDays("");
    }
  
    // Create an object to store all state variables
    const filterData = {
      pickupLocation,
      dropLocation,
      pickupDate: pickupDate ? pickupDate.toString() : null,
      pickupTime: pickupTime ? pickupTime.toString() : null,
      dropDate: dropDate ? dropDate.toString() : null,
      dropTime: dropTime ? dropTime.toString() : null,
      totalDays // Include totalDays in the object
    };
  
    // Store state variables into local storage
    localStorage.setItem('filterData', JSON.stringify(filterData));
  
    // Navigate to the next page
    navigate('/ViewCars');
  }
  

  useEffect(() => {
    axios.get("http://localhost:5000/api/zone/get-zone")
      .then(res => {
        console.log(res.data);
        setProduct(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.filter_container}>
      <div className={styles.search_container}>
        <h2>Search for Cars</h2>
        <p>Find the best and most affordable cars</p>
        <div className={styles.search}>
          <div>
            <select
              id="pickupLocation"
              name="pickupLocation"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="" disabled selected>Select location</option>
              {product.map((item, index) =>
                <option key={index} value={item.zone}>{item.zone}</option>
              )}
            </select>
          </div>

          <div>
            <DatePicker
              className={styles.datepicker}
              value={pickupDate}
              onChange={(date) => setPickupDate(date)}
            />
          </div>
          <div>
            <TimePicker
              className={styles.datepicker}
              format='HH:mm'
              onChange={(time) => setPickupTime(time)}
            />
          </div>
          <div>
            <select
              id="dropLocation"
              name="dropLocation"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
            >
              <option value="" disabled selected>Select location</option>
              {product.map((item, index) =>
                <option key={index} value={item.zone}>{item.zone}</option>
              )}
            </select>
          </div>
          <div>
            <DatePicker
              className={styles.datepicker}
              value={dropDate}
              onChange={(date) => setDropDate(date)}
            />
          </div>
          <div>
            <TimePicker
              className={styles.datepicker}
              format='HH:mm'
              onChange={(time) => setDropTime(time)}
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
