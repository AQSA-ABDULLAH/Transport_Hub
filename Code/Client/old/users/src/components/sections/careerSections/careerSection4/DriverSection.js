import React from 'react';
import styles from "./driverSection.module.css";

export default function DriverSection() {
  return (
    <>
      <h4>How do we reimagine & improve lives of our Drivers.</h4>
      <div className={styles.container}>
        <div className={styles.image}>
          {/* Your image goes here */}
          <img src="your-image-source.jpg" alt="Your Image" />
        </div>
        <div className={styles.text }>
          {/* Your text goes here */}
          <p>Your text goes here.</p>
        </div>
      </div>
    </>
  )
}
