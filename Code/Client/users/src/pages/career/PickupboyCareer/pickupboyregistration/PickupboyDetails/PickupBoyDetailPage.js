import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PickupBoyDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import both icons here
import careerStyles from './Pickupboyname.module.css';
import MediumHeader from '../../../../../components/sections/header-medium/MediumHeader';
import { useDispatch } from 'react-redux';
import { chooseName } from '../../../../../redux/containers/pickupboyreg/reducer';
import { useForm } from 'react-hook-form';
export default function PickupBoyDetailPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { register, handleSubmit } = useForm();

    const backRedirect = () => {
        navigate('/');
    };

    const onSubmit = data => {
        const fullName = `${data.firstName} ${data.lastName}`;
        dispatch(chooseName(fullName));
        navigate('/pickupboy-location');
    };

    return (
        <>
        <div className={styles.container}>
            <MediumHeader />
            <section className={styles.container}>
                <div className={styles.formdiv}>
                    <h2>What's your name?</h2>
                    <p>Let us know how to properly address you</p>

                    <form className={`${careerStyles.input_field} ${styles.inputForm}`} onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' placeholder='Enter first name' {...register('firstName')}/>
                        <input type='text' placeholder='Enter last name' {...register('lastName')} />

                        <div className={`${careerStyles.button} ${styles.formbutton}`}>
                            <button onClick={backRedirect}><FontAwesomeIcon icon={faArrowLeft} /> BACK</button>
                            <button >NEXT <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </form>
                </div>
            </section>
            </div>
        </>
    )
}



