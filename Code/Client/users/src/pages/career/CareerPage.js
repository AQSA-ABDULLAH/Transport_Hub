import React from 'react';
import Header from '../../components/sections/career/header/Header';
import CareerSection2 from '../../components/sections/career/careerSection2/AboutCareer';
import TransporterSection from '../../components/sections/careerSections/careerSection3/TransporterSection';
import DriverSection from '../../components/sections/careerSections/careerSection4/DriverSection';
import styles from './careerpage.module.css';

export default function CareerPage() {
    return (
        <>
            <div className={styles.careerPage}>
                <Header
                    bgImage={
                        "./assets/images/career/carrerPage2.jpg"
                    } />

                <CareerSection2 />
                <TransporterSection />
                <DriverSection />

            </div>
        </>
    )
}