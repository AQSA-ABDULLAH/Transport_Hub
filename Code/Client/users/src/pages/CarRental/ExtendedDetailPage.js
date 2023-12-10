import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CusButton from '../../components/Button/CusButton';
import CarFeaturesModel from './carFeatureModel/CarFeaturesModel'; // Import your modal component

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
            ExtendedDetailPage
            <CusButton primary btnText="Continue" btnClick={openModal} />

            
            
            
            {/* Render the modal if isModalOpen is true */}
            {isModalOpen && (
                <CarFeaturesModel onClose={closeModal} />
            )}
        </>
    );
}

