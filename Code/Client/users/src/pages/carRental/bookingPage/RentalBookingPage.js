import React from 'react';
import RentalPriceCard from '../../../components/molecules/carRental/priceCard/RentalPriceCard';
import style from "./rentalBookingPage.module.css";
import BookingFormNotice from '../../../components/atoms/customers-notice/BookingFormNotice';
import RentalBookingForm from "../../../components/sections/car-rental/booking-section/RentalBookingForm"


export default function RentalBookingPage() {
  return (
    <>
      <div className={style.container}>
        <div className={style.bookingContainer}>
          <BookingFormNotice />
          <RentalBookingForm />
        </div>
        <div className={style.priceContainer}>
          <RentalPriceCard />
        </div>
      </div>
    </>
  )
}


