import React from "react";
import Hero from "../components/sections/hero/Hero";

import Homesection2 from "../components/sections/HomeSection2/Homesection2";
import Homesection3 from "../components/sections/HomeSection3/Homesection3";
import HomeSection5 from "../components/sections/Homesection5/Homesection5";
import Homesection6 from "../components/sections/HomeSection6/Homesection6";
import Homesection7 from "../components/sections/HomeSection7/Homesection7";
import Homesection4 from "../components/sections/HomeSection4/Homesection4";

const Home = () => {
  return (
    <>
      <Hero />
      <Homesection2 />
      <Homesection3 />
      <Homesection4 />
      <HomeSection5 />
      <Homesection6 />
      <Homesection7 />
    </>
  );
};

export default Home;
