import React from 'react';
import { useNavigate } from 'react-router-dom';
import careerStyles from '../../careerpage.module.css';
import styles from './terms&condition.module.css'
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function TermsCondition() {
    const navigate = useNavigate();
    
    const handleAgreeButtonClick = () => {
        // Set driver_terms_condition to true in local storage
        localStorage.setItem('driver_terms_condition', 'true');
        
        // Show SweetAlert2 confirmation
        Swal.fire({
            icon: 'success',
            title: 'Agreement Confirmed',
            text: 'You have agreed to the terms and conditions.',
        });

        // Navigate to driver application form
        navigate('/driver_application_form');
    }

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
                            <Link to={"#"}><h4>Subscription Pass Terms and Conditions</h4></Link>
                            <hr />
                            <Link to={"#"}><h4>Services Agreement</h4></Link>
                            <hr />
                        </div>
                    </div>
                    <div className={careerStyles.application_footer}>
                        <button onClick={handleAgreeButtonClick}>Yes, I agree</button>
                    </div>
                </div>
            </div>
        </>
    )
}
