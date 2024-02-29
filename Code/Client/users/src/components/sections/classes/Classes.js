import React from "react";
import styles from "./Classes.module.css";
import { data } from "./ClassesData";
import Pricing from "../../atoms/pricing/Pricing";
const Classes = () => {
  console.log(data);
  return (
    <>
      <section className={styles.classes}>
        <div className={styles.classesContainer}>
          {data.map((item, index) => {
            return (
              <div className={styles.class}>
                <div
                  className={`${styles.imgContainer} ${
                    index % 2 !== 0 ? styles.order : ""
                  }`}
                >
                  <img src={item.img} alt={item.heading} />
                </div>
                <div className={styles.textContainer}>
                  <h1>{item.heading}</h1>
                  <p>{item.text}</p>
                  <div className={styles.moreInfo}>
                    {item.pricing && <Pricing list={item.prices} />}
                    {!item.pricing && (
                      <div className={styles.lists}>
                        <div className={styles.pricing}>
                          <h1>pricing</h1>
                          <p>
                            Monthly&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            $45
                          </p>
                          <p>
                            Yearly&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            $432
                          </p>
                        </div>
                        <div className={styles.timing}>
                          <h1>Timing</h1>
                          <p>Mon - Sat</p>
                          <p>
                            6 am - 9:30 pm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5
                            pm - 9:30 pm
                          </p>
                          <p>
                            Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-8am
                          </p>
                          <p>
                            Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-9am
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Classes;
