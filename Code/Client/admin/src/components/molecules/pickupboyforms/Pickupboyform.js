import React, { useState } from "react";
import style from "./pickupboy.module.css";
import Showpickupboys from "./Showpickupboys";

const Pickupboyform = () => {
  return (
    <>
      <div className={style.container} style={{ height: window.innerHeight }}>
        <div className={style.headingContainer}>
          <h2 className={style.heading}>PickupBoy Management</h2>
        </div>
        <div className={style.message}>
          <div className={style.cardRow}>
            <Showpickupboys/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pickupboyform;







