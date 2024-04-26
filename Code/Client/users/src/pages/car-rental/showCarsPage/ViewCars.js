import React from 'react'
import style from "./viewCars.module.css"
import CarCard from '../../../components/molecules/car-rental/carCard/CarCard'

export default function ViewCars() {
    return (
        <>
            <div>
                <div className={style.container}>
                <h2>WHICH VEHICLE DO YOU WANT TO DRIVE?</h2>
                    <div className={style.carContainer}>
                        <CarCard/>
                    </div>
                </div>
            </div>
        </>
    )
} 
