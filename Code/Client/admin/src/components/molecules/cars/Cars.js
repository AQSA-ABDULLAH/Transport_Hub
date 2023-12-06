import React from "react";
import CarCard from "../../atoms/carCard/carCard";
import style from "./Cars.module.css";

const Cars = (props) => {
  return ( 
    <>
      <div className={style.container}>
        <div className={style.mainMessage}>
          <div className={style.messageContainer}>
          <CarCard
              heading={props.heading}
              img={props.img}
              carType={props.carType}
              seats={props.seats}
              transmission={props.transmission}
              bags={props.bags}
              Incl={props.Incl}
              color={props.color}
              fyelType={props.fyelType}
              engineType={props.engineType}
              price={props.price}
            />
          </div> 
        </div>
      </div>
    </>
  );
};

export default Cars;