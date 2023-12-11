import React from "react";
import styles from "./carCard.module.css";

const DetailCard = (props) => {
  return (
    <div className={styles.modal}>
      <p>{props.color}</p>
      <p>{props.fyelType}</p>
      <p>{props.engineType}</p>
      <p>{props.price}</p>
      <button onClick={props.onClose} className={styles.closeButton}>
        Close
      </button>
    </div>
  );
};

export default DetailCard;

