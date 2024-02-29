import React, { useState } from "react";

import Navbar from "../../components/atoms/Navbar/Navbar";
const BookingForm = () => {
  const [passengerDetails, setPassengerDetails] = useState({
    title: [],
    firstName: "",
    lastName: "",
    country: "",
    adults: 0,
    children: 0,
    infants: 0,
  });

  const [contactDetails, setContactDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    CNIC: "",
  });

  const handlePassengerChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checkedTitles = [...passengerDetails.title];

      if (event.target.checked) {
        checkedTitles.push(value);
      } else {
        const index = checkedTitles.indexOf(value);
        if (index !== -1) {
          checkedTitles.splice(index, 1);
        }
      }

      setPassengerDetails((prevDetails) => ({
        ...prevDetails,
        title: checkedTitles,
      }));
    } else {
      setPassengerDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle the form submission (e.g., send data to the server)
    console.log("Passenger Details:", passengerDetails);
    console.log("Contact Details:", contactDetails);
  };

  return (
    <>
    <Navbar />
    <div className="bg-body-secondary  p-0 vw-100">
      <div className="row ">
        <div className="col-lg-8 ">
          <form onSubmit={handleSubmit} className="row m-3">
            <div className="border border-info bg-info-subtle m-3 p-4 rounded-3 d-flex align-items-center">
              <span class="me-2 mb-2 mb-md-0 border border-3 p-2 rounded-4 border-info-subtle">
                Note
              </span>
              <p>
                Please enter correct details for your booking. Your booking
                details will be sent to this email address and mobile number.
              </p>
            </div>
            <div className="border border-1 bg-white m-3 p-4 rounded-3">
              <h3>Passenger Details</h3>
              <div className="my-3 mx-2 d-flex justify-content-start">
                <label className="form-label">Adult:</label>
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="title"
                    value="Mr"
                    onChange={handlePassengerChange}
                  />
                  <label className="form-check-label">Mr</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="title"
                    value="Mrs"
                    onChange={handlePassengerChange}
                  />
                  <label className="form-check-label">Mrs</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="title"
                    value="Miss"
                    onChange={handlePassengerChange}
                  />
                  <label className="form-check-label">Miss</label>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="me-1 my-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={passengerDetails.firstName}
                    onChange={handlePassengerChange}
                  />
                </div>

                <div className="mx-1 my-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={passengerDetails.lastName}
                    onChange={handlePassengerChange}
                  />
                </div>

                <div className="mx-1 my-2">
                  <label className="form-label">Country:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={passengerDetails.country}
                    onChange={handlePassengerChange}
                  />
                </div>
              </div>
              <div className="my-3 mx-2 d-flex justify-content-start">
                <label className="form-label">Children:</label>
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="title"
                    value="Mr"
                    onChange={handlePassengerChange}
                  />
                  <label className="form-check-label">Mr</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="title"
                    value="Mrs"
                    onChange={handlePassengerChange}
                  />
                  <label className="form-check-label">Mrs</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="title"
                    value="Miss"
                    onChange={handlePassengerChange}
                  />
                  <label className="form-check-label">Miss</label>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="me-1 my-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={passengerDetails.firstName}
                    onChange={handlePassengerChange}
                  />
                </div>

                <div className="mx-1 my-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={passengerDetails.lastName}
                    onChange={handlePassengerChange}
                  />
                </div>

                <div className="mx-1 my-2">
                  <label className="form-label">Country:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={passengerDetails.country}
                    onChange={handlePassengerChange}
                  />
                </div>
              </div>
              <div className="my-3 mx-2 d-flex justify-content-start">
                <label className="form-label">Infant:</label>
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="title"
                    value="Mr"
                    onChange={handlePassengerChange}
                  />
                  <label className="form-check-label">Mr</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="title"
                    value="Mrs"
                    onChange={handlePassengerChange}
                  />
                  <label className="form-check-label">Mrs</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="title"
                    value="Miss"
                    onChange={handlePassengerChange}
                  />
                  <label className="form-check-label">Miss</label>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="me-1 my-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={passengerDetails.firstName}
                    onChange={handlePassengerChange}
                  />
                </div>

                <div className="mx-1 my-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={passengerDetails.lastName}
                    onChange={handlePassengerChange}
                  />
                </div>

                <div className="mx-1 my-2">
                  <label className="form-label">Country:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={passengerDetails.country}
                    onChange={handlePassengerChange}
                  />
                </div>
              </div>
            </div>

            <div className="border border-1 bg-white m-3 p-4 rounded-3">
              <h3>Contact Details</h3>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label mx-2">Full Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={contactDetails.fullName}
                    onChange={handleContactChange}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label mx-2">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={contactDetails.email}
                    onChange={handleContactChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label mx-2">CNIC:</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="CNIC"
                    value={contactDetails.CNIC}
                    onChange={handleContactChange}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label mx-2">Phone Number:</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phoneNumber"
                    value={contactDetails.phoneNumber}
                    onChange={handleContactChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary m-3 w-100">
                Submit Booking
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-4 ">
          <div className="p-3 bg-white border border-1 m-5 rounded-3">
            <h3 className="fw-bold text-start">Tour</h3>
            <p className="text-start">
              3 Days New Year Celebration Trip to Swat Kalam
            </p>
            <hr />
            <div className="d-flex justify-content-between">
              <h3>Subtotal</h3>
              <h3>Rs 82,500</h3>
            </div>
            <div className="d-flex justify-content-between">
              <p>Adult(s)</p>
              <p>1x</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Child(s)</p>
              <p>1x</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Infant(s)</p>
              <p>1x</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h3>Sub Total</h3>
              <h3>RS 82,500</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookingForm;
