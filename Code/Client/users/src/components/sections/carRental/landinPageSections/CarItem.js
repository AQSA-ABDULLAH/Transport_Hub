// CarItem.js
import React from "react";

const CarItem = ({ car }) => {
  return (
    <div className="card">
      <img src={car.imageUrl} className="card-img-top" alt={`Car ${car.id}`} />
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text">Location: {car.location}</p>
      </div>
    </div>
  );
};

export default CarItem;
