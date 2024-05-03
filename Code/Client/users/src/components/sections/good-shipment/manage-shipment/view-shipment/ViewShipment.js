import React, { useState, useEffect } from 'react';
import styles from './viewshipment.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ViewShipment() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/api/shipment/get-shipment")
            .then(res => {
                console.log(res.data);
                // Filter only items with status === "pending"
                const pendingShipments = res.data.data.filter(item => item.status === "pending");
                setProduct(pendingShipments);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            {product.map((item, index) => (
                <div className={styles.view_shipment} key={index}>
                    <h1>Quotes / QT5BYDLKH</h1>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Mode</h3>
                            <p>{item.selectedMode}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Pickup date</h3>
                            <p>{item.pickupDate}</p>
                        </div>
                    </div>

                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Pickup city</h3>
                            <p>{item.pickupDate}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Delivery city</h3>
                            <p>{item.pickupDate}</p>
                        </div>
                    </div>

                    <div className={styles.bid_deadline}>
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
            ))}

        </>
    )
}
