import React, { useState } from 'react';
import styles from './newqoute.module.css';
import LTLForm from '../../../../molecules/create-shipment/quote-mode/LTLForm';
import FTLForm from '../../../../molecules/create-shipment/quote-mode/FTLForm';
import Flatbed from '../../../../molecules/create-shipment/quote-mode/Flatbed';
import Parcel from '../../../../molecules/create-shipment/quote-mode/Parcel';

function NewQuote() {
  const [selectedMode, setSelectedMode] = useState();
  const [pickupDate, setPickupDate] = useState('');
  const [isAddStopOpen, setIsAddStopOpen] = useState(false);

  // Handle mode change event
  const handleModeChange = (event) => {
    const mode = event.target.value;
    setSelectedMode(mode);
  };

  return (
    <div className={styles.newQuote}>
      <h2>New Quote</h2>
      <form>
        <div className={styles.row}>
          <div>
            <label htmlFor="commodity_name">Commodity name</label>
            <input
              type="text"
              placeholder='Item description'
            />
          </div>
          <div>
            <label htmlFor="mode">Mode</label>
            <select id="mode" value={selectedMode} onChange={handleModeChange}>
              <option value="select_option" disabled selected>Select Mode</option>
              <option value="LTL">LTL (Less than Truckload)</option>
              <option value="FTL">FTL (Full Truckload)</option>
              <option value="flatbed">Flatbed Quotes</option>
              <option value="parcel">Parcel Quotes</option>
            </select>
          </div>
          <div>
            <label htmlFor="pickupDate">Pickup Date</label>
            <input
              type="date"
              id="pickupDate"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
        </div>

        <div>
          {selectedMode === 'LTL' && <LTLForm />}
          {selectedMode === 'FTL' && <FTLForm />}
          {selectedMode === 'flatbed' && <Flatbed />}
          {selectedMode === 'parcel' && <Parcel />}
        </div>

        <div className={styles.pickup}>
          <label htmlFor="pickup">Pickup</label>
          <div className={styles.input_div}>
            <span>Add an address or facility</span>
            <button>+</button>
          </div>
        </div>

        {isAddStopOpen && (
          <div className={styles.stop}>
            <label htmlFor="pickup">Stop</label>
            <div className={styles.stop_input}>
              <div className={styles.input_div}>
                <span>Add an address or facility</span>
                <button>+</button>
              </div>
              <select id="stop_type">
                <option value="select_option" disabled selected>Stop Type</option>
                <option value="pickup">Pick up</option>
                <option value="delivery">Delivery</option>
              </select>
              <button className={styles.close_stop}><img src="/assets/images/good-shipment/delete.png" alt="Delete"
                onClick={() => setIsAddStopOpen(false)} /></button>
            </div>
          </div>
        )}

        <div className={styles.addStop}>
          {/* Conditionally render the button based on isAddStopOpen */}
          {!isAddStopOpen && (
            <button type="button" onClick={() => setIsAddStopOpen(true)}> + Add Stop
            </button>
          )}
        </div>


        <div className={styles.delivery}>
          <label htmlFor="delivery">Delivery</label>
          <div className={styles.input_div}>
            <span>Add an address or facility</span>
            <button>+</button>
          </div>
        </div>

        <div>
          <label>More Details (optional)</label>
          <textarea
            placeholder="More Details (optional)"
            rows={3}
            className={styles.input_div}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default NewQuote;