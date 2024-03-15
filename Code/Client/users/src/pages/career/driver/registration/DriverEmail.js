import React from 'react';
import SideSection from '../../../../components/sections/career/sidesection/SideSection';
import styles from "./drivermail.module.css";

export default function DriverEmail() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.sideSection}>
          <SideSection />
        </div>
        <div className={styles.mainSection}>MAIN SECTION</div>
      </section>
    </>
  );
}

