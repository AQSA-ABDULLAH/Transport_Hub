import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Dropdown } from 'react-bootstrap'; 
import '../CSS/style.css'; 
export default function Navbar(props) {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li class="nav-item dropdown">
        <Dropdown>
      <Dropdown.Toggle className="custom-dropdown-toggle" >
        {props.services}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Car Rentals</Dropdown.Item>
        <Dropdown.Item href="/">Recreational Trips</Dropdown.Item>
        <Dropdown.Item href="/">Goods Shipment</Dropdown.Item>
        <Dropdown.Item href="/">Parcel pickup</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">{props.LP}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">{props.MS}</a>
        </li>
      </ul>
      <div class="d-flex" >
        <button class="btn btn-outline-success mx-3" type="submit">{props.Subscribe}</button>
        <button class="btn btn-primary"> <Link to="/signUp">Signup</Link> </button>
        <button class="btn btn-primary"><Link to="/signIn">{props.Login}</Link></button>
      </div>
    </div>
  </div>
</nav>
      
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    services: PropTypes.string,
    LP: PropTypes.string,
    MS: PropTypes.string,
    Subscribe: PropTypes.string,
    Login: PropTypes.string,
  }
Navbar.defaultProps = {
    home: "Home",
    Login:"Login"
  }
