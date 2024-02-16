import React from "react";
import MediumHeader from "../components/sections/header-medium/MediumHeader";
import ClassesSection from "../components/sections/classes/Classes";

const Classes = () => {
  return (
    <>
      <MediumHeader
        bgImage={"./assets/image/membership/gym-with-light-wall-treadmill.png"}
      />
      <ClassesSection />
    </>
  );
};

export default Classes;
