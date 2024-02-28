import React from "react";
import styles from "./Pricing.module.css";
const Pricing = ({ list }) => {
  return (
    <>
      <h1>Pricing</h1>
      {list.map((item) => {
        return (
          <>
            <div className={styles.listContainer}>
              <div className={styles.list}>
                <p>{item.duration}</p>
                <p>-${item.price}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Pricing;
