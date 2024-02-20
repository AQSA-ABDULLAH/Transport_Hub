import React from "react";
import Membership from "../components/LoginModal/signup/Signup";
import styles from "../components/LoginModal/signup/signup.module.css";

const Signup = () => {
  return (
    <div className={styles.background}>
      <Membership />
    </div>
  );
};

export default Signup;
