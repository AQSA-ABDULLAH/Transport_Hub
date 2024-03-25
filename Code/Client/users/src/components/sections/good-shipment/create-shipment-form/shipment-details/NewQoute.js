import React from 'react';
import styles from './newqoute.module.css';

function NewQuote() {
  return (
    <div className={styles.newQuote}>
      <h2>New Quote</h2>

      <form>
        <div className={styles.row}>
          <div className={styles.mode}>
            <label htmlFor="mode">Mode</label>
            <select id="mode">
              <option value="LTL">LTL (Less than Truckload) Quotes</option>
              <option value="FTL">FTL (Full Truckload) Quotes</option>
              <option value="container">Container Quotes</option>
              <option value="FTL">Flatbed Quotes</option>
              <option value="FTL">Parcel Quotes</option>
            </select>
          </div>
          <div className={styles.pickupDate}>
            <label htmlFor="pickupDate">Pickup Date</label>
            <input type="date" id="pickupDate" />
          </div>
        </div>

        <div>
          <div className={styles.LTL}>
            LTL
          </div>
          <div className={styles.FTL}>
            FTL
          </div>
          <div className={styles.container}>
            fgdg
          </div>
          <div className={styles.flatbed}>
          flatbed
          </div>
          <div className={styles.Parcel}>
            fgdg
          </div>
        </div>

        <div className={styles.pickup}>
          <label htmlFor="pickup">Pickup</label>
          <div>
            <span>Add an address or facility</span>
            <button>+</button>
          </div>
        </div>
        <div className={styles.addStop}>
          <button>+</button>
          <span>Add Stop</span>
        </div>
        <div className={styles.delivery}>
          <label htmlFor="delivery">Delivery</label>
          <div>
            <span>Add an address or facility</span>
            <button>+</button>
          </div>
        </div>


        <div className={styles.moreDetails}>
          <h3>More Details (optional)</h3>
          <button>+</button>
        </div>
        <div className={styles.accessories}>
          <h3>Accessorials</h3>
          <button>+</button>
        </div>
      </form>
    </div>
  );
}

export default NewQuote;
