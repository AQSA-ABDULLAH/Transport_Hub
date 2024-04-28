import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SideSection from '../../../../components/sections/career/sidesection/SideSection';
import styles from "../../driver/registration/drivermail.module.css";

export default function DriverEmail() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("transporterEmail", email);


    try {
      axios.post("http://localhost:5000/api/transporter/registration", { email: email })
          console.log(email);
          navigate("/verify_transporter_mail");

    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 422) {
        alert("Validation error: Please check your email and try again.");
      } else {
        alert("An error occurred while submitting the data. Please try again.");
      }
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

