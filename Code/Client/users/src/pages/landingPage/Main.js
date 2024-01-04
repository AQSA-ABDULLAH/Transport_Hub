import React from "react";

import "./CSS/Main.css";
import Navbar from "../../components/atoms/Navbar/Navbar";
function Main() {
  return (
    <div className="landing-page ">
      <Navbar />
      <div className="image-container">
      <img
          src="./assets/images/Intro/trans.jpg"  
          alt="Background"
          className="image-bg"
        />
      </div>
      <div className="overlay">
        <div className="title-container">
          <h1>Transportation and Logistics</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
