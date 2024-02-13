import React, { useState } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
const PriceCalculator = ({ handleClose }) => {
  const QuantitySelector = ({ label, value, onIncrease, onDecrease }) => {
    return (
      <div className="d-flex align-items-center">
        <Form.Label>{label}:</Form.Label>
        <Button variant="outline-primary" onClick={onDecrease}>
          -
        </Button>
        <Form.Control type="number" value={value} readOnly className="mx-2" />
        <Button variant="outline-primary" onClick={onIncrease}>
          +
        </Button>
      </div>
    );
  };
  const [startDate, setStartDate] = useState(null);
  const currentDate = new Date();
  const [departureCity, setDepartureCity] = useState("Select City");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleAdultsIncrease = () => {
    setAdults(adults + 1);
  };

  const handleAdultsDecrease = () => {
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildrenIncrease = () => {
    setChildren(children + 1);
  };
  const handleChildrenDecrease = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleInfantsIncrease = () => {
    setInfants(infants + 1);
  };

  const handleInfantsDecrease = () => {
    if (infants > 0) {
      setInfants(infants - 1);
    }
  };
  const totalGuests = adults * 300 + children * 200 + infants * 100;

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <Modal show={true} onHide={handleClose} animation={false} dialogClassName="custom-modal">
     <Modal.Body style={{ maxHeight: '80vh', overflowY: 'auto' }}>
    <div className="bg-body-secondary p-3">
      <div className="mb-2 bg-light p-3 border border-1">
        <h2 className="fw-bold mb-4">Trip Package Preview</h2>
      </div>
      <div className="border border-1 my-3 w-100 bg-light p-3 d-flex flex-lg-row justify-content-between align-items-center mb-4">
      <img
            src="./assets/images/Intro/trip1.png"
            alt="Description of the image"
            style={{ maxWidth: '150px', maxHeight: '150px', objectFit: 'contain' }}
            className="me-3 rounded-3"
          />
        <div>
          <h2 className="fw-bold text-start">Trip Title</h2>
          <p className="text-start">
            Description of the trip. Add more details as needed.
          </p>
        </div>
      </div>
      <div className="bg-light border border-1 p-3 mb-4">
        <div className="mx-2">
          <h5>Departure City:</h5>
          <Form.Select
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          >
            <option>Select City</option>
            <option>City 1</option>
            <option>City 2</option>
            <option>City 3</option>
          </Form.Select>
        </div>

        <div className="m-2">
          <h5>Departure Date:</h5>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            className="form-control custom-date-picker"
            placeholderText="Select a date"
            minDate={currentDate}
          />
        </div>

        <div className=" mx-3 my-4">
          <h5 className="mx-4">Guests:</h5>
          <div className="mx-4 my-4">
            <QuantitySelector
              
              label="Adults"
              value={adults }
              onIncrease={handleAdultsIncrease}
              onDecrease={handleAdultsDecrease}
            />
          </div>

          <div className="mx-4 my-4">
            <QuantitySelector
              
              label="Children"
              value={children }
              onIncrease={handleChildrenIncrease}
              onDecrease={handleChildrenDecrease}
            />
          </div>

          <div className="mx-4 my-4">
            <QuantitySelector
              
              label="Infants"
              value={infants }
              onIncrease={handleInfantsIncrease}
              onDecrease={handleInfantsDecrease}
            />
          </div>
        </div>

        <div>
          <h5>Total Price:</h5>
          <p>Rs{totalGuests}</p>
        </div>

        <Button variant="primary">Book Now</Button>
      </div>

      <div className="mt-4 border border-1 bg-light p-3" style={{ maxHeight: '40vh', overflowY: 'auto' }}>
        <h3 className="fw-bold">Detailed Itinerary</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius,
        cum eveniet sed vitae enim impedit totam adipisci minus cupiditate dicta
        consectetur non aspernatur, doloremque nesciunt magnam blanditiis fuga
        debitis deleniti magni voluptatibus vero exercitationem necessitatibus
        officiis. Tempora laboriosam excepturi nobis, quod accusamus quidem
        perferendis dolorem quibusdam laborum, facilis cupiditate, in autem
        officiis. Placeat omnis iusto explicabo, libero cum optio error deleniti
        eum. Repudiandae sunt, dicta laboriosam consectetur quasi velit pariatur
        odit fuga quaerat ex nesciunt perspiciatis provident, dignissimos nobis,
        odio eius maiores incidunt recusandae qui? Quia suscipit qui maxime.
        Atque reiciendis placeat, eum aspernatur, quibusdam mollitia corporis
        rem architecto vel cupiditate omnis praesentium dignissimos, laborum in
        accusamus maiores. Sunt error earum temporibus eligendi ex eius animi
        vero libero, consectetur ad repellat minima sed dolorum non obcaecati
        dolor hic voluptas quos nemo placeat. Exercitationem ab dignissimos,
        quaerat, commodi quasi reiciendis quia esse tenetur quos hic sint, ipsam
        magnam fugit facere porro a ullam! Officiis aspernatur repellat quisquam
        cupiditate hic enim, omnis ipsam dolorum doloribus facilis commodi?
        Perspiciatis autem molestias praesentium nisi ipsa fugiat et, quasi,
        sapiente culpa consequatur commodi quibusdam ullam impedit rerum tempore
        est? Veritatis animi vel obcaecati esse? Odit mollitia ut temporibus
        velit, omnis consequatur? Quo, illo quidem! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Ipsa dolor alias suscipit obcaecati
        corrupti non iste animi incidunt quibusdam nobis veritatis quia a unde,
        perferendis laudantium, sed quasi sit nostrum repellendus placeat quas
        hic deserunt libero! Ipsa vitae eius, ad debitis a itaque. Repellat aut
        aliquam inventore. Consequuntur debitis reiciendis doloribus ratione ab,
        animi labore rem ea perferendis fuga quis excepturi eligendi incidunt
        dolor quasi architecto eaque obcaecati iusto unde mollitia adipisci, aut
        enim. Ratione, animi? Excepturi libero molestias quae illum dolorum
        animi aspernatur quas inventore, vel nobis voluptatum, eum rem magni.
        Saepe laboriosam magnam obcaecati quos quas consectetur incidunt nam
        aliquam vitae earum ut quod porro laborum veniam cupiditate accusantium
        cumque, unde praesentium repellendus inventore molestiae itaque impedit.
        Beatae eaque est sequi, omnis facere quo optio labore id, veniam iure
        consequatur, rem corrupti dolorem tenetur dolore voluptatum! Nulla earum
        magnam modi et perferendis cumque. Pariatur delectus hic eum quibusdam
        eligendi placeat ipsa quis enim ratione nulla, nostrum, obcaecati
        repudiandae. Modi earum, illum iusto consectetur eius molestias
        doloribus, numquam perspiciatis eveniet dolorem eligendi, minus ipsam
        corporis incidunt provident eum sapiente. Praesentium ut impedit ipsum
        laudantium sint pariatur error quisquam maxime dolorem neque
        consequatur, similique est illum! Facere consequuntur suscipit corporis?
        {/* Add more detailed itinerary as needed */}
      </div>
    </div>
      </Modal.Body>
       <Modal.Footer>
       
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
        <Link to="/BookingForm">
        <Button variant="primary">
          Confirm Booking
        </Button>
        </Link>
      </Modal.Footer>
    
    </Modal>
  );
};

export default PriceCalculator;
