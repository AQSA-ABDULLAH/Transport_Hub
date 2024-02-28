import React, { useState } from "react";
import styles from "./Trainers.module.css";
import { trainersList } from "./trainersList";
import AddTrainerForm from "../../atoms/addTrainer/AddTrainerForm";

const Trainers = () => {
  const [showTrainerForm, setShowTrainerForm] = useState(false);
  const addTrainerHandler = () => {
    setShowTrainerForm(true);
    window.location.href = "#addUser";
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.allTrainers}>
          {trainersList.map((trainer, index) => {
            return (
              <article className={styles.trainer} key={index}>
                <div className={styles.imgContainer}>
                  <img src={trainer.img} alt={trainer.name} />
                  <div className={styles.icons}>
                    <span>
                      <img
                        src="./assets/image/trainers/pencil-alt.svg"
                        alt="edit_icon"
                      />
                    </span>
                    <span className={styles.icon}>|</span>
                    <span>
                      <img
                        src="./assets/image/trainers/trash.svg"
                        alt="edit_icon"
                      />
                    </span>
                  </div>
                </div>
                <h5>{trainer.name}</h5>
              </article>
            );
          })}
          <article
            className={styles.addTrainer}
            onClick={() => addTrainerHandler()}
          >
            <div className={styles.newTrainerContent}>
              <img src="./assets/image/trainers/mi_add.svg" alt="add" />
              <p>add new trainer</p>
            </div>
          </article>
        </div>
        <div id="addUser" className={styles.space}>
          {showTrainerForm && <AddTrainerForm />}
        </div>
      </section>
    </>
  );
};

export default Trainers;
