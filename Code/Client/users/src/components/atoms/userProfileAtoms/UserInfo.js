import React from "react";
import styles from "./userProfileAtoms.module.css";
import Button from "../button/Button";
const UserInfo = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <article className={styles.avatar}>
            <img src="./favicon.ico" alt="avatar" srcset="" />
          </article>
          <article className={styles.information}>
            <p>ID 34567823</p>
            <h4>James</h4>
            <ul className={styles.infoList}>
              <li>
                <span>
                  <img
                    src="./assets/image/profile/telephone-call_3059502.png"
                    alt="icon"
                  />
                </span>
                <p>123456789</p>
              </li>
              <li>
                <span>
                  <img
                    src="./assets/image/profile/mail_386220.png"
                    alt="icon"
                  />
                </span>
                <p>james@gmail.com</p>
              </li>
              <li>
                <span>
                  <img
                    src="./assets/image/profile/location_535188.png"
                    alt="icon"
                  />
                </span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, at.
                </p>
              </li>
              <li>
                <span>
                  <img
                    src="./assets/image/profile/gift-box-with-a-bow_66834.png"
                    alt="icon"
                  />
                </span>{" "}
                <p>January 26</p>
              </li>
            </ul>
          </article>
        </div>
        <Button btnText={"SEND MESSAGE"} bgColor={"#f39c12"} />
      </div>
    </>
  );
};

export default UserInfo;
