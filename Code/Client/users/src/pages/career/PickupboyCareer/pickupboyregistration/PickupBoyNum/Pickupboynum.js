import React from 'react';
import { useNavigate } from 'react-router-dom';
import careerStyles from '../../../careerpage.module.css';
import styles from '../PickupboyCity/Pickupboylocation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MediumHeader from '../../../../../components/sections/header-medium/MediumHeader';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { choosePhoneNumber } from '../../../../../redux/containers/pickupboyreg/reducer';
export default function Pickupboynum() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const { register, handleSubmit } = useForm(); 
    const backRedirect = () => {
      navigate('/'); 
    };

    const onSubmit = data => {
         // Get the value of the city from the form data
        dispatch(choosePhoneNumber(data.phoneNumber));
        navigate("/pickupboy-cnic"); // Redirect to the next page
    };

    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <MediumHeader />
                    <div className={styles.location}>
                        <h2>What's your Phone number?</h2>
                        <p>Let us know where to contact you</p>
                        <form className={`${careerStyles.input_field} ${styles.inputForm}`}  onSubmit={handleSubmit(onSubmit)}>
                            <input type='number' placeholder='+923185031361'  {...register('phoneNumber')} />
                        
                    

                        <div className={`${careerStyles.button} ${styles.formbutton}`}>
                            <button onClick={backRedirect}><FontAwesomeIcon icon={faArrowLeft} /> BACK</button>
                            <button>NEXT <FontAwesomeIcon icon={faArrowRight} /></button>                           
                        </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
