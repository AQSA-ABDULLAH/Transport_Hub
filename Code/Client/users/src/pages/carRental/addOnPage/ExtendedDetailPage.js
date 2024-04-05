import React from 'react';
import style from './ExtendedDetail.module.css';
import AddOnsCard from "../../../components/sections/car-rental/add-ons/AddOnsCard"
import RentalPriceCard from '../../../components/molecules/carRental/priceCard/RentalPriceCard';

export default function ExtendedDetailPage() {


    return (
        <>
            <div className={style.container}>
                <div className={style.addOnContainer}>
                    <AddOnsCard />
                </div>
                <div className={style.priceContainer}>
                    <RentalPriceCard />
                </div>
            </div>
        </>
    );
}

