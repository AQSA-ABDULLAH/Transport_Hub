import React from 'react';
import styles from './driverapplication.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

export default function DriverApplication() {
    return (
        <>
            <MediumHeader />
            <div className={styles.container}>
                <div className={styles.welcome_section}>
                    <h2>Welcome, Abdullah</h2>
                    <p>Here's what you need to do to set up your account.</p>
                </div>

                <div className={styles.application_form}>
                    <h4>Terms and Conditions</h4>
                    <h4>CNIC Front Side</h4>
                    <h4>CNIC Back Side</h4>
                    <h4>Partner Photo</h4>
                    <h4>Driving License Photo</h4>
                </div>
            </div>
        </>
    )
}
