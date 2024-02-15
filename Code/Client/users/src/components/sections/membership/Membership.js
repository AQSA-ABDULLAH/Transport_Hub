import React from "react";
import styles from "./Membership.module.css";
import Form from "../../molecules/Form";
const Membership = () => {
  return (
    <>
      <section className={styles.membershipContainer}>
        <div className={styles.membership}>
          <div className={styles.imgContainer}>
            {/* <img
              src="./assets/image/membership-form/formImg.png"
              alt="athlete"
            /> */}
            <img src="./assets/logo/LogoLight.png" alt="logo" />
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formTop}>
              <h3>join</h3>
              <div className={styles.btnContainer}>
                <div>user info</div>
                <div>billing information</div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
