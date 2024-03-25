import React from 'react';
import styles from './ShipmentHeader.module.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function ShipmentHeader() {
    return (
        <>
            <div className={styles.shipment_header}>
                <Link to="/">Notification</Link>
                <Link to="/">Help</Link>
                <Link to="">Username</Link>
            </div>
        </>
    );
}

