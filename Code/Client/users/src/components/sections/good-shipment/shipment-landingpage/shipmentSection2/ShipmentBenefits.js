import React from 'react';
import styles from "./shipmentbenefits.module.css";

function ShipmentBenefits({image1, image2, image3, image4, image5, image6, image7}) {
    return (
        <>
            <div className={styles.container}>
                <h2>Discover the benefits of digital shipping services</h2>
                <div className={styles.content_container}>
                    <div className={styles.image_container}>
                        <img src={image1} />
                        <span>Instant Capacity</span>
                    </div>

                    <div className={styles.image_container}>
                        <img src={image2} />
                        <span>Best Service and Price</span>
                    </div>

                    <div className={styles.image_container}>
                        <img src={image3} />
                        <span>Carrier Network</span>
                    </div>

                    <div className={styles.image_container}>
                        <img src={image4} />
                        <span>Operational Efficiency</span>
                    </div>

                    <div className={styles.image_container}>
                        <img src={image5} />
                        <span>Centralized Freight Process</span>
                    </div>

                    <div className={styles.image_container}>
                        <img src={image6} />
                        <span>Data Driven Transportation Planning</span>
                    </div>

                    <div className={styles.image_container}>
                        <img src={image7} />
                        <span>Dynamic Pricing</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShipmentBenefits