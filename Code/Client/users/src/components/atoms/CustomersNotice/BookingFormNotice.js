import React from 'react';
import style from "./bookingFormNotice.module.css"

export default function () {
  return (
    <>
        <div className={style.noticeContainer}>
            <div><button className={style.button}>Note</button></div>
            <div className={style.text}>Please enter correct details for your booking. These details are necessary to verify your identity.</div>
        </div>
    </>
  )
}
