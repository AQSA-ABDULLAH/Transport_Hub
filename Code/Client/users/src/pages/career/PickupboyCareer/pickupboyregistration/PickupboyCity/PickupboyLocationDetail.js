import React from 'react';
import { useNavigate } from 'react-router-dom';
import careerStyles from '../../../careerpage.module.css';
import styles from './Pickupboylocation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MediumHeader from '../../../../../components/sections/header-medium/MediumHeader';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseCity } from '../../../../../redux/containers/pickupboyreg/reducer';
export default function PickupBoyLocation() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const { register, handleSubmit } = useForm(); 
    const backRedirect = () => {
      navigate('/'); 
    };

    const onSubmit = data => {
        const city = `${data.city} `;
         // Get the value of the city from the form data
         dispatch(chooseCity(city));
        navigate("/pickupboy-number"); // Redirect to the next page
    };

    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <MediumHeader />
                    <div className={styles.location}>
                        <h2>Earn with Transport Hub</h2>
                        <p>Decide when, where, and how you want to earn.</p>
                        <form className={`${careerStyles.input_field} ${styles.inputForm}`}  onSubmit={handleSubmit(onSubmit)}>
                            <h4>Where would you like to earn?</h4>
                            <input type='text' placeholder='City'  {...register('city')} />
                        
                        <div className={styles.notice}>
                            <h4>By proceeding, I agree that Transport Hub or its representatives may contact me by email 
                                or SMS (including by automatic telephone dialing system) at the email address
                                or number I provide, including for marketing purposes.</h4>
                        </div>

                        <div className={`${careerStyles.button} ${styles.formbutton}`}>
                            <button onClick={backRedirect}><FontAwesomeIcon icon={faArrowLeft} /> BACK</button>
                            <button> <FontAwesomeIcon icon={faArrowRight} />NEXT</button>
                            
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
