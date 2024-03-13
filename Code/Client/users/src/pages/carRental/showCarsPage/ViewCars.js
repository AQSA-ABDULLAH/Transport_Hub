import React from 'react'
import CarCard from '../../../components/molecules/carRental/carCard/CarCard';
// import Card from "../../../components/randomCard/Card"
import FiltersCard from '../../../components/molecules/carRental/filterCard/FiltersCard';
import style from "./viewCars.module.css"

export default function ViewCars() {
    return (
        <>
            <div>
                <div className={style.container}>
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
