import React from 'react';
import styles from '../shipmentstyle.module.css'
import ShipmentHeader from '../../../components/sections/header-medium/ShipmentHeader';
import NewQoute from '../../../components/sections/good-shipment/create-shipment-form/shipment-details/NewQoute';
import QouteFooter from '../../../components/molecules/create-shipment/qoute-footer/QouteFooter';

function ShipmentForm() {
  return (
    <>
      <ShipmentHeader />
      <div className={styles.quote_container}>
        <section className={styles.quote_section}>
          <div className={styles.quote_form}>
            <NewQoute />
          </div>
          <QouteFooter />
        </section>
        <section>
          <div className={styles.quote_form}>
            sjfhsj
          </div>
          <QouteFooter />
        </section>
      </div>
    </>
  )
}

export default ShipmentForm