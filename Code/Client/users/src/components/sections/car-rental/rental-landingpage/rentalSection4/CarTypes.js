import React from "react";
import CustomCarousel from "./CustomCarousel";

const CarTypes = () => {
  const items = [
   {
      id: 1,
      title: "SUVs",
      imageUrl: "./assets/images/cars/SUVs.png",
    },
    {
      id: 2,
      title: "Pickup Truks",
      imageUrl: "./assets/images/cars/PickupTrucks.PNG",
    },
    {
      id: 3,
      title: "Passenger Van",
      imageUrl: "./assets/images/cars/PassengerVan.PNG",
    },
    {
      id: 4,
      title: "Guarented Models",
      imageUrl: "./assets/images/cars/GuarentedModels.PNG",
    },
    {
      id: 5,
      title: "Mini Vans",
      imageUrl: "./assets/images/cars/Minivans.PNG",
    },
    {
      id: 6,
      title: "Four Wheel Drive",
      imageUrl: "./assets/images/cars/FourWheelDrive.PNG",
    },
    {
      id: 7,
      title: "Electric Cars",
      imageUrl: "./assets/images/cars/ElectricCars.PNG",
    },
    {
      id: 8,
      title: "Convertibles",
      imageUrl: "./assets/images/cars/CONVERTIBLES.png",
    },
  ];

  return (
    <div className="App">
      <h1>Custom Carousel Example</h1>
      <CustomCarousel items={items} />
    </div>
  );
};

export default CarTypes;
