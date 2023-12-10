import React, { useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import CusButton from '../../../components/Button/CusButton';
import CarFeaturesModel from '../carFeatureModel/CarFeaturesModel';
import style from './ExtendedDetail.module.css';
import RentalPriceCard from '../../../components/atoms/CarRental/RentalPriceCard';

export default function ExtendedDetailPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        console.log('Opening modal');
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Navbar />
            <div className={` ${style.container} `}>
                <h2>Choose your add-ons</h2>
                <RentalPriceCard/>
                <CusButton primary btnText="Continue" btnClick={openModal} />
                {isModalOpen && (
                    <CarFeaturesModel onClose={closeModal} />
                )}
            </div>
        </>
    );
}

