import React from 'react';
import './Main.css';

import Navbar from "../components/Navbar/Navbar"

function LandingPage() {
  return (
    <div className="landing-page ">
      {/* <Navbar className="nav" /> */}
      <div className="video-container">
        <video autoPlay muted loop id="background-video" className="video-bg">
          <source src="/trans1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="overlay">
        <div className="title-container">
          <h1>Transportation and Logistics</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
