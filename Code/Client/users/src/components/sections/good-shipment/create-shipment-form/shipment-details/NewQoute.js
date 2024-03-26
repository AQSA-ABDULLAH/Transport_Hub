import React, { useState } from 'react';
import styles from './newqoute.module.css';
import Container from '../../../../molecules/create-shipment/quote-mode/Container';
import LTLForm from '../../../../molecules/create-shipment/quote-mode/LTLForm';
import FTLForm from '../../../../molecules/create-shipment/quote-mode/FTLForm';
import Flatbed from '../../../../molecules/create-shipment/quote-mode/Flatbed';
import Parcel from '../../../../molecules/create-shipment/quote-mode/Parcel';

function NewQuote() {
  const [selectedMode, setSelectedMode] = useState('LTL');
  const [LTL, setLTL] = useState(false);
  const [FTL, setFTL] = useState(false);
  const [container, setContainer] = useState(false);
  const [flatbed, setFlatbed] = useState(false);
  const [parcel, setParcel] = useState(false);

  const handleModeChange = (event) => {
    const mode = event.target.value;
    setSelectedMode(mode);
    if (mode === 'LTL') {
      setLTL(true);
      setFTL(false); setContainer(false); setFlatbed(false); setParcel(false);
    }
    else if (mode === 'FTL') {
      setFTL(true);
      setLTL(false); setContainer(false); setFlatbed(false); setParcel(false);
    }
    else if (mode === 'container') {
      setContainer(true)
      setLTL(false); setFTL(false); setFlatbed(false); setParcel(false);
    }
    else if (mode === 'flatbed') {
      setFlatbed(true);
      setLTL(false); setFTL(false); setContainer(false); setParcel(false);
    }
    else if (mode === 'parcel') {
      setParcel(true);
      setLTL(false); setFTL(false); setContainer(false); setFlatbed(false);
    }
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
            <input type="date" id="pickupDate" />
          </div>
        </div>

        <div>
          {selectedMode === 'LTL' && (
            <div className={styles.LTL}>
              <LTLForm />
            </div>
          )}
          {selectedMode === 'FTL' && (
            <div className={styles.FTL}>
              <FTLForm />
            </div>
          )}
          {selectedMode === 'container' && (
            <div className={styles.container}>
              <Container />
            </div>
          )}
          {selectedMode === 'flatbed' && (
            <div className={styles.flatbed}>
              <Flatbed />
            </div>
          )}
          {selectedMode === 'parcel' && (
            <div className={styles.parcel}>
              <Parcel />
            </div>
          )}
        </div>


        <div className={styles.pickup}>
          <label htmlFor="pickup">Pickup</label>
          <div className={styles.input_div}>
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

        {/* <div className={styles.accessories}>
          <h3>Accessorials</h3>
          <button>+</button>
        </div> */}
      </form>
    </div>
  );
}

export default NewQuote;