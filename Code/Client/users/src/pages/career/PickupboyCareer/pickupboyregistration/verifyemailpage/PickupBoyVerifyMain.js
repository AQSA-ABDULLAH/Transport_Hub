import React, { useEffect, useState } from "react";
import SideSection from '../emailpage/PickupBoySideSection';
import styles from "./PickupBoyemailverify.module.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';


export default function PickupBoyVerifyMail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useSelector(state => state.pickupboy.email)

    console.log(email)

    const [otp, setOtp] = useState('');
    const handleOtpChange = (e) => {
        // const inputValue = e.target.value;
        // // Limit input to a maximum of 6 characters
        // if (inputValue.length <= 6 && /^[0-9]*$/.test(inputValue)) {
        //     setOtp(inputValue);
        setOtp(e.target.value);
    };
    const { handleSubmit } = useForm();
    const handleVerifyOTP = async (formData) => {

        console.log(email)
        try {
            
            const response = await fetch('https://transport-hub-tawny.vercel.app/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp:formData.otp }),
            });
            const data = await response.json();
            if (data.success) {
                // setTimeout(() => {
                //     navigate('/3123123')
                // }, 800);
                // Navigate to the next page upon successful verification
                // localStorage.setItem('token', data.token);
                navigate('/pickupboy-detail-page');
            } else {
                // Handle unsuccessful verification
                console.log("Error incorrect otp")
            }
        } catch (error) {
            console.log('Error verifying OTP:', error);
            // Handle error
        }
    };

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
                          
                                <div className={styles.otp_form}>
                                    <h2>OTP Verification</h2>
                                    <p>Enter the Verification code sent to you at {email}</p>
                                </div>
                                <form className={styles.form} onSubmit={handleSubmit(handleVerifyOTP)}>

                                <div className={styles.input_field}>                               
                                <input
                                        type="text"
                                        value={otp}
                                        onChange={handleOtpChange}
                                        maxLength={6}
                                        placeholder="Enter OTP"
                                    />
                                </div>

                                <span className={styles.text}>Tip: Make sure to check your inbox and spam folders</span>
                                <button>Verify OTP</button>
                                </form>
                                
                            
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}