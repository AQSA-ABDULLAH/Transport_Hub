import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./assets/images/Intro/trip1.png"
          alt="First slide"
        />
        <Carousel.Caption className="caption-style">
          <p className="caption-description">
            Experience the world, one journey at a time
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src="./assets/images/Intro/trip2.png" alt="Second slide" />
        <Carousel.Caption className="caption-style">
          <p className="caption-description">
            See the world through fresh eyes
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 " src="./assets/images/Intro/trip3.png" alt="Third slide" />
        <Carousel.Caption className="caption-style">
          <p className="caption-description">Fly The Friendly Skies</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

