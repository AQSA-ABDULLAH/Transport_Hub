import React, { useState } from 'react';
import styles from './newqoute.module.css';
import Container from '../../../../molecules/create-shipment/quote-mode/Container';
import LTLForm from '../../../../molecules/create-shipment/quote-mode/LTLForm';
import FTLForm from '../../../../molecules/create-shipment/quote-mode/FTLForm';
import Flatbed from '../../../../molecules/create-shipment/quote-mode/Flatbed';
import Parcel from '../../../../molecules/create-shipment/quote-mode/Parcel';

function NewQuote() {
  const [selectedMode, setSelectedMode] = useState('LTL');
  const [pickupDate, setPickupDate] = useState('');
  const [isAddStopOpen, setIsAddStopOpen] = useState(false);

  const handleModeChange = (event) => {
    const mode = event.target.value;
    setSelectedMode(mode);
  };

  const handleAddStopClick = () => {
    setIsAddStopOpen((prevIsAddStopOpen) => !prevIsAddStopOpen); // Toggle the state
  };

  return (
    <div className={styles.newQuote}>
      <h2>New Quote</h2>

      <form>
        <div className={styles.row}>
          <div>
            <label htmlFor="mode">Mode</label>
            <select id="mode" value={selectedMode} onChange={handleModeChange}>
              <option value="LTL">LTL (Less than Truckload)</option>
              <option value="FTL">FTL (Full Truckload)</option>
              <option value="container">Container Quotes</option>
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
          {selectedMode === 'container' && <Container />}
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

        <div className={styles.addStop}>
          <button onClick={handleAddStopClick}>+ Add Stop</button>
        </div>
        {isAddStopOpen && (
          <div className={styles.addStopDiv}>
            <p>This is the additional stop information.</p>
            <p>You can add more content here.</p>
          </div>
        )}

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
