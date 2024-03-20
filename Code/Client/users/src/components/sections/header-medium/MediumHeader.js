import React from "react";
import styles from "./MediumHeader.module.css";
const MediumHeader = () => {
  return (
    <section className={styles.mediumHeader}>
      <img src=".\assets\logo\logolight.png" alt="medium_header" />
      <button>HELP</button>
    </section>
  );
};

export default MediumHeader;
