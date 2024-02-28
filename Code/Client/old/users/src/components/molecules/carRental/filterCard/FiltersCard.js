import React from 'react';
import style from "./filtersCard.module.css"

export default function FiltersCard() {
  return (
    <div className={style.filters_card}>
      <h2>Filter Options</h2>

      <div className="filter-item">
        <label>Brand:</label>
        <select>
          <option value="all">All</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          {/* Add more brand options as needed */}
        </select>
      </div>

      <div className="filter-item">
        <label>Price Range:</label>
        <input type="range" min="0" max="100000" step="1000" />
      </div>

      <div className="filter-item">
        <label>Fuel Type:</label>
        <select>
          <option value="all">All</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          {/* Add more fuel type options as needed */}
        </select>
      </div>
    </div>
  );
}

