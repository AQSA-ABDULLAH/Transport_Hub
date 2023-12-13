import React from 'react'
import Navbar from '../../../components/atoms/Navbar/Navbar';
import CarCard from '../../../components/molecules/carRental/carCard/CarCard';
import FiltersCard from '../../../components/molecules/carRental/filterCard/FiltersCard';
import style from "./viewCars.module.css"

export default function ViewCars() {
    return (
        <>
            <div>
                <Navbar />
                <div className={style.container}>
                    <div className={style.filterContainer}>
                        <FiltersCard />
                    </div>
                    <div className={style.carContainer}>
                        <CarCard />
                        <CarCard />
                        <CarCard />
                    </div>
                </div>
            </div>
        </>
    )
}
