// Import useEffect from React
import React, { useState } from 'react';
import Button from '../../../../components/atoms/buttons/Button';
import style from '../cars/carstab.module.css';
import ViewCars from '../../../../components/sections/transport-managment/cars/view_car/ViewCars';
import AddTruck from '../../../../components/sections/transport-managment/trucks/add_truck/AddTruck';

const TruckTab = () => {
  const [isAddTruckVisible, setAddTruckVisible] = useState(false);

  const openAddTruckForm = () => {
    setAddTruckVisible(true);
  };

  const closeAddTruckForm = () => {
    setAddTruckVisible(false);
  };

  return (
    <>
      <div className={style.transport_container}>
        <div className={style.headingContainer}>
          <h2 className={style.heading}>TRUCK MANAGEMENT</h2>
          <Button btnText="Add New Truck" 
          primary
          radius={"7px"}
          size={"13px"}
           btnClick={openAddTruckForm} />
        </div>
        <div className={style.message}>

          <div className={style.row}>
            <ViewCars />
          </div>


        </div>
      </div>

      {isAddTruckVisible && <AddTruck onClose={closeAddTruckForm}/> }
    </>
  );
};

export default TruckTab;