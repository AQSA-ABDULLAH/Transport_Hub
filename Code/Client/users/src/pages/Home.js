import React from "react";
import { Card} from "react-bootstrap";
import Hero from "../components/sections/home/hero/Hero";

import Homesection2 from "../components/sections/home/HomeSection2/Homesection2";
import Homesection3 from "../components/sections/home/HomeSection3/Homesection3";
// import HomeSection5 from "../components/sections/Homesection5/Homesection5";
// import Homesection6 from "../components/sections/HomeSection6/Homesection6";
// import Homesection7 from "../components/sections/HomeSection7/Homesection7";
// import Homesection4 from "../components/sections/HomeSection4/Homesection4";

const Home = () => {
  return (
    <>
      <Hero />
      <Homesection2 />
      <Homesection3 />
      {/* <Homesection4 />
      <HomeSection5 />
      <Homesection6 />
      <Homesection7 /> */}

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
      
    </>
  );
};

export default Home;
