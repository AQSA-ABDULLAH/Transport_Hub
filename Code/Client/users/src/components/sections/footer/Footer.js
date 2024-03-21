import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>

      <div className={style.footerContainer}>

        <div className={style.NewsLetter}>
        <div className={style.downloadApp}>
            <img
              className={style.logoFooter}
              src=".\assets\logo\logolight.png"
              alt="logo image"
            />
          </div>
          <h3>NEWSLETTER</h3>
          <p className={style.marginBottom}>
            Subscribe to our NewsLetter for updates.
          </p>
          <div className={style.emailDiv}>
            <input type="email" placeholder="Enter your email here" id="" />
            <div className={style.arrow}>
              <img src="./assets/images/footer/.png" alt="arrow img" />
            </div>
          </div>
        </div>


        <div className={style.ourClasses}>
          <h3>QUICK LINKS</h3>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>About Us</li>
            </Link>
            <Link to="/">
              <li>Loyalty Program</li>
            </Link>
            <Link to="/Body-Building">
              <li>Blogs & News</li>
            </Link>
            <Link to="/blog&news">
              <li>Boday Combat</li>
            </Link>
            <Link to="/career">
              <li>Career</li>
            </Link>
          </ul>
        </div>

        <div className={style.ourServices}>
          <h3>SERVICES</h3>
          <ul>
            <Link to="/">
              <li>Car Rental</li>
            </Link>
            <Link to="/">
              <li>Recreational Trips</li>
            </Link>
            <Link to="/">
              <li>Good Shipment</li>
            </Link>
            <Link to="/Body-Building">
              <li>Become a Driver</li>
            </Link>
            <Link to="/blog&news">
              <li>Become a Transporter</li>
            </Link>
            <Link to="/career">
              <li>Become a Pickup-Boy</li>
            </Link>
          </ul>
        </div>
        

        <div className={style.address}>
          <h3>ADDRESS</h3>
          <p className={style.marginBottom}>
            Lorem ipsum dolor sit amet, conse adipisicing elit. Fugit ea
            facere doloremque nisi, voluptatibus repudiandae?
          </p>
          <p className={style.marginBottom}>Email : info@transporthub.com</p>
          <p className={style.marginBottom}>Phone : 123 456 789</p>
          <div className={style.icons}>
            <img
              src="./assets/images/footer/facebook_icon.png"
              alt="facebook-img"
            />
            <img
              src="./assets/images/footer/instagram_icon.png"
              alt="instagram-img"
            />
            <img
              src="./assets/images/footer/linkedin_icon.png"
              alt="linkdin-img"
            />
            <img src="./assets/images/footer/twitter_icon.png" alt="twitter-img" />
          </div>
        </div>

      </div>
      <p className={style.copyright}>
        Copyright 2024. All right reserved by Transport Hub{" "}
      </p>
    </footer>
  );
};

export default Footer;
