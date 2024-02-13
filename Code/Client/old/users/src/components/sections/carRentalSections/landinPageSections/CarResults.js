// CarResults.js
import React from "react";
import CarItem from "./CarItem";

const CarResults = ({ filters }) => {
  // Assume you have a list of cars with details
  const carList = [
    { id: 1, name: "Car 1", pickupLocation: "location1", imageUrl: "car1.png" },
    { id: 2, name: "Car 2", pickupLocation: "location2", imageUrl: "car2.png" },
    { id: 3, name: "Car 3", pickupLocation: "location3", imageUrl: "car3.png" },
    // Add more cars as needed
  ];

  // Apply filtering logic based on the filters
  const filteredCars = carList.filter((car) => {
    // Add your filtering logic here based on the filters object
    return car.pickupLocation === filters.pickupLocation;
  });

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {filteredCars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarResults;
