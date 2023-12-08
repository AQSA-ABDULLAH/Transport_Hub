// DriverForm.js

import React from 'react';
import styles from './driverForm.module.css';

const DriverForm = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.formContainer}>
        <h2>Driver Registration Form</h2>

        {/* Section 1: Full Name */}
        <div className={styles.formSection}>
          <label htmlFor="firstName">Full Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" />
          <input type="text" id="middleName" name="middleName" placeholder="Middle Name" />
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
        </div>

        {/* Section 2: Email Address and Phone Number */}
        <div className={styles.formSection}>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" name="email" placeholder="Email Address" />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" placeholder="Phone Number" />
        </div>

        {/* Section 3: Date of Birth and CNIC Number */}
        <div className={styles.formSection}>
          <label htmlFor="dob">Date of Birth</label>
          <input type="text" id="dob" name="dob" placeholder="Date of Birth" />

          <label htmlFor="cnic">CNIC Number</label>
          <input type="text" id="cnic" name="cnic" placeholder="CNIC Number" />
        </div>

        {/* Add your other form fields, submit button, etc. */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DriverForm;


