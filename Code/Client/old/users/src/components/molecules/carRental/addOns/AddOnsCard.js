import React from 'react';
import style from "./addOnsCard.module.css";

export default function AddOnsCard() {
  return (
    <>
      <div className={style.Container}>
        <div className={style.heading}>
          <h2 className={style.h2}>Select Upgrades and AddsOn for Your Trip</h2>
          <p className={style.p}>Enhance Your Car</p>
        </div>
        <div className={style.cards}>
          <div className={style.addOnCard}>
            <img src="" alt="icon"/>
            <div>
              <h3 className={style.cardTitle}>Car Seat (Infant)</h3>
              <p>Choose an infant seat for a safer trip. Suitable for babies up to 12 months old.</p>
            </div>
            <div className={style.price}>
              <p>RS 320 <span>Per Day</span></p>
              <button>Add</button>
            </div>
          </div>

          <div className={style.addOnCard}>
            <img src="" alt="icon" />
            <h3 className={style.cardTitle}>Car Seat (Infant)</h3>
            <p>Choose an infant seat for a safer trip. Suitable for babies up to 12 months old.</p>
            <div className={style.price}>
              <p>RS 320 <span>Per Day</span></p>
              <button>Add</button>
            </div>
          </div>

          <div className={style.addOnCard}>
            <img src="" alt="icon" />
            <h3 className={style.cardTitle}>Car Seat (Infant)</h3>
            <p>Choose an infant seat for a safer trip. Suitable for babies up to 12 months old.</p>
            <div className={style.price}>
              <p>RS 320 <span>Per Day</span></p>
              <button>Add</button>
            </div>
          </div>
        </div>

        <div className={style.cards}>
          <div className={style.addOnCard}>
            <img src="" alt="icon"/>
            <div>
              <h3 className={style.cardTitle}>Car Seat (Infant)</h3>
              <p>Choose an infant seat for a safer trip. Suitable for babies up to 12 months old.</p>
            </div>
            <div className={style.price}>
              <p>RS 320 <span>Per Day</span></p>
              <button>Add</button>
            </div>
          </div>

          <div className={style.addOnCard}>
            <img src="" alt="icon" />
            <h3 className={style.cardTitle}>Car Seat (Infant)</h3>
            <p>Choose an infant seat for a safer trip. Suitable for babies up to 12 months old.</p>
            <div className={style.price}>
              <p>RS 320 <span>Per Day</span></p>
              <button>Add</button>
            </div>
          </div>

          <div className={style.addOnCard}>
            <img src="" alt="icon" />
            <h3 className={style.cardTitle}>Car Seat (Infant)</h3>
            <p>Choose an infant seat for a safer trip. Suitable for babies up to 12 months old.</p>
            <div className={style.price}>
              <p>RS 320 <span>Per Day</span></p>
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
