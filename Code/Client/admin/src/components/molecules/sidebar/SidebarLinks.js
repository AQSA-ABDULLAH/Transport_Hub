import React from "react";
import styles from "./SidebarStyles.module.css";
import { NavLink } from "react-router-dom";
const SidebarLinks = ({ data ,handleLinkClick}) => {
 
  return (
    <div className={styles.linksContainer}>
      {data.map((item, index) => {
        return (
          <NavLink to={`${item.route}`} className={styles.sideLink} key={index } onClick={handleLinkClick}>
            <div className={styles.icon}>{item.icon}</div>
            <p className={styles.linkText}>{item.text}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SidebarLinks;