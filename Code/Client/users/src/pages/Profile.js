import React from "react";
import styles from "../components/sections/membership/Membership.module.css";
import UserProfile from "../components/sections/userProfile/UserProfile";
const Profile = () => {
  return (
    <>
      <section className={styles.membershipContainer}>
        <UserProfile />
      </section>
    </>
  );
};

export default Profile;
