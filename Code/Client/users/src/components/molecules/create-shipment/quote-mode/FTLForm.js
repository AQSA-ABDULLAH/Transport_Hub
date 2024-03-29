import React, { useState } from 'react';
import styles from "./quotemode.module.css";

export default function FTLForm() {
  const [selectedEquipment, setSelectedEquipment] = useState();

  // Handle mode change event
  const handleEquipmentChange = (event) => {
    const equipment = event.target.value;
    setSelectedEquipment(equipment);
  };
  return (
    <>
      <div className={styles.row}>
        <div>
          <label htmlFor="equipment">Equipment</label>
          <select id="equipment" value={selectedEquipment} onChange={handleEquipmentChange}>
            <option value="select_option" disabled selected>Select Equipment</option>
            <option value="truck">Truck</option>
            <option value="reefer">Reefer</option>
            <option value="tanker">Tanker</option>
            <option value="container">Container</option>
          </select>
        </div>

        <div>
          {selectedEquipment === 'truck' &&
            <div>
            <label htmlFor="equipment_type">Equipment Length</label>
            <select id="equipment_type">
              <option value="small">48'</option>
              <option value="large">53'</option>
            </select>
          </div>

          }

          {selectedEquipment === 'reefer' &&
            <div className={styles.sub_input}>
              <div>
                <label htmlFor="equipment_type">Equipment Length</label>
                <select id="equipment_type">
                  <option value="small">45'</option>
                  <option value="large">50'</option>
                </select>
              </div>

              <div>
                <label htmlFor="temp">Temperature</label>
                <input type='number' placeholder='F' />
              </div>
            </div>

          }

          {selectedEquipment === 'tanker' &&
            <div>
              <label htmlFor="equipment_type">Equipment Length</label>
              <select id="equipment_type">
                <option value="small">45'</option>
                <option value="large">52'</option>
              </select>
            </div>
          }

          {selectedEquipment === 'container' &&
            <div>
              <label htmlFor="equipment_type">Container Size</label>
              <select id="equipment_type">
                <option value="small">20'</option>
                <option value="medium">40'</option>
                <option value="large">45'</option>
                <option value="very_large">53'</option>
              </select>
            </div>
          }
        </div>
      </div>
    </>
  )
}
