import React from 'react';
import style from "./addOnsCard.module.css";

export default function AddOnsCard() {
  return (
    <>
      <div className={style.Container}>
        <div className={style.heading}>
          <h2>Select Upgrades and AddsOn for Your Trip</h2>
          <p>Enhance Your Car</p>
        </div>
        <div className={style.cards}>
          <div className={style.addOnCard}>
            <img src="" alt="icon"/>
            <div>
              <h3>Car driver</h3>
              <span>Need a driver to drive with car.</span>
            </div>
            <div className={style.price}>
              <p>RS 450 <span>Per Day</span></p>
              <button>Add</button>
            </div>
          </div>

          <div className={style.addOnCard}>
            <img src="" alt="icon" />
            <h3>Car Seat (Infant)</h3>
            <span>Choose an infant seat for a safer trip. Suitable for babies up to 12 months old.</span>
            <div className={style.price}>
              <p>RS 320 <span>Per Day</span></p>
              <button>Add</button>
            </div>
          </div>

          <div className={style.addOnCard}>
            <img src="" alt="icon" />
            <h3>Car Seat (Toddler)</h3>
            <span>Choose an toddler seat for a safer trip. Suitable for child up to 1 to 3 years old.</span>
            <div className={style.price}>
              <p>RS 300 <span>Per Day</span></p>
              <button>Add</button>
            </div>
          </div>
        </div>

    
      </div>
    </>
  )
}
