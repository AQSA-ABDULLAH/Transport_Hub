import React from "react";
import styles from "../../sections/contact/ContactStyle.module.css";
import SingleDetail from "../../atoms/single-detail/SingleDetail";
import { detailsData } from "./detailsdata";
const Details = () => {
  return (
    <>
      <section className={styles.details}>
        <div className={styles.detailsContainer}>
          {detailsData.map((detail, index) => {
            return <SingleDetail key={index} {...detail} index={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Details;
