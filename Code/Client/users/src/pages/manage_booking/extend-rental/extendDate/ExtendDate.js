import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import style from "./addfare.module.css";

const ExtendDate = ({ onClose }) => {
    const [formData, setFormData] = useState({
        bidamount: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



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
                <h3>Extend Your rental Booking</h3>
                <p>Enter your new drop date and time</p>
                <input
                    type="date"
                    placeholder="RS 34"
                    id="bidamount"
                    name="bidamount"
                    onChange={handleChange}
                />
                <div className={style.fare_btn}>
                    <button className={style.cancel_button} onClick={onClose}>Cancel</button>
                    <button className={style.submit_button}>Submit</button>
                </div>
            </div>
        </>
    );
};

export default ExtendDate;