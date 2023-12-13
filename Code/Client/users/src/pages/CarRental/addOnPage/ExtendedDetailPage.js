import React from 'react';
import Navbar from '../../../components/atoms/Navbar/Navbar';
import style from './ExtendedDetail.module.css';
import AddOnsCard from "../../../components/molecules/carRental/addOns/AddOnsCard"
import RentalPriceCard from '../../../components/molecules/carRental/priceCard/RentalPriceCard';

export default function ExtendedDetailPage() {


    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.addOnContainer}>
                    <h2>Choose your add-ons</h2>
                    <AddOnsCard />
                </div>
                <div className={style.priceContainer}>
                    <RentalPriceCard />
                </div>
            </div>
        </>
    );
}

