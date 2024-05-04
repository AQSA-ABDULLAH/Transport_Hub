import React, { useState, useEffect } from 'react';
import styles from './viewshipment.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function ViewShipment() {
    const navigate = useNavigate();

    const bookShipment = () => {
        console.log("Book Shipment");

        const pickupFacility = JSON.parse(localStorage.getItem('pickupFacility'));
        const deliveryFacility = JSON.parse(localStorage.getItem('deliveryFacility'));
        const stopFacility = JSON.parse(localStorage.getItem('stopFacility'));
        const qouteData = JSON.parse(localStorage.getItem('quoteData'));
        const ltlVehicleType = JSON.parse(localStorage.getItem('ltlVehicleType'));
        const ftlEquipmentData = JSON.parse(localStorage.getItem('ftlEquipmentData'));
        const flatbedData = JSON.parse(localStorage.getItem('flatbedData'));
        const parcelData = JSON.parse(localStorage.getItem('parcelData'));

        const formData = {
            ...pickupFacility,
            ...deliveryFacility,
            ...stopFacility,
            ...qouteData,
            ...ltlVehicleType,
            ...ftlEquipmentData,
            ...flatbedData,
            ...parcelData,
            status: "booked by admin"
        };
        console.log("sjdj")

        console.log("dsjda",parcelData)

        
        // Send combined data to server
        axios.post('http://localhost:5000/api/shipment/book-shipment', formData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                console.log(formData);
                Swal.fire('Success!', 'Your Shipment has been created successfully.', 'success')
                    .then((result) => {
                        if (result.isConfirmed) {
                            // localStorage.removeItem('pickupFacility');
                            // localStorage.removeItem('deliveryFacility');
                            // localStorage.removeItem('stopFacility');
                            // localStorage.removeItem('quoteData');
                            // localStorage.removeItem('parcelData'); 
                        }
                    });
            })
            .catch(error => {
                console.error('Failed to send data:', error.response ? error.response.data : error.message);
            });
    };



    // INVITE TRANSPORTER TO BID
    const inviteTransporterToBid = () => {
        console.log("Invite transporter to bid");

        const pickupFacility = JSON.parse(localStorage.getItem('pickupFacility'));
        const deliveryFacility = JSON.parse(localStorage.getItem('deliveryFacility'));
        const stopFacility = JSON.parse(localStorage.getItem('stopFacility'));
        const qouteData = JSON.parse(localStorage.getItem('quoteData'));
        const ltlVehicleType = JSON.parse(localStorage.getItem('ltlVehicleType'));
        const ftlEquipmentData = JSON.parse(localStorage.getItem('ftlEquipmentData'));
        const flatbedData = JSON.parse(localStorage.getItem('flatbedData'));
        const parcelData = JSON.parse(localStorage.getItem('parcelData'));

        const formData = {
            ...pickupFacility,
            ...deliveryFacility,
            ...stopFacility,
            ...qouteData,
            ...ltlVehicleType,
            ...ftlEquipmentData,
            ...flatbedData,
            ...parcelData, // Include parcel data here
            status: "booked by admin"
        };
        console.log("sjdj")

        console.log("dsjda",parcelData)

        
        // Send combined data to server
        axios.post('http://localhost:5000/api/shipment/book-shipment', formData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                console.log(formData);
                Swal.fire('Success!', 'Your Shipment has been created successfully.', 'success')
                    .then((result) => {
                        if (result.isConfirmed) {
                            // localStorage.removeItem('pickupFacility');
                            // localStorage.removeItem('deliveryFacility');
                            // localStorage.removeItem('stopFacility');
                            // localStorage.removeItem('quoteData');
                            // localStorage.removeItem('parcelData'); // Remove parcelData from localStorage after use
                        }
                    });
            })
            .catch(error => {
                console.error('Failed to send data:', error.response ? error.response.data : error.message);
            });

    };

    return (
        <>
            <div className={styles.view_shipment}>
                <h1>Quotes / QT5BYDLKH</h1>
                <div className={styles.shipment_row}>
                    <div className={styles.shipment_content}>
                        <h3>Mode</h3>
                        <p>fgdgd</p>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Pickup date</h3>
                        <p>fdgd</p>
                    </div>
                </div>

                <div className={styles.shipment_row}>
                    <div className={styles.shipment_content}>
                        <h3>Pickup city</h3>
                        <p>dgfdg</p>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Delivery city</h3>
                        <p>fdgd</p>
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


            <div className={styles.footer_conatainer}>
                <button type="button" onClick={bookShipment}>Book Shipment</button>
                <button type='button' onClick={inviteTransporterToBid}>Invite Transporter To Bid</button>
            </div>


        </>
    )
}
