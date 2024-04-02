import React from 'react';
import styles from "./quotemode.module.css";

export default function LTLForm() {

  return (
    <>
      <div className={styles.row}>

        <div>
          <label htmlFor="equipment">Vechical Type</label>
          <select id="equipment">
            <option value="select_option" disabled selected>Select Vechical Type</option>
            <option value="mazda">Mazda</option>
            <option value="shehzore">Shehzore</option>
            <option value="pickup">Pickup</option>
          </select>
        </div>

      
      </div>
    </>
  )
}
