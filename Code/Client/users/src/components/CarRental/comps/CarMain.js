import React from "react";
import CarFiltering from "./CarFiltering";
function CarMain({ onFilterApplied }) {
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
          <img src="car1.png" alt="Car 1" style={mainCars} />
          <img src="car2.png" alt="Car 2" style={mainCars} />
          <h2 className="text-light fw-bold">Rent Your Cars</h2>
          <img src="car3.png" alt="Car 3" style={mainCars} />
          <img src="carr4.png" alt="Car 4" style={mainCars} />
        </div>
      </div>
    </>
  );
}
export default CarMain;
