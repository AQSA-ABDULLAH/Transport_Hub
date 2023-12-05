import React from "react";
import { FiEdit } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import styles from "./aboutcard.module.css";
const AboutCard = (prop) => {
  return (
    <div className={styles.container}>
      <h2>{prop.heading}</h2>
      <p>{prop.text}</p>
      <h2 className={styles.Qouteby}>{prop.author}</h2>
      <div className={styles.iconsContainer}>
        <div className={styles.editIcon}>
          <FiEdit />
          <p>Edit this content</p>
        </div>
        <div className={styles.previewIcon}>
          <AiFillEye />
          <p>preview</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;