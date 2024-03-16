import React, { useEffect, useState } from "react";
import axios from "axios";
import SideSection from '../../../../components/sections/career/sidesection/SideSection';
import styles from "../../driver/registration/drivermail.module.css";

export default function DriverEmail() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);

    console.log("FormData:", formData);

    try {
      const response = await axios.post("http://localhost:5000/api/transporter/registration", formData, {
        headers: { 'Authorization': localStorage.getItem('token') }
      });


      if (response.data.status === "success") {
        alert("Data submitted successfully!");
      } else {
        alert("Failed to submit data. Please try again.");
      }

      if (response.data.code === 403 && response.data.message === "Token Expired") {
        localStorage.setItem('token', null);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while submitting the data. Please try again.");
    }
  };


  return (
    <>
      <section className={styles.container}>
        <div className={styles.sideSection}>
          <SideSection />
        </div>

        <div className={styles.mainSection}>
          <div className={styles.header}>
            <img src="./assets/images/career/driver_icon.png" alt="" />
            <p>English (United Kingdom)</p>
          </div>


          <div className={styles.heading}>
            <h2>
              Create your Transporter Account
            </h2>
            <p>
              Then start your transporter career!
            </p>
          </div>
          <section className={styles.form_container}>

            <div>
              <form className={styles.form}>
                <h2>What's your email?</h2>
                <input type="email" required placeholder='@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubmit}>Send OTP</button>
              </form>

              <div className={styles.spam}>
                <span>OR</span>
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

