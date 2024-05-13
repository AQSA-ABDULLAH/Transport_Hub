import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import styles from "./Header.module.css";

const TopHeader = ({ openSidebar, setOpenSidebar }) => {
  return (
    <>
      <section className={styles.topHeader}>
        <div className={styles.hamburger}>
          <LiaBarsSolid
            color="#000000"
            onClick={() => setOpenSidebar(!openSidebar)}
            size={24}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.navbar}></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;
