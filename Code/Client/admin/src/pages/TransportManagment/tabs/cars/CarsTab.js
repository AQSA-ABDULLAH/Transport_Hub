// Import useEffect from React
import React, { useState, useEffect } from 'react';
import Button from '../../../../components/atoms/buttons/Button';
import Cars from "../../../../components/molecules/cars/Cars";
import style from './carstab.module.css';
import AddCarForm from './AddCarForm';

const CarsTab = () => {
  const [isAddCarFormVisible, setAddCarFormVisible] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch("http://localhost:4000/");
      result = await result.json();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const openAddCarForm = () => {
    setAddCarFormVisible(true);
  };

  const closeAddCarForm = () => {
    setAddCarFormVisible(false);
  };

  return (
    <>
      <div className={style.container} style={{ height: window.innerHeight }}>
        <div className={style.headingContainer}>
          <h2 className={style.heading}>Cars Management</h2>
          <Button btnText="Add New Car" primary btnClick={openAddCarForm} />
        </div>
        <div className={style.message}>

          {/* Flex container for the row of cards */}
          <div className={style.cardRow}>
            {products.map((item, index) => (
              <Cars
                key={index}
                heading={item.carTitle}
                carType={item.carType}
                imageUrl={"./assets/images/cars/SUVs.png"}
                seats={item.numberOfSeats}
                transmission={item.transmission}
                Incl={item.mileLimit}
                more="More"
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>

      {isAddCarFormVisible && <AddCarForm onClose={closeAddCarForm} />}
    </>
  );
};

export default CarsTab;

