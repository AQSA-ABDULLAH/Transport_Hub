import React, { useState } from "react";
import styles from "./carCard.module.css";
import DetailCard from "./detailCard"; // Assuming the file name is DetailCard.jsx

const CarCard = (props) => {
  const [isDetailCardVisible, setDetailCardVisible] = useState(false);

  const openDetailCard = () => {
    setDetailCardVisible(true);
  };

  const closeDetailCard = () => {
    setDetailCardVisible(false);
  };

  return (
    <div className={styles.container}>
      <h2>{props.heading}</h2>
      <span className={styles.type}>{props.carType}</span>
      <img src={props.imageUrl} alt="Car" className={styles.image} />
      <div className={styles.detail}>
        <p>{props.seats}</p>
        <p>{props.transmission}</p>
        <p>{props.bags}</p>
        <p>{props.Incl}</p>
        <p onClick={openDetailCard} className={styles.moreLink}>
          More
        </p>
      </div>
      {isDetailCardVisible && <DetailCard {...props} onClose={closeDetailCard} />}
    </div>
  );
};

export default CarCard;



