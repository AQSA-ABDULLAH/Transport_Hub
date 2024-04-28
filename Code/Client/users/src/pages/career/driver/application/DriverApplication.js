import React, { useEffect, useState } from 'react';
import styles from './driverapplication.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';
import { Link } from 'react-router-dom';

export default function DriverApplication() {
    const [driverFirstName, setDriverFirstName] = useState('');

    useEffect(() => {
        // Fetch the driver's first name from wherever it's stored
        const firstName = localStorage.getItem('driverFirstName');
        setDriverFirstName(firstName);
    }, []);

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
                    <button>Submit Application</button>
                </div>

            </div>
        </>
    );
}

