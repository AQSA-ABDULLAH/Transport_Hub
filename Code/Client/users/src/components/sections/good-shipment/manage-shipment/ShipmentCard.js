import React from 'react';
import styles from "./shipmentcard.module.css";
import Button from "../../../atoms/button/Button";

export default function () {
    return (
        <>
            <div className={styles.shipment_card}>
                <div className={styles.shipment_card_header}>
                    <div className={styles.card_heading}>
                        <h3>Shipments</h3>
                        <p>Manage your ongoing and past shipments easily</p>
                    </div>
                    <div className={styles.create_shipment}>
                        <Button
                            bgColor={"#7E22CE"}
                            btnText="New shipment"
                            radius={"6px"}
                            size={"14px"}
                        />
                    </div>
                </div>

                <div className={styles.shipment_overview}>
                    <h4>Overview</h4>
                    <div className={styles.overview_cards}>
                        <div className={styles.boxes}>
                            0
                            <p>Quoting</p>
                        </div>
                        <div className={styles.boxes}>
                            0
                            <p>Booked</p>
                        </div>
                        <div className={styles.boxes}>
                            0
                            <p>Pending Shedule</p>
                        </div>
                        <div className={styles.boxes}>
                            0
                            <p>Ongoing</p>
                        </div>
                        <div className={styles.boxes}>
                            0
                            <p>Pending Charges</p>
                        </div>
                        <div className={styles.boxes}>
                            0
                            <p>Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
