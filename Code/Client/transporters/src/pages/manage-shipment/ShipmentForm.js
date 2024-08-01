import React, { useEffect, useState } from "react";
import axios from 'axios';
import style from './shipmentform.module.css';

const ShipmentForm = ({ onClose, shipmentId }) => {
    const [data, setData] = useState([]);


    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };


    useEffect(() => {
        // Fetch trip details based on tripId and populate the form
        const fetchshipmentDetails = async () => {
            try {
                axios.get(`https://transport-hub-tawny.vercel.app/api/shipment/get-shipment/${shipmentId}`)
                    .then(res => {
                        console.log(res.data);
                        setData(res.data.data);
                    })
            } catch (error) {
                console.error('Error fetching shipment details:', error);
            }
        };

        fetchshipmentDetails();
    }, [shipmentId]);



    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: '999',
        backdropFilter: 'blur(1px)',
    };


    return (
        <>

            <div style={overlayStyle}></div>
            <div className={style.popupForm}>
                <div className={style.shipment_header}>
                    <h1>Quotes / {data._id}</h1>
                    <div className={style.closeButton} onClick={onClose}>
                        &times;
                    </div>
                </div>

                <div className={style.shipment_details}>
                    <h2>Quote Details:</h2>
                    <div className={style.shipment_row}>
                        <div className={style.shipment_content}>
                            <h3>Commodity Name</h3>
                            <p>{data.commodityName}</p>
                        </div>
                        <div className={style.shipment_content}>
                            <h3>Selected Mode</h3>
                            <p>{data.selectedMode}</p>
                        </div>
                    </div>
                    <div className={style.shipment_row}>
                        <div className={style.shipment_content}>
                            <h3>Pickup Date</h3>
                            <p>{formatDate(data.pickupDate)}</p>
                        </div>
                        <div className={style.bid_deadline}>
                            <h3>Bid deadline</h3>
                            <p>Apr 22, 2024 @ 4:59 AM</p>
                        </div>
                    </div>



                    {data.selectedMode === "LTL" && (
                        <div className={style.shipment_row}>
                            <div className={style.shipment_content}>
                                <h3>Vechical type</h3>
                                <p>{data.ltlVehicleType}</p>
                            </div>
                        </div>
                    )}

                    {data.selectedMode === "FTL" && (
                        <div className={style.shipment_row}>
                            <div className={style.shipment_content}>
                                <h3> Equipment </h3>
                                <p>{data && data.equipment}</p>
                            </div>
                            <div className={style.shipment_content}>
                                <h3>Length</h3>
                                <p>{data && data.length}</p>
                            </div>
                            <div className={style.shipment_content}>
                                <h3> Temperature </h3>
                                <p>{data && data.temperature ? data.temperature : 'Not available'}</p>
                            </div>

                        </div>
                    )}

                    {data.selectedMode === "flatbed" && (
                        <div className={style.shipment_row}>
                            <div className={style.shipment_content}>
                                <h3> Dimensions </h3>
                                <p>{data && data.dimensions}</p>
                            </div>
                            <div className={style.shipment_content}>
                                <h3>Trap</h3>
                                <p>{data && data.trap}</p>
                            </div>
                            <div className={style.shipment_content}>
                                <h3> Trap Size </h3>
                                <p>{data && data.trapSize ? data.trapSize : 'Not available'}</p>
                            </div>
                        </div>
                    )}

                    {data.selectedMode === "parcel" && (
                        <div>
                            <div className={style.shipment_row}>
                                <div className={style.shipment_content}>
                                    <h3> Handling items</h3>
                                    <p>{data && data.handlingItems} items</p>
                                </div>
                                <div className={style.shipment_content}>
                                    <h3>Item weight</h3>
                                    <p>{data && data.itemWeight} lbs</p>
                                </div>
                            </div>

                            <div className={style.shipment_row}>
                                <div className={style.shipment_content}>
                                    <h3> Length </h3>
                                    <p>{data && data.length} inches</p>
                                </div>
                                <div className={style.shipment_content}>
                                    <h3> Width </h3>
                                    <p>{data && data.width} inches</p>
                                </div>
                                <div className={style.shipment_content}>
                                    <h3> Height </h3>
                                    <p>{data && data.height} inches</p>
                                </div>
                            </div>
                        </div>

                    )}

                    {data.moreDetails != null && data.moreDetails !== "" && (
                        <div className={style.shipment_content}>
                            <h3>More Details</h3>
                            <p>{data.moreDetails}</p>
                        </div>

                    )}
                </div>




                <div className={style.shipment_details}>
                    <h2>Pickup Details:</h2>
                    <div className={style.shipment_row}>
                        <div className={style.shipment_content}>
                            <h3>First name</h3>
                            <p>{data.pickupFirstName}</p>
                        </div>
                        <div className={style.shipment_content}>
                            <h3>Last name</h3>
                            <p>{data.pickupLastName}</p>
                        </div>
                    </div>
                    <div className={style.shipment_row}>
                        <div className={style.shipment_content}>
                            <h3>Email</h3>
                            <p>{data.pickupEmail}</p>
                        </div>
                        <div className={style.shipment_content}>
                            <h3>Phone no</h3>
                            <p>{data.pickupPhone}</p>
                        </div>
                    </div>
                    <div className={style.shipment_row}>
                        <div className={style.shipment_content}>
                            <h3>City</h3>
                            <p>{data.pickupCity}</p>
                        </div>
                        <div className={style.shipment_content}>
                            <h3>Zipcode</h3>
                            <p>{data.pickupZipcode}</p>
                        </div>
                    </div>
                    <div className={style.shipment_content}>
                        <h3>Pickup address</h3>
                        <p>{data.pickupAddress}</p>
                    </div>
                </div>



                <div className={style.shipment_details}>
                    <h2>Delivery Details:</h2>
                    <div className={style.shipment_row}>
                        <div className={style.shipment_content}>
                            <h3>First name</h3>
                            <p>{data.deliveryFirstName}</p>
                        </div>
                        <div className={style.shipment_content}>
                            <h3>Last name</h3>
                            <p>{data.deliveryLastName}</p>
                        </div>
                    </div>
                    <div className={style.shipment_row}>
                        <div className={style.shipment_content}>
                            <h3>Email</h3>
                            <p>{data.deliveryEmail}</p>
                        </div>
                        <div className={style.shipment_content}>
                            <h3>Phone no</h3>
                            <p>{data.deliveryPhone}</p>
                        </div>
                    </div>
                    <div className={style.shipment_row}>
                        <div className={style.shipment_content}>
                            <h3>City</h3>
                            <p>{data.deliveryCity}</p>
                        </div>
                        <div className={style.shipment_content}>
                            <h3>Zipcode</h3>
                            <p>{data.deliveryZipcode}</p>
                        </div>
                    </div>
                    <div className={style.shipment_content}>
                        <h3>Delivery address</h3>
                        <p>{data.deliveryAddress}</p>
                    </div>
                </div>

                {data.stopType != null && data.stopType !== "" && (
                    <div className={style.shipment_details}>
                        <h2>Stop Details:</h2>
                        <div className={style.shipment_row}>
                            <div className={style.shipment_content}>
                                <h3>First name</h3>
                                <p>{data.stopFirstName}</p>
                            </div>
                            <div className={style.shipment_content}>
                                <h3>Last name</h3>
                                <p>{data.stopLastName}</p>
                            </div>
                        </div>
                        <div className={style.shipment_row}>
                            <div className={style.shipment_content}>
                                <h3>Email</h3>
                                <p>{data.stopEmail}</p>
                            </div>
                            <div className={style.shipment_content}>
                                <h3>Phone no</h3>
                                <p>{data.stopPhone}</p>
                            </div>
                        </div>
                        <div className={style.shipment_row}>
                            <div className={style.shipment_content}>
                                <h3>City</h3>
                                <p>{data.stopCity}</p>
                            </div>
                            <div className={style.shipment_content}>
                                <h3>Zipcode</h3>
                                <p>{data.stopZipcode}</p>
                            </div>
                        </div>
                        <div className={style.shipment_content}>
                            <h3>Stop address</h3>
                            <p>{data.stopAddress}</p>
                        </div>
                    </div>
                )}

            </div>

        </>
    );
};

export default ShipmentForm;
