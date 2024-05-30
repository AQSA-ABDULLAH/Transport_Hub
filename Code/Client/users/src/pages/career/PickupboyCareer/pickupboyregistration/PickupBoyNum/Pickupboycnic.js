import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import CNICInput from './CNICInput';
import { chooseCNIC } from '../../../../../redux/containers/pickupboyreg/reducer';
import careerStyles from '../../../careerpage.module.css';
import styles from '../PickupboyCity/Pickupboylocation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MediumHeader from '../../../../../components/sections/header-medium/MediumHeader';
const Pickupboycnic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const { register, handleSubmit,formState: { errors } } = useForm(); 
    const backRedirect = () => {
      navigate('/'); 
    };
  const onSubmit = (data) => {
    dispatch(chooseCNIC(data.cnicNumber));
    navigate("/pickupboy-photo"); // Navigate to the next route after submitting CNIC
  };

  return (
<div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <MediumHeader />
                    <div className={styles.location}>
                        <h1>What is your CNIC</h1>
                        <p>Enter Your CNIC Number: </p>
                        <form className={`${careerStyles.input_field} ${styles.inputForm}`}  onSubmit={handleSubmit(onSubmit)}>                     
                        <input
                           type="text"
                           {...register('cnicNumber', {
                             required: 'CNIC is required',
                             pattern: {
                               value: /^\d{5}-\d{7}-\d$/,
                               message: 'Please enter a valid CNIC number in the format XXXXX-XXXXXXXX-X'
                             }
                           })}
                           placeholder="Enter CNIC (e.g., 37406-9605539-6)"
                         />
                         {errors.cnicNumber && (
                           <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                             {errors.cnicNumber.message}
                           </p>
                         )}        
                        <div className={`${careerStyles.button} ${styles.formbutton}`}>
                            <button onClick={backRedirect}><FontAwesomeIcon icon={faArrowLeft} /> BACK</button>
                            <button>NEXT <FontAwesomeIcon icon={faArrowRight} /></button>                           
                        </div>
                        
                        </form>
                    </div>
                </div>
            </div>
  );
};

export default Pickupboycnic;
