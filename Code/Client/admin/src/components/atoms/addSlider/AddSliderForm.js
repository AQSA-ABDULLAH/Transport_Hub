import React from "react";
import styles from "./AddSliderForm.module.css";
import Button from "../buttons/Button";
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

export const FormBottom = ({ text }) => {
  return (
    <>
      <div className={styles.formBottom}>
        <Button btnText="Cancel" textColor="red" />
        <Button btnText={text} bgColor="#2E65F3" radius="5px" />
      </div>
    </>
  );
};
export const FormTop = ({ text }) => {
  return (
    <>
      <div className={styles.formTop}>
        <h5>{text}</h5>
      </div>
    </>
  );
};

export default AddSliderForm;
