import React, { useState, useEffect } from "react";
import { Dropdown, Card, Button } from "react-bootstrap";
import PriceCalculator from "./PriceCalculator";
import axios from "axios";

const TripsMain = () => {
  const [trips, setTrips] = useState([]);
  const [showPriceCalculator, setShowPriceCalculator] = useState(false);

    useEffect(() => {

      axios.get(`http://localhost:5000/api/trips/TripPackages`)
          .then(res => {
              console.log(res.data);
              setTrips(res.data.data);
          })
          .catch(err => {
              console.log(err);
          });
  }, []);

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
        {trips.map((trips, index) => (
          <div className="col-md-4" key={index}>
            <Card>
              <Card.Img variant="top" src={trips.images} />
              <Card.Body>
                <Card.Title className="fw-bold text-start">{trips.category}</Card.Title>
                <Card.Title className="fw-bold text-start">{trips.tripTitle}</Card.Title>
                <Card.Text className="text-start">{trips.description}</Card.Text>
                <div className="d-flex flex-lg-row justify-content-between">
                  <Card.Text className="text-start mr-4">{trips.noOfDays}</Card.Text>
                  <Button variant="primary" on-Click={handleViewDetailsClick}>
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {showPriceCalculator && <PriceCalculator handle-Close={handleClosePriceCalculator} />}
    </div>
  );
};

export default TripsMain;
