import React from 'react';
import styles from "./quotemode.module.css";

export default function Parcel({ handlingItems, setHandlingItems, itemWeight, 
  setItemWeight, length, setLength, width, setWidth, height, setHeight }) {
  return (
    <>
      <div className={styles.parcel_row}>
        <div>
          <label>Handling items</label>
          <input
            type='number'
            placeholder='e.g. 2'
            value={handlingItems}
            onChange={(e) => setHandlingItems(e.target.value)}
          />
        </div>
        <div>
          <label>Item weight</label>
          <input
            type='number'
            placeholder='lbs'
            value={itemWeight}
            onChange={(e) => setItemWeight(e.target.value)}
          />
        </div>

        <div className={styles.dimensions_row}>
          <div>
            <label>Length</label>
            <input
              type='number'
              placeholder='Inches'
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div>
            <label>Width</label>
            <input
              type='number'
              placeholder='Inches'
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div>
            <label>Height</label>
            <input
              type='number'
              placeholder='Inches'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}