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


// DirectionsService.route(request, function(result, status){
//   if(status == google.DirectionsStatus.OK){
//     const output = document.querySelector("#output")
//   }
// })