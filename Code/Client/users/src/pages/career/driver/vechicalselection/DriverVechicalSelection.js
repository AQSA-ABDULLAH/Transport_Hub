import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import careerStyles from '../../careerpage.module.css';
import styles from './drivervechicalsection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

export default function DriverVechicalSection() {
    const [selectedType, setSelectedType] = useState('');

    const handleTypeSelection = (type) => {
        setSelectedType(type);
    };
    const navigate = useNavigate();

    const backRedirect = () => {
      navigate('/driver_location_section'); 
    };

    const nextRedirect = () => {
        // Store the selected vehicle type in local storage
        localStorage.setItem('driverVehicleType', selectedType);
    
        // Navigate to the next section of the form (/driver_application_form)
        navigate('/driver_application_form'); 
    };
    

    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <MediumHeader />
                    <div className={styles.vechical_selection}>
                        <h2>Choose how you'd like to earn:</h2>
                        <div className={styles.vechial_types}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedType === 'Car'}
                                    onChange={() => handleTypeSelection('Car')}
                                />
                                <h4>Transport Hub Car Driver</h4>
                                <p>You want to drive a four door vehicle on the Transport platform</p>
                            </label>
                        </div>
                        <div className={styles.vechial_types}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedType === 'Truck'}
                                    onChange={() => handleTypeSelection('Truck')}
                                />
                                <h4>Transport Hub Truck Driver</h4>
                                <p>You want to drive a Large Vehicle Like (Truck, Van) on the Transport platform</p>
                            </label>
                        </div>
                        <div className={styles.vechial_types}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedType === 'Logistic'}
                                    onChange={() => handleTypeSelection('Logistic')}
                                />
                                <h4>Transport Hub Logistic Driver</h4>
                                <p>You want to drive Large carriers on the Transport platform</p>
                            </label>
                        </div>

                        <div className={`${careerStyles.button} ${styles.formbutton}`}>
                            <button onClick={backRedirect}><FontAwesomeIcon icon={faArrowLeft} /> BACK</button>
                            <button onClick={nextRedirect}>NEXT <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
