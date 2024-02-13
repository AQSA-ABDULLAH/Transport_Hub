import React from 'react';
import Navbar from "../../../components/atoms/Navbar/Navbar";
import RentalPriceCard from '../../../components/molecules/carRental/priceCard/RentalPriceCard';
import style from "./rentalBookingPage.module.css";
import BookingFormNotice from '../../../components/atoms/CustomersNotice/BookingFormNotice';
import RentalBookingForm from "../../../components/sections/carRentalSections/BookingSection/RentalBookingForm"


export default function RentalBookingPage() {
  return (
    <>
      <Navbar />
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


