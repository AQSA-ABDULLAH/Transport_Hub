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
  const [showParcelForm, setShowParcelForm] = useState(false);
  const [showPickupBoyForm, setShowPickupBoyForm] = useState(false);
  const handlePickupBoyItemClick = () => {
    setShowPickupBoyForm(true);
    setShowParcelForm(false); // Close ParcelForm if open
  };
    
  
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
                  <Link to="/pickupboyslandingpage">
                    <li>Parcel Pickup</li>
                  </Link>
                  {/* <Dropdown.Item as={Link} to="/parcelform">Parcel pickup</Dropdown.Item> */}
                </ul>
              )}
            </li>

            <Link to="/career">
              <li>CAREER</li>
            </Link>

            <Link to="/">
              <li>LOYALTY PROGRAM</li>
            </Link>

            <Link to="/blog&news">
              <li>BLOGS & NEWS</li>
            </Link>
          </ul>
        </div>

        <div className={styles.button_div}>
          <ul className={styles.navLinks}>
            <Link to="/">
              <li className={styles.btns}>
                <Button
                  primary
                  btnText="Manage Booking"
                  radius={"7px"}
                  size={"13px"}
                />
              </li>
            </Link>
            <li className={styles.btns}>
              <Button
                bgColor={"#e0e0e058"}
                btnText={reduxState.isSignedIn ? " Sign Out" : "Sign Up"}
                textColor={"#7E22CE"}
                radius={"8px"}
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
                    color="#7E22CE"
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
