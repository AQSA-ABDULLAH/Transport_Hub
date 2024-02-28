import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import { Dropdown } from "react-bootstrap";
import CusButton from "../../Button/CusButton";
import "./Nav.css";
import profileIcon from "./profileicon.jpg";
import Parcelform from "../../Parcel/Parcelform";
import PickupBoyForm from "../../Parcel/PickupBoyForm";
const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/")
  }
  const [showParcelForm, setShowParcelForm] = useState(false);
  const [showPickupBoyForm, setShowPickupBoyForm] = useState(false);
  // Event handler to show ParcelForm
  // const handleParcelItemClick = () => {
  //   setShowParcelForm(true);
  // };

// Event handler to show PickupBoyRegistrationForm
const handlePickupBoyItemClick = () => {
  setShowPickupBoyForm(true);
  setShowParcelForm(false); // Close ParcelForm if open
};
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link
            className="navbar-brand fw-bold fs-3"
            href="#"
            style={{
              color: "#7E22CE",
            }}
          >
            TransportHub
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link text-black fw-bold fs-6 mx-2" href="#">
                  AboutUs
                </Link>
              </li>

              <li className="nav-item ">
                <Dropdown>
                  <Dropdown.Toggle className=" text-black fw-bold fs-6 mx-2 bg-white">
                    Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/LandingCarPage">Car Rentals</Dropdown.Item>
                    <Dropdown.Item href="/tripLandingPage">Recreational Trips</Dropdown.Item>
                    <Dropdown.Item href="/">Goods Shipment</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/parcelform">Parcel pickup</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black fw-bold fs-6 mx-2" href="#">
                  Loyality Program
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black fw-bold fs-6 mx-2" href="/blogs&News">
                  Blogs and News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black fw-bold fs-6 mx-2" href="#">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                
                <CusButton
                  btnText="Career"
                  primary
                  size="16px"
                  radius="4px"
                  textColor="#ffffff"
                />
              </li>
              <li className="nav-item">
              {auth ?
            <button><Link className="btn btn-primary" onClick={logout} to="/signUp">Logout</Link></button>
            :
            <>
              <button><Link className="btn btn-primary" to="/signIn">Login</Link></button>
              <button><Link className="btn btn-primary" to="/signUp">Sign Up</Link></button>
            </>
          }
              </li>
            </ul>
          </div>
        </div>
        <Dropdown>
          <Dropdown.Toggle
            id="profile-dropdown-toggle"
            style={{
              background: "transparent",
              border: "none",
              color: "black",
            }}
          >
            <img
              src={profileIcon}
              alt="Profile"
              className="rounded-circle"
              style={{
                width: "55px", // Adjust the width
                height: "55px", // Adjust the height
                marginRight: "0px",
                backgroundColor: "transparent",
                padding: "-10px",
                borderRadius: "50%", // Adjust the border-radius for a circular shape
                margin: "0px",
              }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{ backgroundColor: "#d36df2", color: "#fafbfc" }}
          >
            <Dropdown.Item href="#">Driver</Dropdown.Item>
            <Dropdown.Item href="#">Transporter</Dropdown.Item>
            <Dropdown.Item onClick={handlePickupBoyItemClick} as={Link} to="/pickupboyform">PickupBoy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
      {showParcelForm && <Parcelform />}
      {showPickupBoyForm && <PickupBoyForm />}
    </>
  );
}

export default Navbar;
