import React, { useState } from 'react';
import style from './rentalPriceCard.module.css';
import Button from '../../../atoms/button/Button';
import CarFeaturesModel from '../../../../pages/carRental/carFeatureModel/CarFeaturesModel';
import { TiTick } from "react-icons/ti";

export default function RentalPriceCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fetching price data from localStorage
  const carData = JSON.parse(localStorage.getItem('selectedCar'));
  const totalPrice = carData ? carData.price : 0; // Default value if data is not available

  return ( 
    <>
      <div className={style.contanier}>
        <div className={style.card}>
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
            <p>RS {totalPrice}</p> {/* Displaying total price */}
          </div>
          <div className={style.btn}>
            <Button primary btnText="Continue" btnClick={openModal} />
          </div>
        </div>
      </div >
      {isModalOpen && (
        <CarFeaturesModel onClose={closeModal} />
      )}
    </>
  )
}
