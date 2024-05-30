import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import styles from "./rental.module.css"

// import { getUserIdFromToken } from "../../../../redux/util/AxiosHeader";

export default function RentalBooking() {
    const [product, setProduct] = useState([]);
    const [showShipmentForm, setShowShipmentForm] = useState(false);
    const [shipmentId, setShipmentId] = useState(null);
    // const userId = getUserIdFromToken();

    // Function to handle edit click
    const handleEditClick = (id) => {
        setShowShipmentForm(true);
        setShipmentId(id);
        console.log("show")
        // console.log(userId);
    };

    const handleClose = () => {
        setShowShipmentForm(false);
        setShipmentId(null);
    };

    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // GET CAR DATA
    useEffect(() => {
        axios.get("http://localhost:5000/api/rental-booking/get-book-rental")
            .then(res => {
                console.log(res.data);
                setProduct(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <div className={styles.shipment_container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Car Image</th>
                        <th>Car Title</th>
                        <th>Pickup Location</th>
                        <th>Drop Location</th>
                        <th>Pickup Date</th>
                        <th>Drop Date</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.shipmentID}>{item._id} <FaEdit /></td>

                            <td>ghdhfdg</td>
                            <td>dsfs</td>
                            <td>{item.pickupLocation}</td>
                            <td>{item.dropLocation}</td>
                            <td>{formatDate(item.pickupDate)}</td>
                            <td>{formatDate(item.dropDate)}</td>
                            <td>{item.totalPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
