import React, { useState } from 'react';
import Button from '../../../../atoms/button/Button';
import styles from '../shipment-details/newqoute.module.css'
import style from '../shipmentdetails.module.css';

const PickupAddress = ({ PickupForm }) => {
  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  };

  const [formData, setFormData] = useState({
    pickupFirstName: '',
    pickupLastName: '',
    pickupEmail: '',
    pickupPhone: '',
    pickupCity: '',
    pickupZipcode: '',
    pickupAddress: '',
    pickupInstruction: ''
  });
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem('pickupFacility', JSON.stringify(formData));
    alert('Pickup facility data saved!');
    PickupForm(); // Assuming this is meant to close the form.
  };

  return (
    <>
      <div style={overlayStyle}></div>
      <div className={style.pickup_container}>
        <div className={style.form_header}>
          <h3>Add Pickup Address or Facility</h3>
          <span onClick={PickupForm}> &times; </span>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>First name</label>
              <input type="text" name="pickupFirstName" placeholder="Enter first name" value={formData.pickupFirstName} onChange={handleChange} />
            </div>
            <div className={style.pickup_form_input}>
              <label>Last name</label>
              <input type="text" name="pickupLastName" placeholder="Enter last name" value={formData.pickupLastName} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>Email</label>
              <input type="text" name="pickupEmail" placeholder="Enter email" value={formData.pickupEmail} onChange={handleChange} />
            </div>
            <div className={style.pickup_form_input}>
              <label>Phone no</label>
              <input type="text" name="pickupPhone" placeholder="Enter phone number" value={formData.pickupPhone} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>City</label>
              <input type="text" name="pickupCity" placeholder="Enter city" value={formData.pickupCity} onChange={handleChange} />
            </div>
            <div className={style.pickup_form_input}>
              <label>Zipcode</label>
              <input type="text" name="pickupZipcode" placeholder="Enter zipcode" value={formData.pickupZipcode} onChange={handleChange} />
            </div>
          </div>

          <div className={style.pickup_form_input}>
            <label>Pickup address</label>
            <textarea
              name="pickupAddress"
              placeholder="Insert pickup facility address"
              rows={3}
              className={styles.input_div}
              value={formData.pickupAddress}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={style.pickup_form_input}>
            <label>Facility default instructions</label>
            <textarea
              name="pickupInstruction"
              placeholder="Type any instruction note"
              rows={5}
              className={styles.input_div}
              value={formData.pickupInstruction}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
        <div className={style.facility_button}>
          <Button
            btnClick={handleSubmit}
            primary
            size={"14px"}
            radius={"4px"}
            btnText="Add Pickup Facility"
          />
        </div>
      </div>
    </>
  );
}

export default PickupAddress;
