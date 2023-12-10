import React from "react";
import { Card, Button } from "react-bootstrap";

const CarItem = () => {
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title>Toyota Camry</Card.Title>
        <Card.Text>
          The Toyota Camry is a reliable and comfortable sedan, perfect for your
          road trips and daily commute.
        </Card.Text>
        <Card.Img variant="top" src="car1.png" alt="Car Image" />
        <div className="mb-3">
          <h6>Upgrades:</h6>
          <div className="d-flex align-items-center">
            <div className="me-2">🚗</div> Automatic Transmission
          </div>
          <div className="d-flex align-items-center">
            <div className="me-2">🔊</div> Premium Sound System
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <Button variant="success">Rent Now</Button>
          <div className="text-muted">$50 per day</div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default CarItem;
