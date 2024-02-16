import React from "react";
import styles from "../../sections/contact/ContactStyle.module.css";
const SingleDetail = ({ icon, heading, text1, text2, index }) => {
  return (
    <article
      className={`${styles.singleDetail} ${index == 1 ? styles.bordered : ""}`}
    >
      <div className={styles.icon}>
        <img src={icon} alt="heading" srcset="" />
      </div>
      <div className={styles.detail}>
        <h2>{heading}</h2>
        <p>{text1}</p>
        {text2 && <p>{text2}</p>}
      </div>
    </article>
  );
};

export default SingleDetail;
