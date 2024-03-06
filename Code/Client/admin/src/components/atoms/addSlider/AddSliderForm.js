import React from "react";
import styles from "./AddSliderForm.module.css";
import { FormTop, FormBottom } from "../addTrainer/AddTrainerForm";
const AddSliderForm = () => {
  return (
    <>
      <div className={styles.addFormContainer}>
        <FormTop text={"new slider"} />
        <form action="" className={styles.addForm}>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="">background image</label>
              <div className={`${styles.imgUpload} ${styles.sliderUpload}`}>
                <input type="file" name="trainerImg" id="trainerImg" />
                <label htmlFor="trainerImg">
                  <img
                    src="./assets/image/trainers/photograph.svg"
                    alt="icon"
                  />
                </label>
              </div>
            </div>
            <div className={styles.formField}>
              <div className={styles.colItem}>
                <label htmlFor="trainerName">title</label>
                <textarea
                  name=""
                  id=""
                  rows={"4"}
                  className={styles.sliderTextArea}
                ></textarea>
              </div>
              <div className={`${styles.colItem} ${styles.minorSpace}`}>
                <label htmlFor="trainerName">caption</label>
                <textarea
                  name=""
                  id=""
                  rows={"4"}
                  className={styles.sliderTextArea}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <FormBottom text={"Save Slider"} />
      </div>
    </>
  );
};

export default AddSliderForm;
