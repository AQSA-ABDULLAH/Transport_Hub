import React from "react";
import styles from "./carCard.module.css";
const carCard = (prop) => {
  return ( 
    <div className={styles.container}>
      <h2>{prop.heading}</h2>
      <p>{prop.carType}</p>
      <p>{prop.seats}</p>
      <p>{prop.transmission}</p>
      <p>{prop.bags}</p>
      <p>{prop.Incl}</p>
      <p>{prop.color}</p>
      <p>{prop.fyelType}</p>
      <p>{prop.engineType}</p>
      <p>{prop.price}</p>
    </div>
  );
};

export default carCard;