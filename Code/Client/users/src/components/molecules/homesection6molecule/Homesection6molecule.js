import Homesection6atoms from "../../atoms/homesection6atoms/Homesection6atom";
import "./section6molecule.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Homesection6molecule() {
  const [data, setData] = useState([]);

  // Bearer token
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJmNmM3YmM2YmFkYzE3MmVlOWI5NWMiLCJpYXQiOjE2OTAyNjcxNjgsImV4cCI6MTY5MDM1MzU2OH0.qez3ZqUV9XfR5ZE_8JF-9M7aLzPEktVkDQ0RuudowIs";

  useEffect(() => {
    // Axios GET request
    axios
      .get("http://localhost:8000/api/user/get-package", {
        headers: {
          Authorization: `Bearer ${bearerToken}`, // Set the Authorization header with the bearer token
        },
      })
      .then((response) => {
        // Handle the successful response here
        setData(response.data.data); // Store the data in the state
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="outter-container">
      <div className="Header-text">
        check out
        <br />
        our affordable packages
      </div>
      <div className="main-container">
        <div className="banner"></div>
        {data.map((data, i) => (
          <Homesection6atoms key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Homesection6molecule;
