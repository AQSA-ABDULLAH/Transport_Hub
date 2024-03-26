import React from 'react';
import ShipmentMain from '../../components/sections/good-shipment/shipment-landingpage/shipmentSection1/ShipmentMain';
import styles from "./shipmentstyle.module.css";
import ShipmentBenefits from '../../components/sections/good-shipment/shipment-landingpage/shipmentSection2/ShipmentBenefits';

export default function ShipmentLandingPage() {
  return (
    <>
      <div className={styles.container}>
        <ShipmentMain landingVideo={"./assets/images/good-shipment/global.mp4"} />
        <ShipmentBenefits image1={"./assets/images/good-shipment/image1.png"}
          image2={"./assets/images/good-shipment/image2.png"}
          image3={"./assets/images/good-shipment/image3.png"}
          image4={"./assets/images/good-shipment/image4.png"}
          image5={"./assets/images/good-shipment/image5.png"}
          image6={"./assets/images/good-shipment/image6.png"}
          image7={"./assets/images/good-shipment/image7.png"}
        />
      </div>
    </>
  );
}

