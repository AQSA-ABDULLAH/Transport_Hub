import React from "react";
import CustomCarousel from "./CustomCarousel";

const CarTypes = () => {
  const items = [
    {
      id: 1,
      title: "Item 1",
      imageUrl: "./assets/images/item1.jpg",
    },
    {
      id: 2,
      title: "Item 2",
      imageUrl: "./assets/images/item2.jpg",
    },
    // Add more items as needed
  ];

  return (
    <div className="App">
      <h1>Custom Carousel Example</h1>
      <CustomCarousel items={items} />
    </div>
  );
};

export default CarTypes;
