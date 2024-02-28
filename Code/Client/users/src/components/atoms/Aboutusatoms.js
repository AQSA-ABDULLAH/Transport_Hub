import React from "react";
import style from "./Aboutusatoms.module.css";
const Aboutusatoms = ({ icon, heading, text }) => {
  return (
    <div className={style.container}>
      <img className={style.icon} src={icon} alt={heading} />
      <h5 className={style.heading}>{heading}</h5>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default Aboutusatoms;
