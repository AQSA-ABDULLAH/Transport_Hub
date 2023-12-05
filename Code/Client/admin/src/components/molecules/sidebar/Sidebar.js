import React from "react";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { AiFillHome } from "react-icons/ai";
import SidebarLinks from "./SidebarLinks";
import { setSignedOut } from "../../../redux/containers/auth/actions";
import { Main, General } from "../../../constants/Data";
import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import styles from "./SidebarStyles.module.css";
const Sidebar = ({ openSidebar, setOpenSidebar }) => {
const dispatch=useDispatch();
  const handleLinkClick = () => {
    if(openSidebar){
    setOpenSidebar(false); 
    } 
  };
  const logout = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out of this session!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(setSignedOut());
            Swal.fire(
                'Logged Out!',
                'You have been logged out.',
                'success'
            );
        }
    });
}

  return (
    <>
      <aside
        className={`${styles.sidebar} ${
          openSidebar ? `${styles.activeSidebar}` : ""
        } `}
      >
        <div className={styles.logo}>
         <img src="/assets/logo/LogoDark.png" width={110} height={110}/>
        </div>

        <div className={styles.spaceY}>
          <NavLink to={"/"} className={styles.sideLink} onClick={handleLinkClick}>
            <div className={styles.icon}>
              <AiFillHome size={20} />
            </div>
            <p className={styles.linkText}>Dashboard</p>
          </NavLink>
        </div>

        {/* Data.js->Main */}
        <div className={` ${styles.linksBlock} `}>
          <SidebarLinks data={Main}  handleLinkClick={handleLinkClick}/>
        </div>

        {/* Data.js->General */}
        <div className={`${styles.linksBlock} `}>
          <h5 className={styles.headingText}>General Settings</h5>
          <SidebarLinks data={General}   handleLinkClick={handleLinkClick}/>
        </div>

        <button className={styles.btn} onClick={()=>logout()}>logout</button>
        <LiaTimesSolid
          className={styles.closeIcon}
          color="#000"
          onClick={() => setOpenSidebar(!openSidebar)}
        />
      </aside>
    </>
  );
};

export default Sidebar;