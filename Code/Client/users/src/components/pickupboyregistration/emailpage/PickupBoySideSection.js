import React from 'react';
import styles from "./PickupBoysidesection.module.css";

export default function SideSection() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src='./assets/logo/logodark.png' alt="LOGO"/>
        </div>
        <div className={styles.heading}>
            <h2>Kickstart your career with Transport Hub</h2>
            <p>Customize our templates by swapping in your own footage, 
                changing the background music and text or adding a logo.</p>
        </div>
        <div className={styles.imagecontainer}>
            <img src='./assets/images/career/bgimage2.png' alt=""/>
        </div>
    </div>
    </>
  )
}
