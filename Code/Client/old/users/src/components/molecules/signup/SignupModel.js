import Navbar from "../../atoms/Navbar/Navbar"
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./signupModel.module.css"
import axios from 'axios';

function SignupModal() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = { fullName, email, phoneNumber, password, city, address };
            const response = await axios.post("https://transport-hub-tawny.vercel.app/api/user/user_signUp", formData);

            // Assuming the server returns a success message in the response
            console.log('Data submitted successfully:', response.data.message);

            // You can also display a success message to the user
            alert('Data submitted successfully!');

            localStorage.setItem("user", JSON.stringify(response));
            navigate("/");
        }
        catch (error) {
            console.error('Error submitting form:', error.message, error.response);

            // You can display an error message to the user
            alert('Error submitting form. Please try again.');
        }
    };


    return (
        <>
            <Navbar />
            <div className={styles.modal_content} >
                
                <div className={styles.image}>
                    <img src="/assets/images/signup/image2.jpg"></img>
                </div>

                <div className={styles.login_form_container}>

                    <form className={styles.login_form} onSubmit={handleSubmit}>
                        <div className={styles.heading}>Sign UP</div>
                        <div className={styles.row}>

                            <input
                                type="text"
                                placeholder="Full Name"
                                className={styles.inputs}
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />



                            <input
                                type="text"
                                placeholder="Phone No"
                                className={styles.inputs}
                                value={phoneNumber}
                                onChange={(e) => setphoneNumber(e.target.value)}
                                required
                            />

                        </div>

                        <div className={styles.row}>

                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.inputs}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />




                            <input
                                type="password"
                                placeholder="Password"
                                className={styles.inputs}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                        </div>

                        <div className={styles.row}>

                            <input
                                type="text"
                                placeholder="city"
                                className={styles.inputs}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />



                            <input
                                type="number"
                                placeholder="Zip Code"
                                className={styles.inputs}
                                required
                            />

                        </div>


                        <input
                            type="text"
                            placeholder="Address"
                            className={styles.teaxtarea}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />


                        <button type="submit" className={styles.button}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignupModal;