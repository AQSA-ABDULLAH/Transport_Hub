import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../driver/namesection/drivername.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import both icons here
import transporterStyles from '../../careerpage.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

export default function TransporterName() {
    const navigate = useNavigate();

    const nextRedirect = () => {
      navigate('/transporterRegistration'); 
    };

    const backRedirect = () => {
      navigate('/transporterRegistration'); 
    };
    return (
        <>
            <MediumHeader />
            <section className={styles.container}>
                <div className={styles.formdiv}>
                    <h2>What's your name?</h2>
                    <p>Let us know how to properly address you</p>

                    <form className={`${transporterStyles.input_field} ${styles.inputForm}`}>
                        <input type='text' placeholder='Enter first name' />
                        <input type='text' placeholder='Enter last name' />

                        <div className={`${transporterStyles.button} ${styles.formbutton}`}>
                            <button onClick={backRedirect}><FontAwesomeIcon icon={faArrowLeft} /> BACK</button>
                            <button onClick={nextRedirect}>NEXT <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}



