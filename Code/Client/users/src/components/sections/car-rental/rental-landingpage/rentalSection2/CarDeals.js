import React, { useState } from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./carDeals.module.css";

const CarDeals = () => {
  const deals = [
    {
      id: 1,
      title: "Start your week in style",
      description: "Book now and save up to 3 0% on midweek rentals",
      imageUrl: "./deal2.PNG",
    },
    {
      id: 2,
      title: "Rental cars for corporate",
      description: "Secure exclusive advantages and up to 15% discount",
      imageUrl: "./deal3.PNG",
    },
    {
      id: 3,
      title: "Luxury and looks for less",
      description: "Book now and save up to 25% on luxury vehicles",
      imageUrl: "./deal4.PNG",
    },
    {
      id: 4,
      title: "Luxury and looks for less",
      description: "Book now and save up to 25% on luxury vehicles",
      imageUrl: "./car4.png",
    },
    {
      id: 5,
      title: "Deal 5",
      description: "Book now and save up to 25% on luxury vehicles",
      imageUrl: "./deal1.png",
    },
    // Add more deals as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className={style.cardeals_container}>
      <h2>Car Rental Deals </h2>
      <Carousel
        className="additional-deals-slider"
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false} // Disable default Bootstrap indicators
      >
        {[0, 3].map((startIndex, index) => (
          <Carousel.Item key={index}>
            <Row>
              {deals.slice(startIndex, startIndex + 3).map((deal) => (
                <Col key={deal.id} md={4}>
                  <Card className="car-deal m-3 w-30 border-1 p-1">
                    <Card.Body>
                      {/* <Card.Img
                        variant="top"
                        src={deal.imageUrl}
                        alt={deal.title}
                        width="200px"
                        height="150px"
                      /> */}
                      <Card.Title className="fs-5"
                        style={{
                          fontWeight: "600",
                        }}
                      >{deal.title}</Card.Title>
                      <Card.Title className="fs-6"
                       style={{
                        fontWeight: "400",
                        color: "#3B3B4f",
                      }}
                      >
                        {deal.description}
                      </Card.Title>
                      <a
                        href="#"
                        style={{
                          color: "#5a138a",
                          textDecoration: "none",
                          fontWeight: "bold",
                          display: "block",
                          textAlign: "start",
                        }}
                      >
                        <span
                          className="m-1"
                          style={{
                            color: "#5a138a",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          &gt;
                        </span>
                        Book Now
                      </a>
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
        {deals.slice(0, Math.ceil(deals.length / 3)).map((_, index) => (
          <button
            key={index}
            className={`style.carousel_indicator_btn ${index === activeIndex ? "active" : ""}`}

            onClick={() => handleSelect(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarDeals;
