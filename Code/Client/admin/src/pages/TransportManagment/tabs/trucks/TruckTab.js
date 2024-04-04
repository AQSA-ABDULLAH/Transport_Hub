// Import useEffect from React
import React, { useState } from 'react';
import Button from '../../../../components/atoms/buttons/Button';
import style from '../cars/carstab.module.css';
import AddCarForm from '../../../../components/sections/transport-managment/cars/add_car/AddCarForm';
import ViewCars from '../../../../components/sections/transport-managment/cars/view_car/ViewCars';

const TruckTab = () => {
  const [isAddCarFormVisible, setAddCarFormVisible] = useState(false);

  const openAddCarForm = () => {
    setAddCarFormVisible(true);
  };

  const closeAddCarForm = () => {
    setAddCarFormVisible(false);
  };

  return (
    <>
      <div className={style.transport_container}>
        <div className={style.headingContainer}>
          <h2 className={style.heading}>Truck Management</h2>
          <Button btnText="Add New Truck" 
          primary
          radius={"7px"}
          size={"13px"}
           btnClick={openAddCarForm} />
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

export default TruckTab;