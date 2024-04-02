import React, { useState } from 'react';
import styles from "./quotemode.module.css";

export default function Flatbed() {
  const [selectedTrapSize, setSelectedTrapSize] = useState();

  // Handle mode change event
  const handleTrapSizeChange = (event) => {
    const trap = event.target.value;
    setSelectedTrapSize(trap);
  };
  return (
    <div className={styles.row}>
      <div>
        <label htmlFor="dimensions">Dimensions</label>
        <select id="dimensions">
          <option value="first">45', 10'</option>
          <option value="second">45', 12'</option>
          <option value="third">50', 10'</option>
          <option value="fourth">50', 12'</option>
          <option value="fifth">50', 15'</option>
          <option value="sixth">53', 15'</option>
        </select>
      </div>

      <div>
        <label htmlFor="trap">Trap</label>
        <select id="equipment_type" value={selectedTrapSize} onChange={handleTrapSizeChange}>
        <option value="select_option" disabled selected>Select Option</option>
          <option value="trap">with trap</option>
          <option value="no_trap">without trap</option>
        </select>
      </div>

      <div>
        {selectedTrapSize === 'trap' &&
          <div>
            <label htmlFor="size">Trap Size (feet)</label>
            <input type='number' placeholder='e.g. 6'/>
          </div>
        }
      </div>
    </div>
  )
}
