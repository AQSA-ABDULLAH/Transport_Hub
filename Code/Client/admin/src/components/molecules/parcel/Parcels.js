import React from "react";
import style from "./parcels.module.css";
import ShowParcels from "./ShowParcels";

const Parcels = () => {
  return (
    <>
      <div className={style.container} style={{ height: window.innerHeight }}>
        <div className={style.headingContainer}>
          <h2 className={style.heading}>Parcel Management</h2>
        </div>
        <div className={style.message}>
          <div className={style.cardRow}>
            <ShowParcels/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parcels;
