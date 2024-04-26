// LTLForm.js
import React from 'react';
import styles from "./quotemode.module.css";

function LTLForm({ selectedVehicle, setSelectedVehicle }) {
  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
  };

  return (
    <>
      <div className={styles.row}>
        <div>
          <label htmlFor="vehicle">Vehicle Type</label>
          <select id="vehicle" value={selectedVehicle} onChange={handleVehicleChange}>
            <option value="" disabled>Select Vehicle Type</option>
            <option value="mazda">Mazda</option>
            <option value="shehzore">Shehzore</option>
            <option value="pickup">Pickup</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default LTLForm;

