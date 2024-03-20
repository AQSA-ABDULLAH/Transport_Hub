import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './drivername.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import both icons here
import careerStyles from '../../careerpage.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

export default function DriverName() {
    const navigate = useNavigate();

    const backRedirect = () => {
      navigate('/driverRegistration'); 
    };

    const nextRedirect = () => {
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
                        <input type='text' placeholder='Enter first name' />
                        <input type='text' placeholder='Enter last name' />

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



