import React from 'react'
import Header from '../../components/sections/career/careerHeader/Header'
// import styles from './career.module.css';
// import CareerSection2 from '../../components/sections/careerSections/careerSection2/CareerSection2';
// import TransporterSection from '../../components/sections/careerSections/careerSection3/TransporterSection';
// import DriverSection from '../../components/sections/careerSections/careerSection4/DriverSection';

export default function Career() {
    return (
        <>
            <div>
                career
                <Header
                    bgImage={
                        "./assets/images/career/carrerPage2.jpg"
                    } />

                {/* <CareerSection2 />
                <TransporterSection />
                <DriverSection /> */}
            </div>
        </>
    )
}