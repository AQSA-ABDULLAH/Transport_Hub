import React from 'react';
import SideSection from '../../../../components/sections/career/sidesection/SideSection';
import styles from "./drivermail.module.css";

export default function DriverEmail() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.sideSection}>
          <SideSection />
        </div>

        <div className={styles.mainSection}>
          <div className={styles.language}>
            <p>English (United Kingdom)</p>
          </div>

          <section className={styles.form_container}>

            <div className={styles.heading}>
              <h2>
                Create your Driver Account
              </h2>
              <p>
                Then start your driving career!
              </p>
            </div>

            <div>
              <form>
                <input type="email" />
                <button>Send OTP</button>
              </form>
              <div><spam>OR</spam></div>
              <div>
                <button>
                  <img src='./assets/images/career/google_icon.png' alt="" />
                  Continue with Google
                </button>
              </div>
            </div>

            <div>
              <p>By proceeding, you consent to get Mail, including by automated means,
                from Transport Hub and its affiliates to the email provided.</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

