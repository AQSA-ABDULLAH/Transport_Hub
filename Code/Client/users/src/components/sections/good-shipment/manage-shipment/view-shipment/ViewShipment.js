import React from 'react';
import styles from './viewshipment.module.css';

export default function ViewShipment() {
    return (
        <>
            <div className={styles.view_shipment}>
                <div className={styles.shipment_row}>
                    <div>Item 1</div>
                    <div class="arrow">→</div>
                    <div>Item 2</div>
                </div>

                <div className={styles.shipment_row}>
                    <div className={styles.shipment_content}>
                        <h3>Mode</h3>
                        <p>FTL</p>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Pickup date</h3>
                        <p>Apr 23, 2024</p>
                    </div>
                </div>

                <div className={styles.shipment_row}>
                    <div className={styles.shipment_content}>
                        <h3>Pickup address</h3>
                        <p>Apr 23, 2024</p>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Delivery address</h3>
                        <p>Apr 29, 2024</p>
                    </div>
                </div>

                <div className={styles.shipment_details}>
                    <h3>Bid deadline</h3>
                    <p>Apr 22, 2024 @ 4:59 AM</p>
                </div>

                <div className={styles.shipment_details}>
                    <h2>Shipment Details</h2>
                    <div>
                        <h3>Commodity name</h3>
                        <p>Buckets</p>
                    </div>
                </div>

                <div>
                    <h2>Pickup Details</h2>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>First name</h3>
                            <p>Aqsa</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Last name</h3>
                            <p>Abdullah</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Email</h3>
                            <p>aqsaabdullah38403@gmail.com</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Phone no</h3>
                            <p>0321-6023836</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>City</h3>
                            <p>Wah Cantt</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Zipcode</h3>
                            <p>40075</p>
                        </div>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Pickup address</h3>
                        <p>Sector 23 G / Quarter 12 Wah Cantt</p>
                    </div>
                </div>

                <div className={styles.shipment_content}>
                    <h2>Delivery Details</h2>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>First name</h3>
                            <p>Aqsa</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Last name</h3>
                            <p>Abdullah</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Email</h3>
                            <p>aqsaabdullah38403@gmail.com</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Phone no</h3>
                            <p>0321-6023836</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>City</h3>
                            <p>Wah Cantt</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Zipcode</h3>
                            <p>40075</p>
                        </div>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Delivery address</h3>
                        <p>Sector 23 G / Quarter 12 Wah Cantt</p>
                    </div>
                </div>
                <div className={styles.shipment_content}>
                    <h2>Stop Details</h2>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>First name</h3>
                            <p>Aqsa</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Last name</h3>
                            <p>Abdullah</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Email</h3>
                            <p>aqsaabdullah38403@gmail.com</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Phone no</h3>
                            <p>0321-6023836</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>City</h3>
                            <p>Wah Cantt</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Zipcode</h3>
                            <p>40075</p>
                        </div>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Stop address</h3>
                        <p>Sector 23 G / Quarter 12 Wah Cantt</p>
                    </div>
                </div>
            </div>
        </>
    )
}
