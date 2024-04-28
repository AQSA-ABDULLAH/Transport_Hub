import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './drivername.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import both icons here
import careerStyles from '../../careerpage.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

export default function DriverName() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        driverFirstName: '',
        driverLastName: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const backRedirect = () => {
        navigate('/driverRegistration');
    };

    const nextRedirect = (event) => {
        event.preventDefault();

        // Store first and last name in local storage
        localStorage.setItem('driver_name', JSON.stringify(formData));

        navigate('/driver_location_section');
    };

    return (
        <>
            <MediumHeader />
            <section className={styles.container}>
                <div className={styles.formdiv}>
                    <h2>What's your name?</h2>
                    <p>Let us know how to properly address you</p>

                    <form className={`${careerStyles.input_field} ${styles.inputForm}`}>
                        <input placeholder='Enter first name'
                            type="text"
                            id="driverFirstName"
                            name="driverFirstName"
                            required
                            onChange={handleChange} />
                        <input placeholder='Enter last name'
                            type="text"
                            id="driverLastName"
                            name="driverLastName"
                            required
                            onChange={handleChange}
                        />

                        <div className={`${careerStyles.button} ${styles.formbutton}`}>
                            <button onClick={backRedirect}><FontAwesomeIcon icon={faArrowLeft} /> BACK</button>
                            <button onClick={nextRedirect}>NEXT <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}



