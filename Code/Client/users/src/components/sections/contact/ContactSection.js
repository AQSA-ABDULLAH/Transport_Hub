import React from "react";
import Details from "../../molecules/details/Details";
import ContactForm from "../../atoms/contact-form/ContactForm";
import styles from "./ContactStyle.module.css";
const ContactSection = () => {
  return (
    <>
      <>
        <Details />
        <ContactForm />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.2943141342203!2d72.73854477487238!3d33.7530597334702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa7417e508a17%3A0x4009acbccd3bc1a8!2sCapregSoft%20(Private)%20Limited!5e0!3m2!1sen!2s!4v1690459393683!5m2!1sen!2s"
          width="100%"
          height="450"
          loading="lazy"
        />
      </>
    </>
  );
};

export default ContactSection;
