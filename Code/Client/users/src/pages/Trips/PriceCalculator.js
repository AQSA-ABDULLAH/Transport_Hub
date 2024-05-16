import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useBooking } from "../../context/booking";

const PriceCalculator = ({ handleClose, tripId }) => {
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
  const [stDate, setStDate] = useState(null);
  const currentDate = new Date();
  const [depareCity, setDepareCity] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [tripTitle,setTripTitle] = useState("");
  const [description,setDescription] = useState("");
  const [booking, setBooking] = useBooking();

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
  const totalPrice = adults * 300 + children * 200 + infants * 100;

  const handleDateChange = (date) => {
    setStDate(date);
  };
  const [formData, setFormData] = useState({})
  const [images, setImages] = useState(null);
  const [newPrice,setNewPrice] = useState(0);
    useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/trips/tripDetails/${tripId}`);
        const tripDetails = response.data.data;
        const tripTitle = tripDetails.tripTitle;
        const description = tripDetails.description;
        const images = tripDetails.images;
        console.log(tripDetails);
        Cookies.set('tripTitle', tripTitle.toString());
        Cookies.set('description', description.toString());
        Cookies.set('images', images.toString());
        Cookies.set('tripId', tripId.toString());
        if (tripDetails.images) {
          setImages(tripDetails.images);
        }
        if(tripDetails.price){
          setNewPrice(tripDetails.price);
        }
        setFormData((prevData) => ({
          ...prevData,
          ...tripDetails,
        }));
      } catch (error) {
        console.error('Error fetching trip details:', error);
      }
    };

    fetchTripDetails();
  }, [tripId]);
  const newTotalPrice = totalPrice + newPrice;
  useEffect(() => {
    if (depareCity !== null) {
        Cookies.set('depareCity', depareCity);
    }
    if (stDate !== null) {
        Cookies.set('departureDate', stDate.toString());
    }
    if (adults !== null) {
        Cookies.set('adults', adults.toString());
    }
    if (children !== null) {
        Cookies.set('children', children.toString());
    }
    if (infants !== null) {
        Cookies.set('infants', infants.toString());
    }
    if (totalPrice !== null) {
     
        Cookies.set('totalPrice', newTotalPrice.toString());
    }
}, [depareCity, stDate, adults, children, infants, newTotalPrice]);

  return (
    <Modal show={true} onHide={handleClose} animation={false} dialogClassName="custom-modal">
     <Modal.Body style={{ maxHeight: '80vh', overflowY: 'auto' }}>
    <div className="bg-body-secondary p-3">
      <div className="mb-2 bg-light p-3 border border-1">
        <h2 className="fw-bold mb-4">{formData.category} Trip Package</h2>
      </div>
      <Link to={`/tripDetails/${tripId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="border border-1 my-3 w-100 bg-light p-3 d-flex flex-lg-row justify-content-start align-items-center mb-4">
      <img
            src={images}
            alt="Description of the image"
            style={{ maxWidth: '150px', maxHeight: '150px', objectFit: 'contain' }}
            className="me-3 rounded-3"
          />
        <div>
          <h2 className="fw-bold text-start">{formData.tripTitle}</h2>
          <p className="text-start">
            {formData.description}
          </p>
        </div>
      </div>
      </Link>
      <div className="bg-light border border-1 p-3 mb-4">
        <div className="mx-2">
          <h5>Departure City:</h5>
          <Form.Select
            value={depareCity}
            onChange={(e) => setDepareCity(e.target.value)}
          >
            <option>Select City</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="faisalabad">faisalabad</option>
          </Form.Select>
        </div>

        <div className="m-2">
          <h5>Departure Date:</h5>
          <DatePicker
            selected={stDate}
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
          <p>Trip Price is <span className="fw-semibold">Rs {formData.price}</span> so after adding the guests the total price is</p>
          <p className="fw-semibold">Rs {totalPrice + formData.price}</p>
        </div>
      </div>

      <div className="mt-4 border border-1 bg-light p-3" style={{ maxHeight: '40vh', overflowY: 'auto' }}>
        <h3 className="fw-bold">Detailed Itinerary</h3>
                  Day 1: Arrival in Paradise City
          Arrive at Paradise City International Airport.
          Transfer to your hotel and check-in.
          Welcome dinner at a local restaurant.
          Day 2: Exploring the City
          Breakfast at the hotel.
          Guided tour of the city, including visits to iconic landmarks and attractions.
          Lunch at a traditional restaurant.
          Free time in the afternoon to explore the city at your own pace.
          Optional evening activity (not included in the package).
          Day 3: Adventure Day
          Breakfast at the hotel.
          Excursion to the nearby mountains for hiking and adventure activities.
          Picnic lunch in the mountains.
          Return to the city in the late afternoon.
          Dinner at a local restaurant.
          Day 4: Cultural Immersion
          Breakfast at the hotel.
          Visit to a local market for a cultural experience.
          Cooking class to learn how to prepare traditional dishes.
          Lunch with the dishes you prepared.
          Afternoon visit to a local cultural center or museum.
          Farewell dinner with a traditional dance performance.
          Day 5: Departure
          Breakfast at the hotel.
          Transfer to the airport for your departure flight.
        {/* Add more detailed itinerary as needed */}
      </div>
    </div>
      </Modal.Body>
       <Modal.Footer>
       
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
        <Link to={`/BookingForm/${tripId}`}>
  <Button variant="primary" >Confirm Booking</Button>
</Link>

      </Modal.Footer>
    
    </Modal>
  );
};

export default PriceCalculator;
