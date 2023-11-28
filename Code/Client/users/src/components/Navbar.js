// import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
// import { Dropdown } from 'react-bootstrap'; 
// import '../CSS/style.css'; 

// export default function Navbar(props) {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
//         </li>
//         <li className="nav-item dropdown">
//         <Dropdown>
//       <Dropdown.Toggle className="custom-dropdown-toggle" >
//         {props.services}
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="/">Car Rentals</Dropdown.Item>
//         <Dropdown.Item href="/">Recreational Trips</Dropdown.Item>
//         <Dropdown.Item href="/">Goods Shipment</Dropdown.Item>
//         <Dropdown.Item href="/">Parcel pickup</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">{props.LP}</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">{props.MS}</a>
//         </li>
//       </ul>
//       <div className="d-flex" >
//         <button className="btn btn-outline-success mx-3" type="submit">{props.Subscribe}</button>
//         <button className="btn btn-primary"> <Link to="/signUp">Signup</Link> </button>
//         <button className="btn btn-primary"><Link to="/signIn">{props.Login}</Link></button>
//       </div>
//     </div>
//   </div>
// </nav>

//     )
// }
// Navbar.propTypes = {
//     title: PropTypes.string,
//     home: PropTypes.string,
//     services: PropTypes.string,
//     LP: PropTypes.string,
//     MS: PropTypes.string,
//     Subscribe: PropTypes.string,
//     Login: PropTypes.string,
//   }
// Navbar.defaultProps = {
//     home: "Home",
//     Login:"Login"
//   }



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate("/")
  }

  return (
    <nav>
      <div className='nav-container'>
        <h1><Link className="logo font-italic" to="/">FoodFrenzy</Link></h1>
        <ul>
          <li><Link to="/aboutUs">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/loyaltyProgram">Loyalty Program</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/manageBooking">Manage Booking</Link></li>
        </ul>

        {auth ?
          <button><Link onClick={logout} to="/signUp">Logout</Link></button>
          :
          <button><Link to="/signIn">Login</Link></button>
        }


      </div>
    </nav>
  )
};

export default Navbar;