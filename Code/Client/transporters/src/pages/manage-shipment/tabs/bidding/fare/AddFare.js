import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import style from "./addfare.module.css";
import { getUserIdFromToken } from "../../../../../redux/util/AxiosHeader";

const BidShipment = ({ onClose, shipmentId }) => {
    const userId = getUserIdFromToken();
    const [formData, setFormData] = useState({
        bidamount: '',
        transporter: userId 
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // UPDATE SHIPMENT STATUS
    const addFare = (shipmentId) => {
        const { bidamount, transporter } = formData;
        const bidData = {
            bids: [
                { transporter, bidamount: parseInt(bidamount) }
            ]
        };

        axios.patch(`https://transport-hub-tawny.vercel.app/api/shipment/update-shipment/${shipmentId}`, bidData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                console.log(formData)
                Swal.fire('Success!', 'Your Fare has been Added. You will receive notification if you win bidding.', 'success');
                onClose();
            })
            .catch(error => {
                console.error('Failed to send data:', error.response ? error.response.data : error.message);
            });
    }

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
            <div className={style.fare_container}>
                <h3>Offer Your Fare</h3>
                <input
                    type="text"
                    placeholder="RS 34"
                    id="bidamount"
                    name="bidamount"
                    onChange={handleChange}
                />
                <div className={style.fare_btn}>
                    <button className={style.cancel_button} onClick={onClose}>Cancel</button>
                    <button className={style.submit_button} onClick={() => addFare(shipmentId)}>Submit</button>
                </div>
            </div>
        </>
    );
};

export default BidShipment;

