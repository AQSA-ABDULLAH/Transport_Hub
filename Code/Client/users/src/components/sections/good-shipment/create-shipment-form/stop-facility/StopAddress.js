import React, { useState } from 'react';
import Button from '../../../../atoms/button/Button';
import styles from '../shipment-details/newqoute.module.css';
import style from '../shipmentdetails.module.css';

function StopAddress({ StopForm }) {
  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    zipcode: '',
    stopAddress: '',
    defaultInstructions: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission
    localStorage.setItem('stopFacility', JSON.stringify(formData));
    alert('Stop facility data saved!');
    StopForm(); // Assuming this is to close the modal or form
  };

  return (
    <>
      <div style={overlayStyle}></div>
      <div className={style.pickup_container}>
        <div className={style.form_header}>
          <h3>Add Stop Address or Facility</h3>
          <span onClick={StopForm}> &times; </span>
        </div>
        <form>
          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>First name</label>
              <input type="text" name="firstName" placeholder="Enter first name" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className={style.pickup_form_input}>
              <label>Last name</label>
              <input type="text" name="lastName" placeholder="Enter last name" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>Email</label>
              <input type="text" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
            </div>
            <div className={style.pickup_form_input}>
              <label>Phone no</label>
              <input type="text" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>City</label>
              <input type="text" name="city" placeholder="Enter city" value={formData.city} onChange={handleChange} />
            </div>
            <div className={style.pickup_form_input}>
              <label>Zipcode</label>
              <input type="text" name="zipcode" placeholder="Enter zipcode" value={formData.zipcode} onChange={handleChange} />
            </div>
          </div>

          <div className={style.pickup_form_input}>
            <label>Stop address</label>
            <textarea
              name="stopAddress"
              placeholder="Insert stop facility address"
              rows={3}
              className={styles.input_div}
              value={formData.stopAddress}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={style.pickup_form_input}>
            <label>Facility default instructions</label>
            <textarea
              name="defaultInstructions"
              placeholder="Type any instruction note"
              rows={5}
              className={styles.input_div}
              value={formData.defaultInstructions}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={style.facility_button}>
            <Button
              btnClick={handleSubmit}
              primary
              size="14px"
              radius="4px"
              btnText="Add Stop Facility"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default StopAddress;
