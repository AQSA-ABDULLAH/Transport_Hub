import React from 'react';
import SideSection from '../../../../components/sections/career/sidesection/SideSection';
import styles from "../../driver/registration/drivermail.module.css";

export default function DriverEmail() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.sideSection}>
          <SideSection />
        </div>

        <div className={styles.mainSection}>
          <div className={styles.header}>
            <img src="./assets/images/career/driver_icon.png" alt=""/>
            <p>English (United Kingdom)</p>
          </div>

         
            <div className={styles.heading}>
              <h2>
                Create your Driver Account
              </h2>
              <p>
                Then start your driving career!
              </p>
            </div>
            <section className={styles.form_container}>

            <div>
              <form className={styles.form}>
                <h2>What's your email?</h2>
                <input type="email" required placeholder='@gmail.com' />
                <button>Send OTP</button>
              </form>

              <div className={styles.spam}>
  <spam>OR</spam>
</div>


                <button className={styles.google_button}>
                  <img src='./assets/images/career/google_icon.png' alt="" />
                  <p>Continue with Google</p>
                </button>
            </div>

            <div className={styles.text}>
              <p>By proceeding, you consent to get Mail, including by automated means,
                from Transport Hub and its affiliates to the email provided.</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

