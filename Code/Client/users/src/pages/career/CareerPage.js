import React from 'react';
import Header from '../../components/sections/career/header/Header';
import CareerSection2 from '../../components/sections/career/careerSection2/AboutCareer';
import TransporterSection from '../../components/sections/career/careerSection4/TransporterSection';
import DriverSection from '../../components/sections/career/careerSection3/DriverSection';
import styles from './careerpage.module.css';
import PickupboyCareerPage from './PickupboyCareer/PickupboyCareerPage';

export default function CareerPage() {
    return (
        <>
            <div className={styles.careerPage}>
                <Header
                    bgImage={
                        "./assets/images/career/career.jpg"
                    } />

                <CareerSection2 />
                <DriverSection />
                <TransporterSection />
                <PickupboyCareerPage/>
            </div>
        </>
    )
}