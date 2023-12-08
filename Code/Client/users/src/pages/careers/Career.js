import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Header from '../../components/sections/careerSections/careerHeader/Header'
import styles from './career.module.css';
import CareerSection2 from '../../components/sections/careerSections/careerSection2/CareerSection2';
import TransporterSection from '../../components/sections/careerSections/careerSection3/TransporterSection';
import DriverSection from '../../components/sections/careerSections/careerSection4/DriverSection';
import Footer from '../../components/Footer/Footer';

export default function Career() {
  return (
    <>
      <Navbar />
      <div className={styles.careerPage}>
        <Header
          bgImage={
            "./assets/images/career/carrerPage2.jpg"
          }
        />

        <CareerSection2 />

        <TransporterSection
          transportImage="./assets/images/career/13.png"
        />

        <DriverSection
          driverImage="./assets/images/career/13.png"
        />
      </div>
      <Footer />
    </>
  )
}
