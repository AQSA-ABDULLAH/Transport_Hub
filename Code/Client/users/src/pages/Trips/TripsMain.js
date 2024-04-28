import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PriceCalculator from "./PriceCalculator";
import axios from "axios";

const TripsMain = () => {
  const [category, setCategory] = useState('Family');
  const [categoryData, setCategoryData] = useState([]);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [showPriceCalculator, setShowPriceCalculator] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data for category:', category);
        const response = await axios.get('http://localhost:5000/api/trips/TripPackages', {
          params: { category },
        });
        console.log('Response:', response.data);
        setCategoryData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log('Selected category:', event.target.value);
  };

  const handleViewDetailsClick = (id) => {
    setSelectedTripId(id);
    setShowPriceCalculator(true);
  };

  const handleClosePriceCalculator = () => {
    setShowPriceCalculator(false);
  };

  return (
    <div>
      <div className="mb-3 m-4">
        <label htmlFor="category" className="form-label m-5">Select Category:</label>
        <select
          className="form-select"
          name="category"
          onChange={handleCategoryChange}
        >
          <option value="Family">Family</option>
          <option value="Group">Group</option>
          <option value="Individual">Individual</option>
        </select>
      </div>
      {categoryData.length > 0 ? (
        <div className="row mt-4 mx-3">
          {categoryData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Card>
                <Card.Img variant="top" src={item.images} />
                <Card.Body>
                  <Card.Title className="fw-bold text-start">{item.category}</Card.Title>
                  <Card.Title className="fw-bold text-start">{item.tripTitle}</Card.Title>
                  <Card.Text className="text-start">{item.description}</Card.Text>
                  <div className="d-flex flex-lg-row justify-content-between">
                    <Card.Text className="text-start mr-4">{item.noOfDays}</Card.Text>
                    <Button variant="primary" onClick={() => handleViewDetailsClick(item._id)}>
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p>No records found for the selected category.</p>
      )}
      {showPriceCalculator && <PriceCalculator tripId={selectedTripId} handleClose={handleClosePriceCalculator} />}
    </div>
  );
};

export default TripsMain;
