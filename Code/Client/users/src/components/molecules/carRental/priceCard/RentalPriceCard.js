import React, { useState, useEffect } from 'react';
import style from './rentalPriceCard.module.css';
import Button from '../../../atoms/button/Button';
import CarFeaturesModel from '../../../../pages/car-rental/carFeatureModel/CarFeaturesModel';
import { TiTick } from "react-icons/ti";

export default function RentalPriceCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addDriver, setAddDriver] = useState();
  const [addInfantSeat, setAddInfantSeat] = useState();
  const [addToddlerSeat, setAddToddlerSeat] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetching car price data from localStorage
  const carData = JSON.parse(localStorage.getItem('selectedCar'));
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
  }, [basePrice, addDriver, addInfantSeat, addToddlerSeat]); // Watch for changes in these state variables


  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={style.price_card_contanier}>
        <div className={style.header}>
          <h2>
            {carData ? carData.carTitle : "Car Title"}
          </h2>
          <span>{carData ? carData.carType : "Car Type"}</span>
        </div>
        <div className={style.body}>
          <p><TiTick className={style.icon} /> Included Third party insurance</p>
          <p><TiTick className={style.icon} /> Included Loss Damage Waiver up to AED 7,000.00 (approx. $1,906.11) financial responsibility</p>
          <p><TiTick className={style.icon} /> Drive up to 800 km, pay $1.08 per additional km</p>
          <p>Drivers must have held their driver's license for at least 1 year(s)</p>
        </div>
        <div className={style.price}>
          <p>Total</p>
          <p>RS {totalPrice}</p>
        </div >
        <div className={style.btn}>
          <Button primary btnText="Continue" btnClick={openModal} />
        </div>
      </div>
      {isModalOpen && (
        <CarFeaturesModel onClose={closeModal} />
      )}
    </>
  )
}