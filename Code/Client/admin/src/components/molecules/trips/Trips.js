import React, { useState } from 'react';
import Button from '../../atoms/buttons/Button';
import style from './trips.module.css';
import AddTrip from './AddTrip';
import { useActionData } from 'react-router-dom';
import ShowTrips from './ShowTrips';
import EditUser from './EditUser';

const Trips = () => {
  const [isAddTripVisible, setAddTripVisible] = useState(false);

  const openAddTrip = () => {
    setAddTripVisible(true);
  };

  const closeAddTrip = () => {
    setAddTripVisible(false);
  };
  
  return (
    <>
      <div className={style.container} style={{ height: window.innerHeight }}>
        <div className={style.headingContainer}>
          <h2 className={style.heading}>Trips Management</h2>
          <Button btnText="Add New Pacakage" primary btnClick={openAddTrip} />
        </div>
        <div className={style.message}>
          <div className={style.cardRow}>
          <ShowTrips />
            
            
            </div>
        </div>
           
      </div>

      {isAddTripVisible && <AddTrip onClose={closeAddTrip} />}
    </>
  );
};

export default Trips;
