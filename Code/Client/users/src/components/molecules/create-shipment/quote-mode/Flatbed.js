import React, { useState } from 'react';
import styles from "./quotemode.module.css";

export default function Flatbed({ setSelectedDimensions, setSelectedTrapSize, setTrapSize, selectedDimensions, selectedTrapSize, trapSize }) {
  return (
    <div className={styles.row}>
      <div>
        <label htmlFor="dimensions">Dimensions</label>
        <select id="dimensions" value={selectedDimensions} onChange={(e) => setSelectedDimensions(e.target.value)}>
          <option value="">Select Dimensions</option>
          <option value="45', 10'">45', 10'</option>
          <option value="45', 12'">45', 12'</option>
          <option value="50', 10'">50', 10'</option>
          <option value="50', 12'">50', 12'</option>
          <option value="50', 15'">50', 15'</option>
          <option value="53', 15'">53', 15'</option>
        </select>
      </div>

      <div>
        <label htmlFor="trap">Trap</label>
        <select id="trap" value={selectedTrapSize} onChange={(e) => setSelectedTrapSize(e.target.value)}>
          <option value="">Select Trap Option</option>
          <option value="with trap">with trap</option>
          <option value="without trap">without trap</option>
        </select>
      </div>

      {selectedTrapSize === 'with trap' && (
        <div>
          <label htmlFor="size">Trap Size (feet)</label>
          <input type='number' placeholder='e.g. 6' value={trapSize} onChange={(e) => setTrapSize(e.target.value)} />
        </div>
      )}
    </div>
  )
}
