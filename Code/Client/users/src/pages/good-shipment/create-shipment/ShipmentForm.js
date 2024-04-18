import React from 'react';
import styles from '../shipmentstyle.module.css'
import ShipmentHeader from '../../../components/sections/header-medium/ShipmentHeader';
import NewQoute from '../../../components/sections/good-shipment/create-shipment-form/shipment-details/NewQoute';
import ViewShipment from '../../../components/sections/good-shipment/manage-shipment/view-shipment/ViewShipment';

function ShipmentForm() {
  return (
    <>
      <ShipmentHeader />
      <div className={styles.quote_container}>
        <section className={styles.quote_section}>
          <div className={styles.quote_form}>
            <NewQoute />
          </div>
        </section>
        <section>
          <div>
            <ViewShipment/>
          </div>
        </section>
      </div>
    </>
  )
}

export default ShipmentForm