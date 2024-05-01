import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useBooking } from "../../context/booking";

const BookingForm = () => {
  const [booking, setBooking] = useBooking();
  const [passengerDetails, setPassengerDetails] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    passengers: [],
  });
  
  const [passengerDetailsCookies, setPassengerDetailsCookies] = useState({
    gender: "",
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
  useEffect(() => {
    // Retrieve passenger details from cookies
    const passengerDetailsFromCookies = {
      adults: parseInt(Cookies.get("adults")) || 0,
      children: parseInt(Cookies.get("children")) || 0,
      infants: parseInt(Cookies.get("infants")) || 0,
    };
    setPassengerDetailsCookies(passengerDetailsFromCookies);

  }, []);

  useEffect(() => {
    const adults = parseInt(Cookies.get("adults")) || 0;
    const children = parseInt(Cookies.get("children")) || 0;
    const infants = parseInt(Cookies.get("infants")) || 0;
    const totalPrice = parseInt(Cookies.get("totalPrice")) || 0;
    const totalGuests = adults + children + infants;
    

    const passengers = Array.from({ length: totalGuests }, (_, index) => ({
      id: index,
      type: index < adults ? "Adult" : index < adults + children ? "Child" : "Infant",
      gender: "",
      firstName: "",
      lastName: "",
      country: "",
    }));

    setPassengerDetails({
      adults,
      children,
      infants,
      passengers,
      totalPrice,
      totalGuests
    });
  }, []);

  const handlePassengerChange = (event, index) => {
    const { name, value } = event.target;
    const newPassengers = [...passengerDetails.passengers]; // Create a copy of passengers array
    newPassengers[index][name] = value; // Update the specific passenger's property
    setPassengerDetails(prevDetails => ({
      ...prevDetails,
      passengers: newPassengers, // Set the updated passengers array
    }));
  };
  

  const handleGenderChange = (event, index, gender) => {
    const newPassengers = [...passengerDetails.passengers];
    newPassengers[index].gender = gender;
    setPassengerDetails({ ...passengerDetails, passengers: newPassengers });
  };
  

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/trips/submit-a-new-trip-booking-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passengerDetails,
          contactDetails,
          NoOfAdults: parseInt(Cookies.get("adults")) || 0,
          NoOfChildren: parseInt(Cookies.get("children")) || 0,
          NoOfInfrants: parseInt(Cookies.get("infants")) || 0,
          totalPrice: parseInt(Cookies.get("totalPrice")) || 0,
          departCity: Cookies.get("depareCity") || "",
          departDate: Cookies.get("departureDate") || "",
        }),
      });
      const data = await response.json();
      console.log("Booking submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };
  


  return (
    <>
    {/* <Navbar /> */}
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
                {passengerDetails.passengers.map((passenger, index) => (
                  <div key={passenger.id}>
                    <h2 className="my-2">{passenger.type}</h2>
                    <div className="my-3 mx-2 d-flex justify-content-start">
                      <label className="form-label">Gender:</label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`male${index}`}
                          value="Male"
                          checked={passenger.gender === "Male"}
                          onChange={(e) => handleGenderChange(e, index, "Male")}
                        />
                        <label className="form-check-label" htmlFor={`male${index}`}>Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`female${index}`}
                          value="Female"
                          checked={passenger.gender === "Female"}
                          onChange={(e) => handleGenderChange(e, index, "Female")}
                        />
                        <label className="form-check-label" htmlFor={`female${index}`}>Female</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`other${index}`}
                          value="Other"
                          checked={passenger.gender === "Other"}
                          onChange={(e) => handleGenderChange(e, index, "Other")}
                        />
                        <label className="form-check-label" htmlFor={`other${index}`}>Other</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="me-1 my-2">
                        <label className="form-label">First Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={passenger.firstName}
                          onChange={(e) =>
                            handlePassengerChange(e, passenger.id)
                          }
                        />
                      </div>

                      <div className="mx-1 my-2">
                        <label className="form-label">Last Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={passenger.lastName}
                          onChange={(e) =>
                            handlePassengerChange(e, passenger.id)
                          }
                        />
                      </div>

                      <div className="mx-1 my-2">
                        <label className="form-label">Country:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          value={passenger.country}
                          onChange={(e) =>
                            handlePassengerChange(e, passenger.id)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
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
              <button type="submit" className="btn btn-primary m-3 w-100" onClick={
                () => setBooking()
              }>
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
              <h3>Total Guests</h3>
              <h3>{passengerDetails.totalGuests}</h3>
            </div>
            <div className="d-flex justify-content-between">
              <p>Adult(s)</p>
              <p>{passengerDetails.adults}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Child(s)</p>
              <p>{passengerDetails.children}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Infant(s)</p>
              <p>{passengerDetails.infants}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h3>Sub Total</h3>
              <h3>{passengerDetails.totalPrice}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookingForm;
