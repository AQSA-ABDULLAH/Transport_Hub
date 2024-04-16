import React, { useState } from 'react';
import styles from './newqoute.module.css';
import LTLForm from '../../../../molecules/create-shipment/quote-mode/LTLForm';
import FTLForm from '../../../../molecules/create-shipment/quote-mode/FTLForm';
import Flatbed from '../../../../molecules/create-shipment/quote-mode/Flatbed';
import Parcel from '../../../../molecules/create-shipment/quote-mode/Parcel';
import PickupAddress from '../pickup-facility/PickupAddress';

function NewQuote() {
  const [isPickupFacility, setIsPickupFacility] = useState(false);
  const [selectedMode, setSelectedMode] = useState();
  const [pickupDate, setPickupDate] = useState('');
  const [isAddStopOpen, setIsAddStopOpen] = useState(false);
  const [isAddAccessorial, setIsAddAccessorial] = useState(false);

  // Handle mode change event
  const handleModeChange = (event) => {
    const mode = event.target.value;
    setSelectedMode(mode);
  };

  const togglePopup = () => {
    setIsPickupFacility(!isPickupFacility);
  };
  

  return (
    <div className={styles.newQuote}>
      <h2>New Quote</h2>
      <form>
        <h4>Freight Information :</h4>
        <div className={styles.qoute_row}>
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
          <h4>Pickup details :</h4>
          <div className={styles.input_div}>
            <span>Add an address or facility</span>
            <button type="button" onClick={togglePopup}>+</button>
          </div>
          {isPickupFacility && <PickupAddress togglePopup={togglePopup} />}
        </div>

        {isAddStopOpen && (
          <div className={styles.stop}>
            <h4>Stop details :</h4>
            <div className={styles.stop_input}>
              <div className={styles.input_div}>
                <span>Add an address or facility</span>
                <button>+</button>
              </div>
              <select id="stop_type">
                <option value="select_option" disabled selected>Stop Type</option>
                <option value="pickup">Pickup</option>
                <option value="delivery">Delivery</option>
              </select>
              <button className={styles.close_stop}><img src="/assets/images/good-shipment/delete.png" alt="Delete"
                onClick={() => setIsAddStopOpen(false)} /></button>
            </div>
          </div>
        )}

        <div className={styles.addStop}>
          {!isAddStopOpen && (
            <button type="button" onClick={() => setIsAddStopOpen(true)}> + Add Stop
            </button>
          )}
        </div>


        <div className={styles.delivery}>
          <h4>Delivery details :</h4>
          <div className={styles.input_div}>
            <span>Add an address or facility</span>
            <button>+</button>
          </div>
        </div>

        <div>
          <h4>Accessorial :</h4>
          {!isAddAccessorial && (
            <div className={styles.input_div}>
              <span>Add Accessorial</span>
              <button type='button' onClick={() => setIsAddAccessorial(true)}>+</button>
            </div>
          )}
          {isAddAccessorial && (
            <div className={styles.accessorial_div}>
              <div className={styles.accessorial_div_heading}>
                <span>Select Accessorial</span>
                <button type='button' onClick={() => setIsAddAccessorial(false)}>-</button>
              </div>
              <div className={styles.ckeckbox_column}>
                <div className={styles.first_column}>
                  <div>
                    <input type="checkbox" id="freezer" name="freezer" />
                    <label for="freezer">Protect From Freezing</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" id="hazmat" name="hazmat" />
                    <label for="hazmat">Hazmat</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" id="trunable" name="trunable" />
                    <label for="trunable">Trunable</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" id="team" name="team" />
                    <label for="team">Team Service</label><br></br>
                  </div>
                </div>

                <div>
                  <div>
                    <input type="checkbox" id="non_stackable" name="non_stackable" />
                    <label for="non_stackable">Non_Stackable</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" id="residential" name="residential" />
                    <label for="residential">Residential</label><br></br>
                  </div>
                  <div>
                    <input type="checkbox" id="construction_site" name="construction_site" />
                    <label for="construction_site">Construction Site</label><br></br>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <h4>More Details (optional) :</h4>
          <textarea
            placeholder="Type any instruction note to the carrier"
            rows={5}
            className={styles.input_div}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default NewQuote;