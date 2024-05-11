import React, { useState, useEffect } from 'react';
import style from "../rental_reservation/managerental.module.css";
import Sidebar from '../../../components/molecules/manage-booking/sidebar/Sidebar';
import TopHeader from '../../../components/molecules/manage-booking/booking-header/TopHeader';

function RentalDetails() {
    const [openSidebar, setOpenSidebar] = useState(false);



    // Retrieve rentalData from local storage
    const rentalData = JSON.parse(localStorage.getItem('rentalData'));
    const _id = rentalData._id;
    const firstName = rentalData.firstName;


    return (
        <>
            <TopHeader
                openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}
            />
            {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />}
            <section className={style.viewrental_container}>

                <>
                    <div className={style.rental_header}>
                        <h2>Your Rental Details</h2>
                    </div>
                    <h4>Confirmation: {_id}</h4>
                    <div>
                        <h3>Vehicle</h3>
                        <p>First Name: {firstName}</p>

                    </div>
                </>

            </section>

        </>
    )
}

export default RentalDetails;
