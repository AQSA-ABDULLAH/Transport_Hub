import React from 'react'
import ShipmentMain from '../../components/sections/good-shipment/shipment-landingpage/shipmentSection1/ShipmentMain'
import styles from "./shipmentstyle.module.css"

export default function ShipmentLandingPage() {
  return (
    <>
      <div className={styles.container}>
        <ShipmentMain landingVideo={"./assets/images/good-shipment/global.mp4"} />
      </div>
    </>
  )
}
