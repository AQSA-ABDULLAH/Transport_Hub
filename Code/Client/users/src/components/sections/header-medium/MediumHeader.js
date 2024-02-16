import React from "react";
import styles from "./MediumHeader.module.css";
import { useLocation } from "react-router-dom";
const MediumHeader = ({ bgImage }) => {
  const location = useLocation();
  const currentLocation = location.pathname;
  console.log(currentLocation);
  return (
    <section className={styles.mediumHeader}>
      <img src={bgImage} alt="medium_header" />
      <h1 className={styles.header}>{currentLocation.substring(1)}</h1>
    </section>
  );
};

export default MediumHeader;
