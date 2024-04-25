import React from 'react';
import styles from '../shipmentfooter.module.css';

function QouteFooter({saveQoute}) {
  return (
    <>
      <div className={styles.footer_conatainer}>
        <button type="button" onClick={saveQoute}>Save Quote</button>
      </div>
    </>
  )
}

export default QouteFooter;