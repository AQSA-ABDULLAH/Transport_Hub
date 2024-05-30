import React from "react";
import SidebarLinks from "./SidebarLinks";
import { Main } from "../../../../constants/Data";
import styles from "./SidebarStyles.module.css";
import { LiaTimesSolid } from "react-icons/lia";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const handleLinkClick = () => {
    if (openSidebar) {
      setOpenSidebar(false);
    }
  };

  return (
    <>
      <aside
        className={`${styles.sidebar} ${
          openSidebar ? `${styles.activeSidebar}` : ""
        } `}
      >
        <div className={styles.logo}>
          <img src="/assets/logo/LogoLight.png" width={160} height={68} alt="Logo" />
        </div>
        <div className={` ${styles.linksBlock} `}>
          <SidebarLinks data={Main} handleLinkClick={handleLinkClick} />
        </div>
  
        <LiaTimesSolid
          className={styles.closeIcon}
          onClick={() => setOpenSidebar(!openSidebar)} // Toggle the state
        />
      </aside>
    </>
  );
};

export default Sidebar;

