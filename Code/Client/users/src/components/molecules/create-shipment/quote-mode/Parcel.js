import React from 'react';
import styles from "./quotemode.module.css";

export default function Parcel() {
  return (
    <>
      <div className={styles.parcel_row}>
        <div>
          <label>Handling items</label>
          <input type='number' placeholder='e.g. 2' />
        </div>
        <div>
          <label>Item weight</label>
          <input type='number' placeholder='lbs' />
        </div>

        <div className={styles.dimensions_row}>
          <div>
            <label>Length</label>
            <input type='number' placeholder='Inches' />
          </div>
          <div>
            <label>Width</label>
            <input type='number' placeholder='Inches' />
          </div>
          <div>
            <label>Height</label>
            <input type='number' placeholder='Inches' />
          </div>
        </div>
      </div>
    </>
  )
}
