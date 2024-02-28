
import React from "react";
import MediumHeader from "../components/sections/header-medium/MediumHeader";
import Aboutus from '../components/sections/aboutus/Aboutus'

const About = () => {
  return (
    <>
      <MediumHeader
        bgImage={
          "./assets/image/about/3d-rendering-modern-loft-gym-fitness.png"
        }/>
   <Aboutus/>
    </>
  );
};

export default About;
