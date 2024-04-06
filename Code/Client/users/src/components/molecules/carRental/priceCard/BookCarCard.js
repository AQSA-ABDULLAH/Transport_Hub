import React from 'react';
import style from './rentalPriceCard.module.css';
import Button from '../../../atoms/button/Button';
import { useNavigate } from 'react-router-dom';

export default function BookCarCard() {
  const carData = JSON.parse(localStorage.getItem('selectedCar'));
  const navigate = useNavigate(); // Initialize navigate function from react-router-dom

  const handleRedirect = () => {
    navigate("/RentalBooking"); // Redirect to the desired page
  };

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
          <div className={style.price}>
            <p>Total</p>
            <p>RS {carData ? carData.price : "Car Price"}</p>
          </div>
          <div className={style.btn}>
            <Button primary btnText="Continue" btnClick={handleRedirect} />
          </div>
        </div>
      </div >
    </>
  )
}
