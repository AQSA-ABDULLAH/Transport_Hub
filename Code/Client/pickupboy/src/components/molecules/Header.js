import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import Button from '../atoms/buttons/Button'
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const replaceHyphensWithSpaces = (str) => {
  return str.replace(/-/g, " ");
};

const TopHeader = ({ openSidebar, setOpenSidebar,haveButton,ButtonText,onClick }) => {
  const location = useLocation();

  const getPageName = () => {
    const path = location.pathname;
    if (path === "/") {
      return "";
    } else {
      const pageName = path.split("/")[1];
      return capitalizeFirstLetter(replaceHyphensWithSpaces(pageName));
    }
  };

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
        <div className={styles.navbar}>
          <h2>{getPageName()}</h2>
        </div>
        <div>
        {haveButton &&
        <Button btnText={ButtonText || "Add Text"} primary btnClick={onClick}/>
        }
        </div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;
