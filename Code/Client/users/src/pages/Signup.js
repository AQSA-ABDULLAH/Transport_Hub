import React from "react";
import Membership from "../components/sections/membership/Membership";
import styles from "../components/sections/membership/Membership.module.css";

const Signup = () => {
  return (
    <div className={styles.background}>
      <Membership />
      Signup page
    </div>
  );
};

export default Signup;
