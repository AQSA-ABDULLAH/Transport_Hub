import React from "react";
import CarFiltering from "./CarFiltering";
function CarMain({ onFilterApplied, car1Image, car4Image }) {
  const mainCars = {
    width: "300px",
    height: "200px",
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(126, 34, 206)",
          padding: "20px",
          width: "100%",
        }}
      >
        <CarFiltering onFilterApplied={onFilterApplied} />
        <div className="d-flex justify-content-center align-items-center">
          <img src={car1Image} alt="Car 1" style={mainCars} />
          <img src={car4Image} alt="Car 2" style={mainCars} />
          <h2 className="text-light fw-bold">Rent Your Cars</h2>
          <img src={car4Image} alt="Car 3" style={mainCars} />
          <img src={car4Image} alt="Car 4" style={mainCars} />
        </div>
      </div>
    </>
  );
}
export default CarMain;