import React from 'react';
import styles from './manageshipments.module.css';
import ShipmentHeader from '../../../components/sections/header-medium/ShipmentHeader';
import ShipmentCard from '../../../components/sections/good-shipment/manage-shipment/ShipmentCard';

function ManageShipments() {
    return (
        <>
            <ShipmentHeader />
            <div className={styles.shipment_container}>
                <ShipmentCard/>
            </div>
        </>
    )
}

export default ManageShipments