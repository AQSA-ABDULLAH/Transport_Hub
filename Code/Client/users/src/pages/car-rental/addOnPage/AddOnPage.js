import React from 'react';
import style from './ExtendedDetail.module.css';
import AddOnsCard from "../../../components/sections/car-rental/add-ons/AddOnsCard"
import BookCarCard from '../../../components/molecules/car-rental/priceCard/BookCarCard';

function AddOnPage() {
  return (
    <div>
        <div className={style.container}>
                <div className={style.addOnContainer}>
                    <AddOnsCard />
                </div>
                <div className={style.priceContainer}>
                    <BookCarCard/>
                </div>
            </div>
    </div>
  )
}

export default AddOnPage