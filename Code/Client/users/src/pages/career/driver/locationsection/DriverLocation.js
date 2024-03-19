import React from 'react'
import careerStyles from '../../careerpage.module.css';
import styles from './driverlocation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

export default function DriverLocation() {
    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <MediumHeader />
                    <div className={styles.location}>
                        <h2>Earn with Uber</h2>
                        <p>Decide when, where, and how you want to earn.</p>
                        <form className={`${careerStyles.input_field} ${styles.inputForm}`}>
                            <h4>Where would you like to earn?</h4>
                            <input type='text' />
                        </form>
                        <span>By proceeding, I agree that Uber or its representatives may contact me by email,
                            phone, or SMS (including by automatic telephone dialing system) at the email address
                            or number I provide, including for marketing purposes.</span>

                        <div className={`${careerStyles.button} ${styles.formbutton}`}>
                            <button><FontAwesomeIcon icon={faArrowLeft} /> BACK</button>
                            <button>NEXT <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
