import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.name}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href='/'>Contact Us</a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
      
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
  }
Navbar.defaultProps = {
    
    about: "About"
  }
