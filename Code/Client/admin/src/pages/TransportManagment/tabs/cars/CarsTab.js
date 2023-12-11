// CarsTab.js

import React, { useState } from 'react';
import Button from '../../../../components/atoms/buttons/Button';
import Cars from "../../../../components/molecules/cars/Cars";
import style from './carstab.module.css';
import AddCarForm from './AddCarForm';

const CarsTab = () => {
  const [isAddCarFormVisible, setAddCarFormVisible] = useState(false);

  const openAddCarForm = () => {
    setAddCarFormVisible(true);
  };

  const closeAddCarForm = () => {
    setAddCarFormVisible(false);
  };

  return (
    <>
      <div className={style.container} style={{ height: window.innerHeight }}>
        <div className={style.headingContainer}>
          <h2 className={style.heading}>Cars Management</h2>
          <Button btnText="Add New Car" primary btnClick={openAddCarForm} />
        </div>
        <div className={style.message}>
          
          {/* Flex container for the row of cards */}
          <div className={style.cardRow}>
          <Cars
              heading="Car Model XYZ"
              carType="SUV"
              imageUrl={"./assets/images/cars/SUVs.png"}
              seats="5"
              transmission="Automatic"
              Incl="800 KM"
              more="More"
              price="$100/day"
            />
            <Cars
              heading="Car Model ABC"
              carType="Electric Car"
              imageUrl={"./assets/images/cars/car4.png"}
              seats="5"
              transmission="Automatic"
              Incl="800 KM"
              more="More"
              price="$120/day"
            />
            <Cars
              heading="Car Model 123"
              carType="Convertable"
              imageUrl={"./assets/images/cars/car1.png"}
              seats="5"
              transmission="Automatic"
              Incl="800 KM"
              more="More"
              price="$90/day"
            />
            
            </div>
        </div>
      </div>

      {isAddCarFormVisible && <AddCarForm onClose={closeAddCarForm} />}
    </>
  );
};

export default CarsTab;