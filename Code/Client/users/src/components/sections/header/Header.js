import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../../atoms/button/Button";
import { FaBars, FaUser, FaAngleDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import useUserAction from "../../../utils/customHooks/useUserAction";

const Navbar = () => {
  const navigate = useNavigate();
  const [Mobile, setMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { reduxState, dispatch, actions } = useUserAction();

  return (
    <>
      <nav className={styles.navbar}>

        <div className={styles.logo_div}>
          <Link to="/">
            <img
              className={styles.logo}
              src=".\assets\logo\logodark.png"
              alt="gym-logo"
            />
          </Link>
        </div>

        <div >
          <ul className={styles.navLinks}>
            <Link to="/">
              <li>HOME</li>
            </Link>

            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className={styles.dropdown}
            >
              SERVICES <FaAngleDown />
              {showDropdown && (
                <ul className={styles.dropdownMenu}>
                  <Link to="">
                    <li>Trip Packages</li>
                  </Link>
                  <Link to="/rental_landing_page">
                    <li>Car rental</li>
                  </Link>
                  <Link to="/shipment_landing_page">
                    <li>Good Shipment</li>
                  </Link>
                  <Link to="">
                    <li>Parcel Pickup</li>
                  </Link>
                </ul>
              )}
            </li>

            <Link to="/blog&news">
              <li>BLOGS & NEWS</li>
            </Link>

            <Link to="/">
              <li>LOYALTY PROGRAM</li>
            </Link>

            <Link to="/contactUs">
              <li>CONTACT US</li>
            </Link>
          </ul>
        </div>

        <div className={styles.button_div}>
          <ul className={styles.navLinks}>
            <Link to="/career">
              <li className={styles.btns}>
                <Button
                  bgColor={"#F78312"}
                  btnText="CAREER"
                  size={"14px"}
                />
              </li>
            </Link>
            <li className={styles.btns}>
              <Button
                bgColor={"#fff"}
                btnText={reduxState.isSignedIn ? " Sign Out" : "Sign Up"}
                textColor={"#F78312"}
                btnClick={
                  reduxState.isSignedIn
                    ? () => dispatch(actions.setSignedOut())
                    : () => navigate("/signup")
                }
                size={"14px"}
                icon={
                  <FaUser
                    size={16}
                    style={{ marginRight: "10px" }}
                    color="#F78312"
                  />
                }
              />
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.mobileScreen}>
        {/* <nav>
          <div className={styles.mobileNavbar}>
            <ul
              className={
                Mobile
                  ? `${styles.navLinksMobile} ${styles.active}`
                  : `${styles.navLinksMobile} ${styles.navLinks}`
              }
              onClick={() => setMobile(false)}
            >
              <Link to="/">
                <li>HOME</li>
              </Link>
              <Link to="/about-us">
                <li>ABOUT US</li>
              </Link>
              <Link to="/classes">
                <li>CLASSES</li>
              </Link>
              <Link to="/gallery">
                <li>GALLERY</li>
              </Link>

              <Link to="/contact-us">
                <li>CONTACT US</li>
              </Link>
              <Link to="/join-membership">
                <li>
                  <button className={styles.btnNavbar}>JOIN MEMBERSHIP</button>
                </li>
              </Link>
              <Link to="/Sign-Up">
                <li>
                  <button className={styles.btnNavbar}>
                    {reduxState.isSignedIn ? " Sign Out" : "Sign Up"}
                  </button>
                </li>
              </Link>
            </ul>
            <button
              className={styles.mobileMenuIcon}
              onClick={() => setMobile(!Mobile)}
            >
              {Mobile ? <ImCross size={32} /> : <FaBars size={32} />}
            </button>
          </div>
        </nav> */}
      </div>
    </>
  );
};

export default Navbar;
