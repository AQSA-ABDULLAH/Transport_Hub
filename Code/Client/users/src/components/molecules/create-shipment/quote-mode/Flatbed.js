import React, { useState, useEffect } from 'react';
import styles from "./quotemode.module.css";

export default function Flatbed() {
  const [selectedDimensions, setSelectedDimensions] = useState('');
  const [selectedTrapSize, setSelectedTrapSize] = useState('');
  const [trapSize, setTrapSize] = useState('');

  useEffect(() => {
    const flatbedData = {
      dimensions: selectedDimensions,
      trap: selectedTrapSize,
      trapSize: selectedTrapSize === 'trap' ? trapSize : '',
    };
    localStorage.setItem('flatbedData', JSON.stringify(flatbedData));
  }, [selectedDimensions, selectedTrapSize, trapSize]);

  return (
    <div className={styles.row}>
      <div>
        <label htmlFor="dimensions">Dimensions</label>
        <select id="dimensions" value={selectedDimensions} onChange={(e) => setSelectedDimensions(e.target.value)}>
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
        <select id="trap" value={selectedTrapSize} onChange={(e) => setSelectedTrapSize(e.target.value)}>
          <option value="select_option" disabled selected>Select Option</option>
          <option value="trap">with trap</option>
          <option value="no_trap">without trap</option>
        </select>
      </div>

      {selectedTrapSize === 'trap' && (
        <div>
          <label htmlFor="size">Trap Size (feet)</label>
          <input type='number' placeholder='e.g. 6' value={trapSize} onChange={(e) => setTrapSize(e.target.value)} />
        </div>
      )}
    </div>
  )
}