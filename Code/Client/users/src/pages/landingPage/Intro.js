// TwoColumnLayout.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useEffect } from "react";
import "./CSS/Intro.css";
function Intro() {
  const truckRef = useRef();

  useEffect(() => {
    const truckElement = truckRef.current;
    const handleScroll = () => {
      const rect = truckElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        truckElement.classList.add("truck");
      } else {
        truckElement.classList.remove("truck");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center my-5">
      <div className="row m-3">
        <div className="col-md-6 d-flex p-3 align-items-center justify-content-center">
          <div>
            <h2 className="h1 fw-bold">TransportHub</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati minima harum aut autem iste, a sapiente architecto ad,
              beatae, odit rem eos animi? Corrupti ab dolore perspiciatis error
              assumenda earum.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div ref={truckRef} className="image-container ">
            <img
              src="./assets/images/Intro/4.png" // Replace with the actual URL of your image
              alt="Right Column"
              className="truck"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
