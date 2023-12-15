// Import useEffect from React
import React, { useState, useEffect } from 'react';
import Button from '../../../../components/atoms/buttons/Button';
import Cars from "../../../../components/molecules/cars/Cars";
import Card from "../../../../components/atoms/randomCard/Card"
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

          {/* <Cars
            heading="Car Model XYZ"
            imageUrl="path/to/car-image.jpg"
            seats="5"
            transmission="Automatic"
            Incl="800 KM"
            more="More"
            price="$100/day"
          />
          <Cars
            heading="Car Model ABC"
            imageUrl="path/to/another-car-image.jpg"
            seats="5"
            transmission="Automatic"
            Incl="800 KM"
            more="More"
            price="$120/day"
          />
          <Cars
            heading="Car Model 123"
            imageUrl="path/to/yet-another-car-image.jpg"
            seats="5"
            transmission="Automatic"
            Incl="800 KM"
            more="More"
            price="$90/day"
          /> */}

          <Cars/>
          <Card/>


        </div>
      </div>

      {isAddCarFormVisible && <AddCarForm onClose={closeAddCarForm} />}
    </>
  );
};

export default CarsTab;

