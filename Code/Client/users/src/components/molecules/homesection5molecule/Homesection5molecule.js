import Homesection5atom from "../../atoms/homesection5atoms/Homesection5atom";
import "./section5molecule.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../atoms/button/Button";
import useUserAction from "../../../utils/customHooks/useUserAction";

function Homesection5molecule() {
  const { reduxState, userAction } = useUserAction(() => {
    console.log("user action function");
  });
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  // const accessToken = localStorage.getItem("access_token");

  // Bearer token
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJmNmM3YmM2YmFkYzE3MmVlOWI5NWMiLCJpYXQiOjE2OTAyNjcxNjgsImV4cCI6MTY5MDM1MzU2OH0.qez3ZqUV9XfR5ZE_8JF-9M7aLzPEktVkDQ0RuudowIs";

  useEffect(() => {
    // Axios GET request
    axios
      .get("http://localhost:8000/api/user/get-trainer", {
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
    <div className="main-trainer">
      <div>
        <h2>
          group of <br />
          experience trainers
        </h2>
      </div>
      <div className="trainers-data">
        {data?.map((data, i) => (
          <Homesection5atom key={i} name={data.name} imageurl={data.image} />
        ))}
      </div>
      <div className="trainer-button">
        <Button
          primary
          btnText={reduxState.isSignedIn ? "Check Full Team" : "JOIN WITH US"}
          size={"14px"}
          btnClick={reduxState.isSignedIn ? userAction : toggleIsOpen}
        />
      </div>
    </div>
  );
}
export default Homesection5molecule;
