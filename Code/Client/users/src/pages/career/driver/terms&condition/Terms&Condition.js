import React from 'react';
import careerStyles from '../../careerpage.module.css';
import styles from './terms&condition.module.css'
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';
import { Link } from 'react-router-dom';

export default function TermsCondition() {
    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <MediumHeader />
                    <div className={styles.application_container}>
                        <div className={styles.welcome_section}>
                            <h1>Terms and Conditions</h1>
                            <p>Please review and agree to the documents below.</p>
                        </div>

                        <div className={styles.terms_condition}>
                            <Link to={"/driver_terms_and_conditions"}><h4>Subscription Pass Terms and Conditions</h4></Link>
                            <hr />
                            <Link to={"/driver_terms_and_conditions"}><h4>Services Agreement</h4></Link>
                            <hr />
                        </div>

                        <div className={styles.welcome_section}>
                            <button>Submit Application</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
