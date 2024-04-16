import React from 'react';
import styles from './pickupAddress.module.css';

const PickupAddress = ({ togglePopup }) => {
  return (
    <div className={styles.pickup_container}>
      <div className={styles.form_header}>
        <h3>Add New Address or Facility</h3>
        <button onClick={togglePopup} type="button">Close</button>
        <form>
          <label>Address:</label>
          <input type="text" placeholder="Enter address"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PickupAddress;
