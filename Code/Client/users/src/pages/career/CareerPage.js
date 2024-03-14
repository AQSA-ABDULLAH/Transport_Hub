import React from 'react';
import Header from '../../components/sections/career/header/Header'
import styles from './careerpage.module.css';

export default function CareerPage() {
  return (
    <> 
      <div className={styles.careerPage}>
        <Header
          bgImage={
            "./assets/images/career/carrerPage2.jpg"
          } />

      </div>
    </>
  )
}