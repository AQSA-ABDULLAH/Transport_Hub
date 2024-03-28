import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./shipmentcard.module.css";
import Button from "../../../atoms/button/Button";
import { useNavigate } from 'react-router-dom';

export default function ShipmentCard() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/create_shipment_form');
    };
    return (
        <>
            <div className={styles.shipment_card}>
                <div className={styles.shipment_card_header}>
                    <div className={styles.card_heading}>
                        <h3>Shipments</h3>
                        <p>Manage your ongoing and past shipments easily</p>
                    </div>
                    <div className={styles.create_shipment}>


                        <Link to="/create_shipment_form">
                            <Button
                                bgColor={"#7E22CE"}
                                btnText="New shipment"
                                radius={"6px"}
                                size={"14px"}
                                onClick={handleRedirect}
                            />
                        </Link>
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
