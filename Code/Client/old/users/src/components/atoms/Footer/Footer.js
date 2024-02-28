import React from "react";
import Blogs from "../../Main/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const arrowStyle = {
    fontSize: "0.8em",
    marginRight: "5px",
    fontWeight: "bold",
  };

  const shareUrl = "https://your-website.com"; // replace it with the website URL
  const title = "Check out this awesome content!";
  const sections = [
    {
      heading: "Newsletter",
      content: (
        <div>
          <p>Subscribe to our newsletter for updates.</p>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="button-addon2"
            />
          </div>
          <button
            className="btn"
            type="button"
            id="button-addon2"
            style={{ backgroundColor: "rgb(126 34 206)" }}
          >
            Subscribe
          </button>
        </div>
      ),
    },
    {
      heading: "Quick Links",
      content: (
        <ul className="list-unstyled text-start">
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Home
            </a>
          </li>
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              About Us
            </a>
          </li>
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Services
            </a>
          </li>
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Contact
            </a>
          </li>
        </ul>
      ),
    },
    {
      heading: "Services",
      content: (
        <ul className="list-unstyled ">
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Car Rentals
            </a>
          </li>
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Recreational Trips
            </a>
          </li>
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Goods Shipments
            </a>
          </li>
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Parcel Pickup
            </a>
          </li>
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Drivers
            </a>
          </li>
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Transporters
            </a>
          </li>
          <li>
            <span style={arrowStyle}>&gt;</span>
            <a href="#" className="text-white text-decoration-none ">
              Pickup-boys
            </a>
          </li>
        </ul>
      ),
    },

    {
      heading: "Contact Us",
      content: (
        <>
          <p>
            123 Second Street Fifth Avenue, Manhattan, New York +00 41 258 489
            6587
          </p>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="text-white text-decoration-none "
          >
            aneeqawaheed@gmail.com
          </a>
          <div>
            <p>Share this on social media..</p>
            <div className="d-flex justify-content-center align-items-center">
              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                className="me-3"
              >
                <FontAwesomeIcon icon={faFacebook} style={{ color: "wheat" }} />
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${title}`}
                target="_blank"
                className=" me-3"
              >
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "wheat" }} />
              </a>

              {/* Instagram */}
              <a
                href={`https://www.instagram.com/?url=${shareUrl}`}
                target="_blank"
                className="me-3"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "wheat" }}
                />
              </a>

              {/* Twitter */}
              <a
                href={`https://twitter.com/share?url=${shareUrl}&text=${title}`}
                target="_blank"
                className="me-3"
              >
                <FontAwesomeIcon icon={faTwitter} style={{ color: "wheat" }} />
              </a>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <footer className="bg-dark text-light p-5">
      <Blogs sections={sections} />
    </footer>
  );
}

export default Footer;
