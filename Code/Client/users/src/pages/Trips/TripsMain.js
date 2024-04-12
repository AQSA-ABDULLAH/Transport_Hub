import React, { useState } from "react";
import { Dropdown, Card, Button } from "react-bootstrap";
import PriceCalculator from "./PriceCalculator";

const TripsMain = () => {
  
  const [showPriceCalculator, setShowPriceCalculator] = useState(false);

  const handleViewDetailsClick = () => {
    setShowPriceCalculator(true);
  };

  const handleClosePriceCalculator = () => {
    setShowPriceCalculator(false);
  };
  return (
    <div>
      <div className="d-flex flex-lg-row justify-content-evenly my-3 p-5">
        <h2 className="fw-bold">Trips Packages </h2>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Family Trips</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Group Trips</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Individual Trips</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Custom Trips</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="row mt-4 mx-3">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="./assets/images/Intro/trip2.png" />
            <Card.Body>
              <Card.Title className="fw-bold text-start">
                Trip Title 1
              </Card.Title>
              <Card.Text className="text-start">
                Description of Trip 1. Add more details as needed.
              </Card.Text>
              <div className="d-flex flex-lg-row justify-content-between">
                <Card.Text className="text-start mr-4">
                  5 days and 4 nights
                </Card.Text>
                <Button variant="primary" onClick={handleViewDetailsClick}>
              View Details
            </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Example Trip Card */}
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="./assets/images/Intro/trip1.png" />
            <Card.Body>
              <Card.Title className="fw-bold text-start">
                Trip Title 1
              </Card.Title>
              <Card.Text className="text-start">
                Description of Trip 1. Add more details as needed.
              </Card.Text>
              <div className="d-flex flex-lg-row justify-content-between">
                <Card.Text className="text-start mr-4">
                  5 days and 4 nights
                </Card.Text>
                <Button variant="primary" onClick={handleViewDetailsClick}>
              View Details
            </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="./assets/images/Intro/trip3.png" />
            <Card.Body>
              <Card.Title className="fw-bold text-start">
                Family Trip to Lahore
              </Card.Title>
              <Card.Text className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae?
              </Card.Text>
              <div className="d-flex flex-lg-row justify-content-between">
                <Card.Text className="text-start mr-4">
                  5 days and 4 nights
                </Card.Text>
                <Button variant="primary" onClick={handleViewDetailsClick}>
              View Details
            </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Add more Trip Cards as needed */}
      </div>
      {showPriceCalculator && (
        <PriceCalculator handleClose={handleClosePriceCalculator} />
      )}
    </div>
  );
};

export default TripsMain;
