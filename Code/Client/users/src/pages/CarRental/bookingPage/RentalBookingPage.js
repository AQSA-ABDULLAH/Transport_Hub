import React from 'react';
import Navbar from "../../../components/atoms/Navbar/Navbar";
import RentalPriceCard from '../../../components/molecules/carRental/priceCard/RentalPriceCard';
import style from "./rentalBookingPage.module.css";
import BookingFormNotice from '../../../components/atoms/CustomersNotice/BookingFormNotice';


export default function RentalBookingPage() {
  return (
    <>
            <Navbar />
            <div className={style.container}>
                <div className={style.bookingContainer}>
                  <div className={style.Notice}><BookingFormNotice/></div>
                </div>
                <div className={style.priceContainer}>
                    <RentalPriceCard />
                </div>
            </div>
        </>
  )
}


