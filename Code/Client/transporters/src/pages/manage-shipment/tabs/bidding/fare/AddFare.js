import React, { useEffect, useState } from "react";
import axios from 'axios';
import style from "./addfare.module.css";

const BidShipment = ({ onClose, shipmentId }) => {



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
                <input type="number" placeholder="RS 34" />
                <div className={style.fare_btn}>
                    <button className={style.cancel_button} onClick={onClose}>Cancle</button>
                    <button className={style.submit_button}>Submit</button>
                </div>
            </div>

        </>
    );
};

export default BidShipment;