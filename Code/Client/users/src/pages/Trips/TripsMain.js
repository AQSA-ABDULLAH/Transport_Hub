import React from "react";
import { Dropdown, Card, Button } from "react-bootstrap";

const TripsMain = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/api/trips/TripPackages");
        result = await result.json();
        setProduct(result);
    }
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
      {
                    product.map((item, index) =>
      <div className="row mt-4 mx-3">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="trip2.png" />
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
                <Button variant="primary">View Details</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
        )}
    </div>
  );
};

export default TripsMain;
