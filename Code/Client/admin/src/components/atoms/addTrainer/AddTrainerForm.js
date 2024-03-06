import React from "react";
import styles from "../addSlider/AddSliderForm.module.css";
import Button from "../buttons/Button";
const AddTrainerForm = () => {
  return (
    <>
      <div className={styles.addFormContainer}>
        <FormTop text="new trainer" />
        <form action="" className={styles.addForm}>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="trainerName">trainer name</label>
              <input
                type="text"
                placeholder="e.g john doe"
                id="trainerName"
                name="trainerName"
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="">trainer profile image</label>
              <div className={styles.imgUpload}>
                <input type="file" name="trainerImg" id="trainerImg" />
                <label htmlFor="trainerImg">
                  <img
                    src="./assets/image/trainers/photograph.svg"
                    alt="icon"
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
        <FormBottom text={"Save Trainer"} />
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
export default AddTrainerForm;
