import React, { useState, useEffect } from 'react';
import styles from './viewshipment.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function ViewShipment() {
    const navigate = useNavigate();

    const pickupFacility = JSON.parse(localStorage.getItem('pickupFacility'));
    const deliveryFacility = JSON.parse(localStorage.getItem('deliveryFacility'));
    const stopFacility = JSON.parse(localStorage.getItem('stopFacility'));
    const qouteData = JSON.parse(localStorage.getItem('quoteData'));
    const ltlVehicleType = JSON.parse(localStorage.getItem('ltlVehicleType'));
    const ftlEquipmentData = JSON.parse(localStorage.getItem('ftlEquipmentData'));
    const flatbedData = JSON.parse(localStorage.getItem('flatbedData'));
    const parcelData = JSON.parse(localStorage.getItem('parcelData'));


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
            ...pickupFacility, ...deliveryFacility, ...stopFacility, ...qouteData, ...ltlVehicleType,
            ...ftlEquipmentData, ...flatbedData, ...parcelData, status: "booked by admin"
        };


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
            ...parcelData,
            status: "active bidding"
        };


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

    return (
        <>
            <div className={styles.view_shipment}>
                <h1>Quotes / QT5BYDLKH</h1>
                <div className={styles.shipment_details}>
                    <h2>Quote Details:</h2>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Commodity Name</h3>
                            <p>{qouteData.commodityName}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Selected Mode</h3>
                            <p>{qouteData.selectedMode}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Pickup Date</h3>
                            <p>{qouteData.pickupDate}</p>
                        </div>
                        <div className={styles.bid_deadline}>
                            <h3>Bid deadline</h3>
                            <p>Apr 22, 2024 @ 4:59 AM</p>
                        </div>
                    </div>

                    {qouteData.selectedMode === "LTL" && (
                        <div className={styles.shipment_row}>
                            <div className={styles.shipment_content}>
                                <h3>Vechical type</h3>
                                <p>Buckets</p>
                            </div>
                        </div>
                    )}
                    {qouteData.selectedMode === "FTL" && (
                        <div className={styles.shipment_row}>
                            <div className={styles.shipment_content}>
                                <h3> Equipment </h3>
                                <p>Buckets</p>
                            </div>
                            <div className={styles.shipment_content}>
                                <h3>Length</h3>
                                <p>fdgd</p>
                            </div>
                            <div className={styles.shipment_content}>
                                <h3> Temperature </h3>
                                <p>fdgd</p>
                            </div>
                        </div>

                    )}

                    {qouteData.selectedMode === "Flatbed" && (

                        <div className={styles.shipment_row}>
                            <div className={styles.shipment_content}>
                                <h3> Dimensions </h3>
                                <p>Buckets</p>
                            </div>
                            <div className={styles.shipment_content}>
                                <h3>Trap</h3>
                                <p>fdgd</p>
                            </div>
                            <div className={styles.shipment_content}>
                                <h3> Trap Size </h3>
                                <p>fdgd</p>
                            </div>
                        </div>
                    )}

                    {qouteData.selectedMode === "Parcel" && (
                        <div className={styles.shipment_row}>
                            <div className={styles.shipment_content}>
                                <h3> Handling items</h3>
                                <p>Buckets</p>
                            </div>
                            <div className={styles.shipment_content}>
                                <h3>Item weight</h3>
                                <p>fdgd</p>
                            </div>
                            <div className={styles.shipment_content}>
                                <h3> Length </h3>
                                <p>fdgd</p>
                            </div>
                            <div className={styles.shipment_content}>
                                <h3> Width </h3>
                                <p>fdgd</p>
                            </div>
                            <div className={styles.shipment_content}>
                                <h3> Height </h3>
                                <p>fdgd</p>
                            </div>
                        </div>
                    )}

                    <div className={styles.shipment_content}>
                        <h3>More Details</h3>
                        <p>{qouteData.moreDetails}</p>
                    </div>
                </div>

                <div className={styles.shipment_details}>
                    <h2>Pickup Details:</h2>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>First name</h3>
                            <p>{pickupFacility.pickupFirstName}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Last name</h3>
                            <p>{pickupFacility.pickupLastName}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Email</h3>
                            <p>{pickupFacility.pickupEmail}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Phone no</h3>
                            <p>{pickupFacility.pickupPhone}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>City</h3>
                            <p>{pickupFacility.pickupCity}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Zipcode</h3>
                            <p>{pickupFacility.pickupZipcode}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Pickup address</h3>
                        <p>{pickupFacility.pickupAddress}</p>
                    </div>
                </div>


                <div className={styles.shipment_details}>
                    <h2>Delivery Details:</h2>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>First name</h3>
                            <p>{deliveryFacility.deliveryFirstName}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Last name</h3>
                            <p>{deliveryFacility.deliveryLastName}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Email</h3>
                            <p>{deliveryFacility.deliveryEmail}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Phone no</h3>
                            <p>{deliveryFacility.deliveryPhone}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>City</h3>
                            <p>{deliveryFacility.deliveryCity}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Zipcode</h3>
                            <p>{deliveryFacility.deliveryZipcode}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Delivery address</h3>
                        <p>{deliveryFacility.deliveryAddress}</p>
                    </div>
                </div>



                <div className={styles.shipment_details}>
                    <h2>Stop Details:</h2>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>First name</h3>
                            <p>{stopFacility.stopFirstName}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Last name</h3>
                            <p>{stopFacility.stopLastName}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>Email</h3>
                            <p>{stopFacility.stopEmail}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Phone no</h3>
                            <p>{stopFacility.stopPhone}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_row}>
                        <div className={styles.shipment_content}>
                            <h3>City</h3>
                            <p>{stopFacility.stopCity}</p>
                        </div>
                        <div className={styles.shipment_content}>
                            <h3>Zipcode</h3>
                            <p>{stopFacility.stopZipcode}</p>
                        </div>
                    </div>
                    <div className={styles.shipment_content}>
                        <h3>Stop address</h3>
                        <p>{stopFacility.stopAddress}</p>
                    </div>
                </div>

            </div>

            <div className={styles.footer_container}>
                <button type="button" onClick={bookShipment}>Book Shipment</button>
                <button type="button" onClick={inviteTransporterToBid}>Invite Transporter To Bid</button>
            </div>
        </>
    )
}

