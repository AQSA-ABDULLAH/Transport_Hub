import React from "react";
import style from "./About.module.css";
import Button from "../../atoms/button/Button";
import { aboutdata } from "./data";
import Aboutusatoms from "../../atoms/Aboutusatoms";

const Aboutus = () => {
  return (
    <div className={style.about}>
      <div className={style.aboutContainer}>
        <section className={style.aboutSection1}>
          <div className={style.sectio1Text}>
            <h1 className={style.aboutUsHeading}>WELCOME TO THE BODY DOCTOR</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur id reiciendis et, adipisci quaerat placeat error
              quidem optio. Asperiores est aspernatur dolores temporibus quidem,
              eos excepturi consectetur ipsum atque quod Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Consequuntur id reiciendis et,
              adipisci quaerat placeat error quidem optio. Asperiores est
              aspernatur dolores temporibus quidem, eos excepturi consectetur
              ipsum atque quod
            </p>
            <Button btnText={"JOIN WITH US"} bgColor="#eb4d4b" />
          </div>
          <div className={style.sectio1Message}>
            <img
              className={style.logo}
              src="./assets/logo/LogoDark.png"
              alt="logo img"
            />
            <div className={style.messageContainer}>
              <img
                className={style.comaicon}
                src="./assets/image/about/quote icon.png"
                alt=" comaicon"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                vitae aut illum non facilis distinctio quisquam vero eveniet
              </p>
              <div className={style.author}>
                <p className={style.authorName}>JHON DOE</p>
                <p className={style.authorDesgn}>Dummy text</p>
              </div>
            </div>
          </div>
        </section>

        <div className={style.aboutsection2}>
          <h1>WHY CHOOSE US</h1>
          <section className={style.section2Container}>
            {aboutdata.map((item) => {
              return <Aboutusatoms {...item} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
