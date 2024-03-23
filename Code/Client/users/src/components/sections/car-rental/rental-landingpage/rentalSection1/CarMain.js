import React from "react";
import CarFiltering from "./CarFiltering";
import styles from "./carrentalstyle.module.css";
function CarMain({ onFilterApplied, car1Image}) {

  return (
    <>
      <div className={styles.first_section}>
        <CarFiltering onFilterApplied={onFilterApplied} />
        <div className={styles.CarMain}>
        <img src={car1Image} alt="Car 1"/>
        </div>
      </div>
    </>
  );
}
export default CarMain;