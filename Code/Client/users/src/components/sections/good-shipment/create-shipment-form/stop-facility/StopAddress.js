import React from 'react';
import Button from '../../../../atoms/button/Button';
import styles from '../shipment-details/newqoute.module.css'
import style from '../shipmentdetails.module.css';

function StopAddress({StopForm}) {
    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
              <input type="text" placeholder="Insert pickup facility address" />
            </div>
            <div className={style.pickup_form_input}>
              <label>Last name</label>
              <input type="text" placeholder="Insert pickup facility address" />
            </div>
          </div>

          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>Email</label>
              <input type="text" placeholder="Insert pickup facility address" />
            </div>
            <div className={style.pickup_form_input}>
              <label>Phone no</label>
              <input type="text" placeholder="Insert pickup facility address" />
            </div>
          </div>


          <div className={styles.qoute_row}>
            <div className={style.pickup_form_input}>
              <label>City</label>
              <input type="text" placeholder="Insert stop city" />
            </div>
            <div className={style.pickup_form_input}>
              <label>Zipcode</label>
              <input type="text" placeholder="Enter city zipcode" />
            </div>
          </div>

          <div className={style.pickup_form_input}>
            <label>Stop address</label>
            <textarea
              placeholder="Insert stop facility address"
              rows={3}
              className={styles.input_div}
            ></textarea>
          </div>

          <div className={style.pickup_form_input}>
            <label>Facility default instructions</label>
            <textarea
              placeholder="Type any instruction note"
              rows={5}
              className={styles.input_div}
            ></textarea>
          </div>
        </form>
       <div className={style.facility_button}>
        <Button
            type="submit"
            primary
            size={"14px"}
            radius={"4px"}
            btnText="Add Stop Facility"
          />
       </div>
      </div>
    </>
  )
}

export default StopAddress