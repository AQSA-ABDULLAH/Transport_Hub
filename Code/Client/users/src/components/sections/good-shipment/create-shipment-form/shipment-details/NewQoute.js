import React, { useState, useEffect } from 'react';
import QouteFooter from '../../../../molecules/create-shipment/quote-footer/QouteFooter';
import styles from './newqoute.module.css';
import LTLForm from '../../../../molecules/create-shipment/quote-mode/LTLForm';
import FTLForm from '../../../../molecules/create-shipment/quote-mode/FTLForm';
import Flatbed from '../../../../molecules/create-shipment/quote-mode/Flatbed';
import Parcel from '../../../../molecules/create-shipment/quote-mode/Parcel';
import PickupAddress from '../pickup-facility/PickupAddress';
import DeliveryAddress from '../delivery-facility/DeliveryAddress';
import StopAddress from '../stop-facility/StopAddress';
import { useNavigate } from 'react-router-dom';

function NewQuote() {
  const navigate = useNavigate();

  const [isPickupFacility, setIsPickupFacility] = useState(false);
  const [isDeliveryFacility, setIsDeliveryFacility] = useState(false);
  const [isStopFacility, setIsStopFacility] = useState(false);
  const [selectedMode, setSelectedMode] = useState();
  const [pickupDate, setPickupDate] = useState('');
  const [isAddStopOpen, setIsAddStopOpen] = useState(false);
  const [isAddAccessorial, setIsAddAccessorial] = useState(false);
  const [commodityName, setCommodityName] = useState('');
  const [moreDetails, setMoreDetails] = useState('');
  const [stopType, setStopType] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedDimensions, setSelectedDimensions] = useState('');
  const [selectedTrapSize, setSelectedTrapSize] = useState('');
  const [trapSize, setTrapSize] = useState('');
  const [handlingItems, setHandlingItems] = useState('');
  const [itemWeight, setItemWeight] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [formData, setFormData] = useState('');
  const [temperature, setTemperature] = useState('');



  // GET DATA FROM LOCAL STORAGE
  const pickupFacility = JSON.parse(localStorage.getItem('pickupFacility'));
  const pickupAddress = pickupFacility ? pickupFacility.pickupAddress : null;

  const deliveryFacility = JSON.parse(localStorage.getItem('deliveryFacility'));
  const deliveryAddress = deliveryFacility?.deliveryAddress;

  const stopFacility = JSON.parse(localStorage.getItem('stopFacility'));
  const stopAddress = stopFacility ? stopFacility.stopAddress : null;


  // SEND DATA TO LOCAL STORAGE
  const saveQoute = () => {
    // Get additional data from localStorage
    const ltlVehicleType = JSON.parse(localStorage.getItem('ltlVehicleType'));
    const ftlEquipmentData = JSON.parse(localStorage.getItem('ftlEquipmentData'));
    const flatbedData = JSON.parse(localStorage.getItem('flatbedData'));
    const parcelData = JSON.parse(localStorage.getItem('parcelData'));
  
    // Combine additional data with the quote data
    const formData = {
      commodityName,
      selectedMode,
      pickupDate,
      stopType,
      moreDetails,
      ltlVehicleType, // Add ltlVehicleType data
      ftlEquipmentData, // Add ftlEquipmentData
      flatbedData, // Add flatbedData
      parcelData, // Add parcelData
    };
  
    // Save form data to local storage
    localStorage.setItem('quoteData', JSON.stringify(formData));

    navigate("/create_shipment_form")
  };
  




  // CHANGE LOCAL STORAGE DAT ACCORDING TO MODE
  useEffect(() => {
    if (selectedMode !== 'FTL') {
      setSelectedEquipment('');
      localStorage.removeItem('ftlEquipmentData');
    }
  }, [selectedMode, selectedEquipment]);
  const saveFTLEquipment = (equipment, length, temperature) => {
    const data = { equipment, length, temperature };
    localStorage.setItem('ftlEquipmentData', JSON.stringify(data));
  };

  useEffect(() => {
    if (selectedMode !== 'LTL') {
      setSelectedVehicle('');
      localStorage.removeItem('ltlVehicleType');
    } else {
      localStorage.setItem('ltlVehicleType', JSON.stringify(formData));
    }
  }, [selectedMode, selectedVehicle]);

  useEffect(() => {
    if (selectedMode === 'flatbed') {
      const flatbedData = {
        dimensions: selectedDimensions,
        trap: selectedTrapSize,
        trapSize: selectedTrapSize === 'with trap' ? trapSize : '',
      };
      localStorage.setItem('flatbedData', JSON.stringify(flatbedData));
    } else {
      localStorage.removeItem('flatbedData');
    }
  }, [selectedMode, selectedDimensions, selectedTrapSize, trapSize]);

  useEffect(() => {
    if (selectedMode === 'parcel') {
      const parcelData = {
        handlingItems,
        itemWeight,
        length,
        width,
        height
      };
      localStorage.setItem('parcelData', JSON.stringify(parcelData));
    } else {
      localStorage.removeItem('parcelData');
    }
  }, [handlingItems, itemWeight, length, width, height, selectedMode]);




  // Handle mode change event
  const handleModeChange = (event) => {
    const mode = event.target.value;
    setSelectedMode(mode);
  };

  // Pickup Facility Form
  const PickupForm = () => {
    setIsPickupFacility(!isPickupFacility);
  };
  // Delivery Facility Form
  const DeliveryForm = () => {
    setIsDeliveryFacility(!isDeliveryFacility);
  };
  // Stop Facility Form
  const StopForm = () => {
    setIsStopFacility(!isStopFacility);
  };


  return (
    <>
      <div className={styles.newQuote}>
        <h2>New Quote</h2>
        <form>
          <h4>Freight Information :</h4>
          <div className={styles.qoute_row}>
            <div>
              <label htmlFor="commodity_name">Commodity name</label>
              <input
                type="text"
                placeholder='Item name'
                value={commodityName}
                onChange={(e) => setCommodityName(e.target.value)}
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
            {selectedMode === 'LTL' && (
              <LTLForm
                formData={formData}
                setFormData={setFormData}
              />

            )}
            {selectedMode === 'FTL' && (
              <FTLForm
                selectedEquipment={selectedEquipment}
                setSelectedEquipment={setSelectedEquipment}
                saveFTLEquipment={saveFTLEquipment}
                length={length}
                setLength={setLength}
                temperature={temperature}
                setTemperature={setTemperature}
              />
            )}

            {selectedMode === 'flatbed' && (
              <Flatbed
                setSelectedDimensions={setSelectedDimensions}
                setSelectedTrapSize={setSelectedTrapSize}
                setTrapSize={setTrapSize}
                selectedDimensions={selectedDimensions}
                selectedTrapSize={selectedTrapSize}
                trapSize={trapSize}
              />
            )}

            {selectedMode === 'parcel' && (
              <Parcel
                handlingItems={handlingItems}
                setHandlingItems={setHandlingItems}
                itemWeight={itemWeight}
                setItemWeight={setItemWeight}
                length={length}
                setLength={setLength}
                width={width}
                setWidth={setWidth}
                height={height}
                setHeight={setHeight}
              />
            )}


          </div>

          {/* ADD PICKUP DETAILS */}
          <div className={styles.pickup}>
            <h4>Pickup details :</h4>
            <div className={styles.input_div}>
              {pickupAddress ? (
                <span>{pickupAddress}</span>
              ) : (
                <span>Add an address or facility</span>
              )}
              <button type="button" onClick={PickupForm}>+</button>
            </div>
            {isPickupFacility && <PickupAddress PickupForm={() => setIsPickupFacility(false)} />}
          </div>


          {/* ADD STOP DETAILS */}
          {isAddStopOpen && (
            <div className={styles.stop}>
              <h4>Stop details :</h4>
              <div className={styles.stop_input}>
                <div className={styles.input_div}>
                  {stopAddress ? (
                    <span>{stopAddress}</span>
                  ) : (
                    <span>Add an address or facility</span>
                  )}
                  <button type="button" onClick={StopForm}>+</button>
                </div>
                {isStopFacility && <StopAddress StopForm={StopForm} />}
                <select id="stop_type" value={stopType} onChange={(e) => setStopType(e.target.value)}>
                  <option disabled selected >
                    Stop Type</option>
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


          {/* ADD DELIVERY DETAILS */}
          <div className={styles.delivery}>
            <h4>Delivery details :</h4>
            <div className={styles.input_div}>
              {deliveryAddress ? (
                <span>{deliveryAddress}</span>
              ) : (
                <span>Add an address or facility</span>
              )}
              <button type="button" onClick={DeliveryForm}>+</button>
            </div>
            {isDeliveryFacility && <DeliveryAddress DeliveryForm={DeliveryForm} />}
          </div>


          {/* ACCESSORIAL */}
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
              value={moreDetails}
              onChange={(e) => setMoreDetails(e.target.value)}
            ></textarea>
          </div>
        </form>
      </div>
      <div>
        <QouteFooter saveQoute={saveQoute} />
      </div>
    </>
  );
}

export default NewQuote;