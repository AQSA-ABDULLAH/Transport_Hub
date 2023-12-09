import React, { useState } from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CarDeals.css";

const CarTypes = () => {
  const deals = [
    {
      id: 1,
      title: "SUVs",
      imageUrl: "./SUVS.png",
    },
    {
      id: 2,
      title: "Pickup Truks",
      imageUrl: "./PickupTrucks.PNG",
    },
    {
      id: 3,
      title: "Passenger Van",
      imageUrl: "./PassengerVan.PNG",
    },
    {
      id: 4,
      title: "Guarented Models",
      imageUrl: "./GuarentedModels.PNG",
    },
    {
      id: 5,
      title: "Mini Vans",
      imageUrl: "./Minivans.PNG",
    },
    {
      id: 6,
      title: "Four Wheel Drive",
      imageUrl: "./FourWheelDrive.PNG",
    },
    {
      id: 7,
      title: "Electric Cars",
      imageUrl: "./ElectricCars.PNG",
    },
    {
      id: 8,
      title: "CONVERTIBLES",
      imageUrl: "./CONVERTIBLES.png",
    },
  ];

  const carsPerSlide = 6; // Number of cars to display per slide
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex * carsPerSlide);
  };

  return (
    <Container className="car-deals-container my-3">
      <h2>Car Types</h2>
      <Carousel
        className="additional-deals-slider"
        activeIndex={activeIndex / carsPerSlide}
        onSelect={handleSelect}
        interval={null} // Disable automatic sliding
        indicators={false}
        nextIcon={<span className="custom-arrow">&#10095;</span>} // Customize next arrow
        prevIcon={<span className="custom-arrow">&#10094;</span>} // Customize prev arrow
      >
        {[...Array(Math.ceil(deals.length / carsPerSlide))].map((_, index) => (
          <Carousel.Item key={index}>
            <Row>
              {deals
                .slice(index * carsPerSlide, (index + 1) * carsPerSlide)
                .map((deal) => (
                  <Col key={deal.id} xs={6} sm={4} md={2} lg={2}>
                    {/* Adjust the width based on your design */}
                    <Card className="car-deal m-3 w-100 border-0">
                      <Card.Body>
                        <Card.Img
                          variant="top"
                          src={deal.imageUrl}
                          alt={deal.title}
                          width="80px"
                          height="80px"
                        />
                        <Card.Title className="fs-6">{deal.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom slide indicators */}
      <div className="text-center mt-3">
        {[...Array(Math.ceil(deals.length / carsPerSlide))].map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator-btn ${
              index === activeIndex / carsPerSlide ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index * carsPerSlide)}
          ></button>
        ))}
      </div>
    </Container>
  );
};

export default CarTypes;
