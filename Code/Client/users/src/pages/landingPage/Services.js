import React from "react";

import { Dropdown, Card, Button } from "react-bootstrap";
function Services() {
 

  return (
    <div
      className="min-vh-100 d-flex align-items-center "
      style={{ backgroundColor: "rgb(126 34 206)" }}
    >
      <div className="row mt-4 mx-3">
        <h2 className="text-light">Our Servicecs </h2>
        <div className="col m-2">
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-start fs-1">
                Car Rentals
              </Card.Title>
              <Card.Img variant="top" src="./assets/images/Intro/deal1.png" />
              <Card.Text className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                tenetur nemo quam voluptatibus hic non impedit, ad placeat
                debitis laudantium?
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Example Trip Card */}
        <div className="col m-2">
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-start fs-1">
                Recreational Trips
              </Card.Title>
              <Card.Img variant="top" src="./assets/images/Intro/trip1.png" />
              <Card.Text className="text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                autem vero quam non expedita quia iure deleniti est quos! Nam.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col m-2">
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-start fs-1">
                Parcel Pickup
              </Card.Title>
              <Card.Img variant="top" src="./assets/images/Intro/parcelpickup.png" />
              <Card.Text className="text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                autem vero quam non expedita quia iure deleniti est quos! Nam.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col m-2">
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-start fs-1">
                Goods Shipment
              </Card.Title>
              <Card.Img variant="top" src="./assets/images/Intro/goods.png" />
              <Card.Text className="text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                autem vero quam non expedita quia iure deleniti est quos! Nam.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Add more Trip Cards as needed */}
      </div>
    </div>
  );
}

export default Services;
