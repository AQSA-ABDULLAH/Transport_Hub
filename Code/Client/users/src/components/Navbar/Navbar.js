import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'; 

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container-fluid'>
        <h1 className="navbar-brand"><Link className="logo font-italic" to="/">FoodFrenzy</Link></h1>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" to="/aboutUs">About Us</Link></li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle className="custom-dropdown-toggle" >
                  <Link className="nav-link active" to="/services">Services</Link>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/carRenatal">Car Rental</Dropdown.Item>
                  <Dropdown.Item href="/recreationalTrips">Recreational Trips</Dropdown.Item>
                  <Dropdown.Item href="/goodShipment">Goods Shipment</Dropdown.Item>
                  <Dropdown.Item href="/parcelPickup">Parcel pickup</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item"><Link className="nav-link active" to="/loyaltyProgram">Loyalty Program</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/profile">Blog & News</Link></li>
            <li className="nav-item"> <Link className="nav-link active" to="/manageBooking">FAQs</Link></li>
            <li className="nav-item"> <Link className="nav-link active" to="/career">Career</Link></li>
          </ul>

          <div className="d-flex" >
          {auth ?
            <button><Link className="btn btn-primary" onClick={logout} to="/signUp">Logout</Link></button>
            :
            <>
              <button><Link className="btn btn-primary" to="/signIn">Login</Link></button>
              <button><Link className="btn btn-primary" to="/signUp">Sign Up</Link></button>
            </>
          }
        </div>
        </div>

      </div>
    </nav>
  )
};

export default Navbar;