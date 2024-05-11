import React, { useState, useEffect } from 'react';
import style from "./managerental.module.css";
import Sidebar from '../../../components/molecules/manage-booking/sidebar/Sidebar';
import TopHeader from '../../../components/molecules/manage-booking/booking-header/TopHeader';

function ViewRental() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [rentalData, setRentalData] = useState(null);

    useEffect(() => {
        const storedRentalData = localStorage.getItem('rentalData');
        if (storedRentalData) {
            const parsedRentalData = JSON.parse(storedRentalData);
            setRentalData(parsedRentalData);
        }
    }, []);

    const handleCancelReservation = () => {
        if (rentalData) {
            // Update the status to 'canceled'
            const updatedRentalData = { ...rentalData, status: 'canceled' };
            // Store the updated data back in local storage
            localStorage.setItem('rentalData', JSON.stringify(updatedRentalData));
            // Update state to reflect the change
            setRentalData(updatedRentalData);
        }
    };

    const _id = rentalData ? rentalData._id : null;

    return (
        <>
            <TopHeader
                openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}
            />
            {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />}
            <section className={style.viewrental_container}>
                <div className={style.rental_header}>
                    <h2>Your Rental Details</h2>
                    <button onClick={handleCancelReservation}>Cancel Reservation</button>
                </div>
                <h4>Confirmation: {_id}</h4>
                <div>
                    <h3>Vehicle</h3>
                    <p>First Name: {rentalData?.firstName}</p>
                    <p>Last Name: {rentalData?.lastName}</p>
                    <p>Email: {rentalData?.email}</p>
                </div>
            </section>
        </>
    );
}

export default ViewRental;


