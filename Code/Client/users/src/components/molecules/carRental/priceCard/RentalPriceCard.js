import React, { useState, useEffect } from 'react';
import style from './rentalPriceCard.module.css';
import { TiTick } from "react-icons/ti";

export default function RentalPriceCard() {
  const [addDriver, setAddDriver] = useState();
  const [addInfantSeat, setAddInfantSeat] = useState();
  const [addToddlerSeat, setAddToddlerSeat] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetching car price data from localStorage
  const carData = JSON.parse(localStorage.getItem('selectedCar'));
  const filterData = JSON.parse(localStorage.getItem('filterData'));
  const basePrice = carData ? carData.totalPrice : 0;

  // Fetch add-on states from localStorage on component mount
  useEffect(() => {
    const storedAddons = JSON.parse(localStorage.getItem('carAddons'));
    if (storedAddons) {
      // Update state values only if they are present in localStorage
      if (storedAddons.hasOwnProperty('addDriver')) {
        setAddDriver(storedAddons.addDriver);
      }
      if (storedAddons.hasOwnProperty('addInfantSeat')) {
        setAddInfantSeat(storedAddons.addInfantSeat);
      }
      if (storedAddons.hasOwnProperty('addToddlerSeat')) {
        setAddToddlerSeat(storedAddons.addToddlerSeat);
      }
    }
  }, []);


  // Update total price when add-on states change
  useEffect(() => {
    const totalPrice = basePrice +
      (addDriver ? 450 : 0) +
      (addInfantSeat ? 320 : 0) +
      (addToddlerSeat ? 300 : 0);
    setTotalPrice(totalPrice);

    // Store add-on states and total price into local storage
    const addons = { addDriver, addInfantSeat, addToddlerSeat, totalPrice };
    localStorage.setItem('carAddons', JSON.stringify(addons));
  }, [basePrice, addDriver, addInfantSeat, addToddlerSeat]);

  return (
    <>
      <div className={style.price_card_contanier}>

        <div className={style.car_header}>
          <div>
            {carData && carData.carImage && (
              <img src={carData.carImage} alt="Car" />
            )}
          </div>
          <div>
            <h2>{carData ? carData.carTitle : "Car Title"}</h2>
            <span>{carData ? carData.carType : "Car Type"}</span>
          </div>
        </div>

        <div className={style.booking_time}>
          <div>
            <span>{filterData ? filterData.pickupDate : "Pickup Date"}</span> -
            <span> {filterData ? filterData.pickupTime : "Pickup Time"}</span>
            <p>{filterData ? filterData.pickupLocation : "Pickup Location"}</p>
          </div>
          <div>
            <span>{filterData ? filterData.dropDate : "Drop Date"}</span> -
            <span> {filterData ? filterData.dropTime : "Drop Time"}</span>
            <p>{filterData ? filterData.dropLocation : "Drop Location"}</p>
          </div>
        </div>

        <div className={style.body}>
          <p><TiTick className={style.icon} /> Included Third party insurance</p>
          <p><TiTick className={style.icon} /> Included Loss Damage Waiver up to AED 7,000.00 (approx. $1,906.11) financial responsibility</p>
          <p><TiTick className={style.icon} /> Drive up to 800 km, pay $1.08 per additional km</p>
        </div>

        <div className={style.price_container}>
          <div className={style.price}>
            <span>Base Rate</span>
            <span>RS {carData ? carData.price : "Car Price"}</span>
          </div>
          <div className={style.price}>
            <p>Price for {filterData ? filterData.totalDays : "Total Days"} days</p>
            <p>RS {carData ? carData.totalPrice : "Car Price"}</p>
          </div>
        </div>

      </div>
      
    </>
  )
}