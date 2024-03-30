import React from 'react';
import styles from "./shipmentmain.module.css";
import { useNavigate } from 'react-router-dom';

function ShipmentMain({ landingVideo }) {

    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('/manage_shipments'); 
    };
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.text_area}>
                        <h2>Simplifying Road Freight, The Fastest Growing Digital Platform in Pakistan.</h2>
                        <p>Trusted. Reliable. Advance transportation. Making freight movement efficient and improving the lives of drivers</p>
                        <button onClick={handleRedirect}>Start Shippement</button>
                    </section>
                    <section className={styles.landing_video}>
                        <video src={landingVideo} alt="shipment_video" autoPlay loop />
                    </section>
                </div>

                <div className={styles.city_list}>
                    <h2>Serving 35+ cities in Pakistan</h2>
                    <div className={styles.list}>
                        <p>Lahore</p>
                        <p>Karachi</p>
                        <p>Faisalabad</p>
                        <p>Rawalpindi</p>
                        <p>Islamabad</p>
                        <p>Multan</p>
                        <p>Hyderabad</p>
                        <p>Quetta</p>
                        <p>Gujrat</p>
                        <p>Okara</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShipmentMain;
