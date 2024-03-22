import React from 'react'
import CarCard from '../../../components/molecules/carRental/carCard/CarCard';
import FiltersCard from '../../../components/molecules/carRental/filterCard/FiltersCard';
import style from "./viewCars.module.css"

export default function ViewCars() {
    return (
        <>
            <div>
                <div className={style.container}>
                <h2>WHICH VEHICLE DO YOU WANT TO DRIVE?</h2>
                    <div className={style.filterContainer}>
                        <FiltersCard />
                    </div>
                    <div className={style.carContainer}>
                        <CarCard />
                        <CarCard />
                        <CarCard /> 
                        {/* <Card/> */}
                    </div>
                </div>
            </div>
        </>
    )
} 
