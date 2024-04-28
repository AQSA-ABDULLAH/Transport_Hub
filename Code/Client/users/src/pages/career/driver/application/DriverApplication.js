import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './driverapplication.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';
import { Link } from 'react-router-dom';

export default function DriverApplication() {
    const navigate = useNavigate();

    // const driver_Email = JSON.parse(localStorage.getItem('driverEmail'));
    // const driverEmail = driver_Email.driverEmail;

    const driver_name = JSON.parse(localStorage.getItem('driver_name'));
    const driverFirstName = driver_name.firstName;
    const driverLastName = driver_name.lastName;

    // const driverLocation = JSON.parse(localStorage.getItem('driverLocation'));
    // const driver_location = driverLocation.driverLocation;

    // const driverVehicleType = JSON.parse(localStorage.getItem('driverVehicleType'));
    // const vechicalType = driverVehicleType.driverVehicleType;

    // const driver_terms_condition = JSON.parse(localStorage.getItem('driver_terms_condition'));
    // const termsAndCondition = driver_terms_condition.driver_terms_condition;

    // const driver_photo = JSON.parse(localStorage.getItem('driver_photo'));
    // const profilePhoto = driver_photo.driver_photo;

    // const driver_Cnic_front = JSON.parse(localStorage.getItem('driver_Cnic_front'));
    // const cnicFrontSide = driver_Cnic_front.driver_Cnic_front;

    // const driver_Cnic_back = JSON.parse(localStorage.getItem('driver_Cnic_back'));
    // const cnicBackSide = driver_Cnic_back.driver_Cnic_back;

    // const driver_driving_license = JSON.parse(localStorage.getItem('driver_driving_license'));
    // const drivingLicense = driver_driving_license.driver_driving_license;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Combine all booking details
        const combinedData = {
            driverFirstName: driverFirstName,
            driverLastName: driverLastName,
            // driverLocation: driver_location,
            // driverVehicleType: vechicalType,
            // driver_terms_condition: termsAndCondition,
            // driver_photo: profilePhoto,
            // driver_Cnic_front: cnicFrontSide,
            // driver_Cnic_back: cnicBackSide,
            // driver_driving_license: drivingLicense,
        };

        // Send combined data to server
        // axios.post(`http://localhost:5000/api/driver/updateDriver/${driverEmail}`, combinedData)
        //     .then(response => {
        //         console.log('Data sent successfully:', response.data);
        //         console.log(combinedData)
        //         navigate("/");
        //     })
        //     .catch(error => {
        //         console.error('Failed to send data:', error.response ? error.response.data : error.message);
        //     });
    };

    return ( 
        <>
            <MediumHeader />
            <div className={styles.application_container}>
                <div className={styles.welcome_section}>
                    <h1>Welcome, {driverFirstName}</h1>
                    <p>Here's what you need to do to set up your account.</p>
                </div>

                <div className={styles.application_form}>
                    <Link to={"/driver_terms_and_conditions"}><h4>Terms and Conditions</h4></Link>
                    <hr />
                    <Link to={"/driver_photo"}><h4>Partner Photo</h4></Link>
                    <hr />
                    <Link to={"/upload_driver_cnic_front_side"}><h4>Upload CNIC Front Side</h4></Link>
                    <hr />
                    <Link to={"/upload_driver_cnic_back_side"}><h4>Upload CNIC Back Side</h4></Link>
                    <hr />
                    <Link to={"/driver_driving_license"}><h4>Driving License Photo</h4></Link>
                </div>

                <div className={styles.welcome_section}>
                    <button onClick={handleSubmit}>Submit Application</button>
                </div>

            </div>
        </>
    );
}

