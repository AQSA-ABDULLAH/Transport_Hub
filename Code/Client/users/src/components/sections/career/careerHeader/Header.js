import React from "react";
import styles from "./header.module.css";
const Header = ({ bgImage }) => {
  return (
    <section className={styles.mediumHeader}>
      <img src={bgImage} alt="career_header" />
    </section>
  );
};

export default Header;