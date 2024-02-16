import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./form.module.css";
import Button from "../atoms/button/Button";
import * as validate from "../../utils/validations/Validations";
const Form = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    classes: "",
    gender: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        if (!validate.name(value))
          setError(name + " cannot have special character or digits");
        else setError("");
        break;
      case "lastName":
        if (!validate.name(value))
          setError(name + " cannot have special character or digits");
        else setError("");
        break;
      case "email":
        if (!validate.email(value))
          setError(" email must fullfill requirements");
        else setError("");

        break;
      case "password":
        if (!validate.password(value))
          setError(name + " must fullfill requirements");
        else setError("");

        break;
      case "confirmPassword":
        if (!validate.password(value))
          setError(name + " must fullfill requirements");
        else setError("");

        break;
      default:
        break;
    }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("collected data", formData, "length is", error.length);

    if (error.length === 0) {
      axios
        .post("http://localhost:8000/api/user/register", formData)
        .then((response) => {
          // Handle the response if needed
          console.log("API response:", response.data);
        })
        .catch((error) => {
          // Handle errors if the API request fails
          console.error("Error:", error);
        });
    }
  };
  return (
    <form action="" className={styles.form}>
      <div className={styles.formRow}>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          id=""
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          id=""
          placeholder="Last Name"
        />
      </div>
      <div className={styles.formRow}>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
        />
        <input
          onChange={handleChange}
          type="tel"
          name="phoneNumber"
          id=""
          placeholder="Phone Number"
        />
      </div>
      <div className={styles.formRow}>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          id=""
          placeholder="Confirm Password"
        />
      </div>
      <div className={styles.formRow}>
        <input
          onChange={handleChange}
          type="text"
          name="addressLine1"
          id=""
          placeholder="Address Line 1"
        />
        <input
          onChange={handleChange}
          type="text"
          name="addressLine2"
          id=""
          placeholder="Address Line 2"
        />
      </div>
      <div className={styles.selectContainer}>
        <div className={styles.select}>
          <label htmlFor="classes" className={styles.label}>
            Classes
          </label>
          <br />
          <select onChange={handleChange} name="classes" id="classes">
            <option value="">Select Classes</option>

            <option value="personal training">Personal Training</option>
          </select>
        </div>
        <div className={styles.select}>
          <label htmlFor="classes" className={styles.label}>
            Gender
          </label>
          <br />
          <select onChange={handleChange} name="gender" id="gender">
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
      </div>
      {error && <p>{error}</p>}
      <div className={styles.btns}>
        <Button
          btnText="Join"
          primary
          bgColor={"#D17831"}
          width={"20%"}
          btnClick={handleSubmit}
        />
        <ul className={styles.socials}>
          <li>
            <img src="./assets/image/membership-form/facebook.png"></img>
          </li>
          <li>
            <img src="./assets/image/membership-form/twitter.png"></img>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default Form;
