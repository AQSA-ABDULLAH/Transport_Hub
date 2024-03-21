import React, { useState } from "react";
import "./CustomCarousel.css"; // Import your custom CSS styles

const CustomCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="custom-carousel">
      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>&#10094;</button>
      <button className="next-btn" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default CustomCarousel;
