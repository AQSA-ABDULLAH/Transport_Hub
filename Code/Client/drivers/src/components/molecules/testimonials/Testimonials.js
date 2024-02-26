import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import AddTestimonialForm from "../../atoms/addTestimonial/AddTestimonialForm";
import Testimonialhero from "./Testimonialhero";
import Button from "../../../components/atoms/button/Button";
const Testimonials = () => {
  const [showTestimonyForm, setShowTestimonyForm] = useState(false);
  const addtestimonyHandler = () => {
    setShowTestimonyForm(true);
    window.location.href = "#addtestimony";
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.testimonialsContainer}>
          <Testimonialhero />
        </div>
        <div className={styles.btn} onClick={() => addtestimonyHandler()}>
          <Button
            bgColor={"#EC1F3E"}
            btnText="Add new Testimony "
            radius="10px"
          />
        </div>
        <div id="addtestimony" className={styles.space}>
          {showTestimonyForm && <AddTestimonialForm />}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
