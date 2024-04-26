import React from 'react';
import { useNavigate } from 'react-router-dom';
import careerStyles from '../../careerpage.module.css';
import styles from './driverlocation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

export default function DriverLocation() {
    const navigate = useNavigate();

    const backRedirect = () => {
      navigate('/driver_name_section'); 
    };

    const nextRedirect = () => {
        // Retrieve the input element for the city
        const cityInput = document.querySelector('input[type="text"][placeholder="City"]');
    
        // Retrieve the value entered by the user for the city
        const city = cityInput.value;
    
        // Store the city in local storage
        localStorage.setItem('driverLocation', city);
    
        // Navigate to the next section of the form (/driver_vechical_selection)
        navigate('/driver_vechical_selection'); 
    };

    
    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <MediumHeader />
                    <div className={styles.location}>
                        <h2>Earn with Transport Hub</h2>
                        <p>Decide when, where, and how you want to earn.</p>
                        <form className={`${careerStyles.input_field} ${styles.inputForm}`}>
                            <h4>Where would you like to earn?</h4>
                            <input type='text' placeholder='City'/>
                        </form>
                        <div className={styles.notice}>
                            <h4>By proceeding, I agree that Transport Hub or its representatives may contact me by email 
                                or SMS (including by automatic telephone dialing system) at the email address
                                or number I provide, including for marketing purposes.</h4>
                        </div>

                        <div className={`${careerStyles.button} ${styles.formbutton}`}>
                            <button onClick={backRedirect}><FontAwesomeIcon icon={faArrowLeft} /> BACK</button>
                            <button onClick={nextRedirect}>NEXT <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
