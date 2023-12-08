import React from 'react';
import styles from "./transporterSection.module.css";
import Button from "../../../atoms/buttons/Button";

const TransporterSection = ({ transportImage }) => {
  return (
    <>
      <h4>How do we reimagine & improve lives of our Transporters.</h4>
      <div className={styles.container}>
        <div className={styles.image}>
          <section className={styles.mediumHeader}>
            <img src={transportImage} alt="Transport Image" />
            <div className={styles.overlay}>
              <Button
                btnText="Become a Transporter"
                primary
                size="20px"
                width="200px"
                btnClick={() => console.log("Button Clicked")}  // Add your logic for button click
              />
            </div>
          </section>
        </div>
        <div className={styles.text}>
          <p>Your text goes here.</p>
        </div>
      </div>
    </>
  );
}

export default TransporterSection;

