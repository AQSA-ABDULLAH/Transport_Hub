import React from "react";
import Cars from "../../../../components/molecules/cars/Cars";
import style from "./carstab.module.css";

const CarsTab = () => {
  return (
    <>
      <div className={style.container} style={{ height: window.innerHeight }}>
        <div className={style.message}>
          <Cars
            heading="Cras"
            img={""}
            carType="Electric Vehicle"
            seats="5"
            transmission="Automatic"
            bags="2"
            Incl="800 KM"
            color="Black"
            fyelType="Petrol, CNG"
            engineType="Hybrid Engines"
            price="900/day"
          />
          <Cars
            heading="Cras"
            img={""}
            carType="Electric Vehicle"
            seats="5"
            transmission="Automatic"
            bags="2"
            Incl="800 KM"
            color="Black"
            fyelType="Petrol, CNG"
            engineType="Hybrid Engines"
            price="900/day"
          />
          <Cars
            heading="Cras"
            img={""}
            carType="Electric Vehicle"
            seats="5"
            transmission="Automatic"
            bags="2"
            Incl="800 KM"
            color="Black"
            fyelType="Petrol, CNG"
            engineType="Hybrid Engines"
            price="900/day"
          />
      </div>
    </div >
    </>
  );
};

export default CarsTab;