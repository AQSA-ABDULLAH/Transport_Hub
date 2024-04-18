import React, { useState, useEffect } from 'react';
import styles from "./quotemode.module.css";

export default function Parcel() {
  const [handlingItems, setHandlingItems] = useState('');
  const [itemWeight, setItemWeight] = useState('');
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: ''
  });

  // Function to update dimension fields
  const handleDimensionChange = (field) => (event) => {
    setDimensions(prev => ({ ...prev, [field]: event.target.value }));
  };

  // UseEffect to save data to local storage
  useEffect(() => {
    const parcelData = {
      handlingItems,
      itemWeight,
      dimensions
    };
    localStorage.setItem('parcelData', JSON.stringify(parcelData));
  }, [handlingItems, itemWeight, dimensions]);

  return (
    <>
      <div className={styles.parcel_row}>
        <div>
          <label>Handling items</label>
          <input 
            type='number' 
            placeholder='e.g. 2' 
            value={handlingItems}
            onChange={(e) => setHandlingItems(e.target.value)} 
          />
        </div>
        <div>
          <label>Item weight</label>
          <input 
            type='number' 
            placeholder='lbs' 
            value={itemWeight}
            onChange={(e) => setItemWeight(e.target.value)} 
          />
        </div>

        <div className={styles.dimensions_row}>
          <div>
            <label>Length</label>
            <input 
              type='number' 
              placeholder='Inches' 
              value={dimensions.length}
              onChange={handleDimensionChange('length')} 
            />
          </div>
          <div>
            <label>Width</label>
            <input 
              type='number' 
              placeholder='Inches' 
              value={dimensions.width}
              onChange={handleDimensionChange('width')} 
            />
          </div>
          <div>
            <label>Height</label>
            <input 
              type='number' 
              placeholder='Inches' 
              value={dimensions.height}
              onChange={handleDimensionChange('height')} 
            />
          </div>
        </div>
      </div>
    </>
  );
}
