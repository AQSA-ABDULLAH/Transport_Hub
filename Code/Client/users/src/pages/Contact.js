import React from "react";
import ContactSection from "../components/sections/contact/ContactSection";
import MediumHeader from "../components/sections/header-medium/MediumHeader";
const Contact = () => {
  return (
    <>
      <MediumHeader
        bgImage={
          "./assets/image/contact/3d-render-grunge-room-interior-with-foggy-atmosphere.png"
        }
      />
        <ContactSection />
    </>
  );
};

export default Contact;
