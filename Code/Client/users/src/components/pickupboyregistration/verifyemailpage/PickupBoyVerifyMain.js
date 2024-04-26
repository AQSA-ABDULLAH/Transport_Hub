import React, { useEffect, useState } from "react";
import SideSection from '../emailpage/PickupBoySideSection';
import styles from "./PickupBoyemail.module.css";
import { useNavigate } from 'react-router-dom';

export default function PickupBoyVerifyMail() {
    const navigate = useNavigate();

    const handleRedirect = () => {
    //   navigate('/driver_name_section'); 
    };

    useEffect(() => {
        const inputs = document.querySelectorAll("input");

        const handleKeyUp = (e) => {
            const currentInput = e.target,
                nextInput = currentInput.nextElementSibling,
                prevInput = currentInput.previousElementSibling;

            // if the value has more than one character then clear it
            if (currentInput.value.length > 1) {
                currentInput.value = "";
                return;
            }

            if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }

            if (e.key === "Backspace") {
                inputs.forEach((input, index2) => {
                    if (currentInput === input && prevInput) {
                        prevInput.focus();
                    }
                });
            }

            const button = document.querySelector("button");
            if (!inputs[3].disabled && inputs[3].value !== "") {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        };

        inputs.forEach((input) => {
            input.addEventListener("keyup", handleKeyUp);
        });

        // Clean up event listeners when the component unmounts
        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("keyup", handleKeyUp);
            });
        };
    }, []); // Empty dependency array to run the effect only once on mount




    return (
        <>
            <section className={styles.container}>
                <div className={styles.sideSection}>
                    <SideSection />
                </div>

                <div className={styles.mainSection}>
                    <div className={styles.header}>
                        <img src="./assets/images/career/driver_icon.png" alt="" />
                        
                    </div>

                    <div className={styles.heading}>
                        <h2>Create your Transporter Account</h2>
                        <p>Then start your transporter career!</p>
                    </div>
                    <section className={styles.form_container}>
                        <div>
                            <form className={styles.form}>
                                <div className={styles.otp_form}>
                                    <h2>OTP Verification</h2>
                                    <p>Enter the Verification code sent to you at entertainment5834@gmail.com</p>
                                </div>
                                <div className={styles.input_field}>
                                    <input type="number" />
                                    <input type="number" disabled />
                                    <input type="number" disabled />
                                    <input type="number" disabled />
                                    <input type="number" disabled />
                                    <input type="number" disabled />
                                </div>

                                <span className={styles.text}>Tip: Make sure to check your inbox and spam folders</span>
                                <button onClick={handleRedirect}>Verify OTP</button>

                                
                            </form>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}