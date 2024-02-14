import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.callusBlogContainer}>
        <img
          className={style.blogimg}
          src=".\assets\image\home\orange bg.png"
          alt="call us blog"
        />
        <p>CALL US:123 456 789</p>
      </div>

      <div className={style.footerContainer}>
        <div className={style.ourClasses}>
          <h3>OUR CLASSES</h3>
          <ul>
            <Link to="/Fitness-classes">
              <li>Fitness Classes</li>
            </Link>
            <Link to="/Aerobics-Class">
              <li>Aerobics Class</li>
            </Link>
            <Link to="Yoga-Classes">
              <li>Yoga Classes</li>
            </Link>
            <Link to="/Body-Building">
              <li>Body Building</li>
            </Link>
            <Link to="/Boday-Combat">
              <li>Boday Combat</li>
            </Link>
            <Link to="/Streching-Classes">
              <li>Streching Classes</li>
            </Link>
          </ul>
        </div>
        <div className={style.address}>
          <h3>ADDRESS</h3>
          <p className={style.marginBottom}>
            Lorem ipsum dolor sit amet, conse adipisicing elit. Fugit ea
            facere doloremque nisi, voluptatibus repudiandae?
          </p>
          <p className={style.marginBottom}>Email:info@thebodydoctor.com</p>
          <p className={style.marginBottom}>Phone:123 456 789</p>
          <div className={style.icons}>
            <img
              src="./assets/image/home/facebook_icon.png"
              alt="facebook-img"
            />
            <img
              src=".\assets\image\home\instagram_1400829.png"
              alt="instagram-img"
            />
            <img
              src=".\assets\image\home\linkedin_icon.png"
              alt="linkdin-img"
            />
            <img src="./assets/image/home/twitter_icon.png" alt="twitter-img" />
          </div>
        </div>
        <div className={style.ourTimings}>
          <h3>OUR TIMIMG</h3>
          <table className={style.timingTable}>
            <tbody>
              <tr>
                <td> Monday-Friday</td>
                <td>05-9pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>05-9pm</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
          {/* <p>Monday-Friday 05-9pm</p>
          <p>Saturday 05-9pm</p>
          <p>Sunday Closed</p> */}
        </div>
        <div className={style.NewsLetter}>
          <h3>NEWSLETTER</h3>
          <p className={style.marginBottom}>
            Lorem, ipsum dolor sit amet conse adipisicing elit. Maxime,
            totam.
          </p>
          <div className={style.emailDiv}>
            <input type="email" placeholder="Enter your email here" id="" />
            <div className={style.arrow}>
              <img src="./assets/image/contact/.png" alt="arrow img" />
            </div>
          </div>
          <div className={style.downloadApp}>
            <img
              className={style.logoFooter}
              src=".\logo192.png"
              alt="logo image"
            />

            <Link to="/">
              <h3>DOWNLOAD APP</h3>
            </Link>
          </div>
        </div>
      </div>
      <p className={style.copyright}>
        Copyright2023. All right reserved by body doctor{" "}
      </p>
    </footer>
  );
};

export default Footer;
