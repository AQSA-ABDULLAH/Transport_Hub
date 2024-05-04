import React, { useEffect } from 'react'; // Import useEffect
import styles from "./quotemode.module.css";

export default function FTLForm({ selectedEquipment, setSelectedEquipment, saveFTLEquipment, length, setLength, 
  temperature, setTemperature
 }) {

  useEffect(() => {
    saveFTLEquipment(selectedEquipment, length, temperature);
  }, [selectedEquipment, length, temperature, saveFTLEquipment]);

  const handleEquipmentChange = (event) => {
    setSelectedEquipment(event.target.value);
  };

  return (
    <>
      <div className={styles.row}>
        <div>
          <label htmlFor="equipment">Equipment</label>
          <select id="equipment" value={selectedEquipment || ''} onChange={handleEquipmentChange}>
            <option value="" disabled>Select Equipment</option>
            <option value="truck">Truck</option>
            <option value="reefer">Reefer</option>
            <option value="tanker">Tanker</option>
            <option value="container">Container</option>
          </select>
        </div>

        {selectedEquipment === 'truck' && (
          <div>
            <label htmlFor="truck_length">Equipment Length</label>
            <select id="truck_length"
              value={length}
              onChange={(e) => setLength(e.target.value)}>
              <option value="">Select Length</option>
              <option value="48'">48'</option>
              <option value="53'">53'</option>
            </select>
          </div>
        )}

        {selectedEquipment === 'reefer' && (
          <div className={styles.sub_input}>
            <div>
              <label htmlFor="reefer_length">Equipment Length</label>
              <select id="reefer_length"
                value={length}
                onChange={(e) => setLength(e.target.value)}>
                <option value="">Select Length</option>
                <option value="45'">45'</option>
                <option value="50'">50'</option>
              </select>
            </div>
            <div>
              <label htmlFor="temp">Temperature</label>
              <input type='number' id="temp" placeholder='F'
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)} />
            </div>
          </div>
        )}

        {selectedEquipment === 'tanker' && (
          <div>
            <label htmlFor="tanker_length">Equipment Length</label>
            <select id="tanker_length"
              value={length}
              onChange={(e) => setLength(e.target.value)}>
              <option value="">Select Length</option>
              <option value="45'">45'</option>
              <option value="52'">52'</option>
            </select>
          </div>
        )}

        {selectedEquipment === 'container' && (
          <div>
            <label htmlFor="container_size">Container Size</label>
            <select id="container_size"
              value={length}
              onChange={(e) => setLength(e.target.value)}>
              <option value="">Select Size</option>
              <option value="20'">20'</option>
              <option value="40'">40'</option>
              <option value="45'">45'</option>
              <option value="53'">53'</option>
            </select>
          </div>
        )}
      </div>
    </>
  );
}