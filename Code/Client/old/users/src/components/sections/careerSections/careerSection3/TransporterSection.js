import React from 'react';
import styles from "./transporterSection.module.css";

export default function TransporterSection() {
  return (
    <>
      <h4>How do we reimagine & improve lives of our Transporters.</h4>
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
  );
}


