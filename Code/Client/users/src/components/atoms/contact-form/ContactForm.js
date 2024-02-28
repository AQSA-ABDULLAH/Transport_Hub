import React from "react";
import styles from "../../sections/contact/ContactStyle.module.css";
import Button from "../button/Button";
const ContactForm = () => {
  return (
    <>
      <section className={styles.formSectionContainer}>
        <div className={styles.png}>
          <img
            src="./assets/image/contact/shirtless-man-running-place-using-resistance-band-removebg-preview.png"
            alt="boy_stretching"
            srcset=""
          />
        </div>
        <div className={styles.formContainer}>
          <h1>message us</h1>
          <form action="">
            <div className={styles.formRow}>
              <input type="text" placeholder="Name*" className={styles.input} />
              <input type="tel" placeholder="Phone*" className={styles.input} />
            </div>
            <div className={styles.formCol}>
              <input
                type="email"
                placeholder="Email*"
                className={styles.input}
              />
            </div>
            <div className={styles.formCol}>
              <textarea
                placeholder="Message*"
                className={styles.input}
                rows={"10"}
              ></textarea>
            </div>
          </form>
          <div className={styles.btn}>
            <Button btnText={"SUBMIT"} bgColor={"#FC427B"} />
          </div>
        </div>

        <div className={styles.png}>
          <img
            src="./assets/image/contact/young-woman-doing-fitness-sportswear-removebg-preview.png"
            alt="girl_stretching"
          />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
