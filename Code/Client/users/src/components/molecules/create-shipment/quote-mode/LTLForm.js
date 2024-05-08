import React from 'react';
import styles from "./quotemode.module.css";

function LTLForm({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  

  return (
    <>
      <div className={styles.row}>
        <div>
          <label htmlFor="vehicle">Vehicle Type</label>
          <select id="ltlVehicleType" value={formData.ltlVehicleType} onChange={handleChange} name="ltlVehicleType">
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
