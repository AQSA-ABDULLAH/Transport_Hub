import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEdit } from "@fortawesome/free-solid-svg-icons";

function ManageCars() {
  return (
    <>
      <div
        className="my-5 px-5 py-5"
        style={{
          backgroundColor: "rgb(126, 34, 206)",

          width: "100%",
        }}
      >
        <h3 className="text-light text-start mb-3">
          Already Have A Reservation?{" "}
        </h3>
        <div className="row g-0">
          <div className="col-12 col-md-6 d-flex flex-row mb-3">
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                color: "white",
                backgroundColor: "orange",
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "30px",
              }}
            />

            <div className="ms-3 text-start">
              <label className="text-light fs-6 fw-bold">
                Search reservation
              </label>
              <p
                className="text-light "
                style={{
                  fontSize: "15px",
                }}
              >
                Started out with a fleet of just three vehicles. As one of the
                first and most influential
              </p>
              <a
                href="#"
                style={{
                  color: "#d47c08",
                  fontSize: "15px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "block",
                  textAlign: "start",
                  marginTop: "10px",
                }}
              >
                Look Up for Reservation
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex flex-row">
            <FontAwesomeIcon
              icon={faEdit}
              style={{
                color: "white",
                backgroundColor: "orange",
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "30px",
              }}
            />

            <div className="ms-3 text-start">
              <label className="text-light fs-6 fw-bold">
                Edit Reservation
              </label>
              <p
                className="text-light "
                style={{
                  fontSize: "15px",
                }}
              >
                Started out with a fleet of just three vehicles. As one of the
                first and most influential
              </p>
              <a
                href="#"
                style={{
                  color: "#d47c08",
                  fontSize: "15px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "block",
                  textAlign: "start",
                  marginTop: "10px",
                }}
              >
                Manage Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageCars;
