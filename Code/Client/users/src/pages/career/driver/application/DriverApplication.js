import React, { useEffect, useState } from 'react';
import styles from './driverapplication.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

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
                    <h4>Terms and Conditions</h4>
                    <hr />
                    <h4>CNIC Front Side</h4>
                    <hr />
                    <h4>CNIC Back Side</h4>
                    <hr />
                    <h4>Partner Photo</h4>
                    <hr />
                    <h4>Driving License Photo</h4>
                </div>

                <div className={styles.welcome_section}>
                    <button>Submit Application</button>
                </div>

            </div>
        </>
    );
}

