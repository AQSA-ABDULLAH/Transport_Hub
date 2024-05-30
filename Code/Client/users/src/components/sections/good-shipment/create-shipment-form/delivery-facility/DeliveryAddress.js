import React, { useState } from 'react';
import Button from '../../../../atoms/button/Button';
import styles from '../shipment-details/newqoute.module.css';
import style from '../shipmentdetails.module.css';

export default function DeliveryAddress({ DeliveryForm }) {
  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  };

  const [formData, setFormData] = useState({
    deliveryFirstName: '',
    deliveryLastName: '',
    deliveryEmail: '',
    deliveryPhone: '',
    deliveryCity: '',
    deliveryZipcode: '',
    deliveryAddress: '',
    deliveryInstruction: ''
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
    localStorage.setItem('deliveryFacility', JSON.stringify(formData));
    alert('Delivery facility data saved!');
    DeliveryForm(); // Assuming this is to close the modal or form
  };

  return (
    <>
      <div style={overlayStyle}></div>
      <div className={style.pickup_container}>
        <div className={style.form_header}>
          <h3>Add Delivery Address or Facility</h3>
          <span onClick={DeliveryForm}> &times; </span>
        </div>
        <form>
          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>First name</label>
              <input type="text" name="deliveryFirstName" placeholder="Enter first name" value={formData.deliveryFirstName} onChange={handleChange} />
            </div>
            <div className={style.pickup_form_input}>
              <label>Last name</label>
              <input type="text" name="deliveryLastName" placeholder="Enter last name" value={formData.deliveryLastName} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>Email</label>
              <input type="text" name="deliveryEmail" placeholder="Enter email" value={formData.deliveryEmail} onChange={handleChange} />
            </div>
            <div className={style.pickup_form_input}>
              <label>Phone no</label>
              <input type="text" name="deliveryPhone" placeholder="Enter phone number" value={formData.deliveryPhone} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>City</label>
              <input type="text" name="deliveryCity" placeholder="Enter city" value={formData.deliveryCity} onChange={handleChange} />
            </div>
            <div className={style.pickup_form_input}>
              <label>Zipcode</label>
              <input type="text" name="deliveryZipcode" placeholder="Enter zipcode" value={formData.deliveryZipcode} onChange={handleChange} />
            </div>
          </div>

          <div className={style.pickup_form_input}>
            <label>Delivery address</label>
            <textarea
              name="deliveryAddress"
              placeholder="Insert delivery address"
              rows={3}
              className={styles.input_div}
              value={formData.deliveryAddress}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={style.pickup_form_input}>
            <label>Facility default instructions</label>
            <textarea
              name="deliveryInstruction"
              placeholder="Type any instruction note about delivery facility"
              rows={5}
              className={styles.input_div}
              value={formData.deliveryInstruction}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={style.facility_button}>
            <Button
              btnClick={handleSubmit}
              primary
              size={"14px"}
              radius={"4px"}
              btnText="Add Delivery Facility"
            />
          </div>
        </form>
      </div>
    </>
  );
}

