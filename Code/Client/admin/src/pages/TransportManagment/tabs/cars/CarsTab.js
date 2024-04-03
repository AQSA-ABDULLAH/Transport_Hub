// Import useEffect from React
import React, { useState } from 'react';
import Button from '../../../../components/atoms/buttons/Button';
import style from './carstab.module.css';
import AddCarForm from '../../../../components/sections/transport-managment/cars/add_car/AddCarForm';
import ViewCars from '../../../../components/sections/transport-managment/cars/view_car/ViewCars';

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

          <div className={style.row}>
            <ViewCars />
          </div>


        </div>
      </div>

      {isAddCarFormVisible && <AddCarForm onClose={closeAddCarForm} />}
    </>
  );
};

export default CarsTab;

