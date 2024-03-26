import React from "react";
import styles from "./classes.module.css";
import ShowClass from "../../atoms/class/ShowClass";
import AddClass from "../../../pages/addClass/AddClass";
const Classes = ({ data }) => {
  return (
    <>
      <section className={styles.classesContent}>
        <div className={styles.classesContainer}>
          <ShowClass data={data} />
        </div>
      </section>
    </>
  );
};

export default Classes;
