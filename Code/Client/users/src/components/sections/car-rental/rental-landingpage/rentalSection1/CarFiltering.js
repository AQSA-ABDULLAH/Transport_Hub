import React, { useEffect, useState } from "react";
import axios from 'axios';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
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

  // Store state variables into local storage
  useEffect(() => {
    const filterData = {
      pickupLocation,
      dropLocation,
      pickupDate: pickupDate ? pickupDate.toString() : null,
      pickupTime: pickupTime ? pickupTime.toString() : null,
      dropDate: dropDate ? dropDate.toString() : null,
      dropTime: dropTime ? dropTime.toString() : null,
      totalDays
    };
    localStorage.setItem('filterData', JSON.stringify(filterData));
  }, [pickupLocation, dropLocation, pickupDate, pickupTime, dropDate, dropTime, totalDays]);

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

  // Calculate total days whenever there is a change in pickupDate or dropDate
  useEffect(() => {
    if (pickupDate && dropDate) {
      const pickupMoment = moment(pickupDate);
      const dropMoment = moment(dropDate);
      const days = dropMoment.diff(pickupMoment, "days");
      console.log("Total days:", days);
      setTotalDays(days); // Set total days state
    } else {
      setTotalDays("");
    }
  }, [pickupDate, dropDate]);

  const handleFilter = () => {
    // Navigate to the next page
    navigate('/ViewCars');
  }

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
              onChange={(date, dateString) => setPickupDate(dateString)} // Extract date string from the event
            />
          </div>
  
          <div>
            <TimePicker
              className={styles.datepicker}
              format='HH:mm'
              onChange={(time, timeString) => setPickupTime(timeString)}
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
              onChange={(date, dateString) => setDropDate(dateString)} // Extract date string from the event
            />
          </div>
          
          <div>
            <TimePicker
              className={styles.datepicker}
              format='HH:mm'
              onChange={(time, timeString) => setDropTime(timeString)}
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

