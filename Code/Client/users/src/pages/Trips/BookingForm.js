import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useBooking } from "../../context/booking";
import axios from 'axios';
import Swal from 'sweetalert2';
const BookingForm = () => {
  const [booking, setBooking] = useBooking();
  const [passengerDetails, setPassengerDetails] = useState({
    
    passengers: [],
  });
  
  const [passengerDetailsCookies, setPassengerDetailsCookies] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    country: "",
    
  });
  const [contactDetails, setContactDetails] = useState({
    fullName: "",
    email: "",
    mobile_no: "",
    cnic_no: "",
  });
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
    const newPassengers = [...passengerDetails.passengers];
    newPassengers[index][name] = value;
    console.log(newPassengers); 
    setPassengerDetails(prevDetails => ({
      ...prevDetails,
      passengers: newPassengers,
    }));
    
  };
  

  const handleGenderChange = (event, index, gender) => {
    const newPassengers = [...passengerDetails.passengers];
    newPassengers[index].gender = gender;
    setPassengerDetailsCookies({ ...passengerDetails, passengers: newPassengers });
  };
  

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    try {
      const data = {
        passengerDetails: passengerDetails.passengers,
        contactDetails,
        NoOfAdults: parseInt(Cookies.get("adults")) || 0,
        NoOfChildren: parseInt(Cookies.get("children")) || 0,
        NoOfInfants: parseInt(Cookies.get("infants")) || 0,
        totalPrice: parseInt(Cookies.get("totalPrice")) || 0,
        departCity: Cookies.get("departCity") || "",
        departDate: Cookies.get("departureDate") || "",
      };
  
      console.log("Data to be sent:", data); // Log data object before sending
  
      // Send data to the backend
      await axios.post('http://localhost:5000/api/trips/submit-a-new-trip-booking-form', data, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      setBooking(); // Set booking context after successful submission
      Swal.fire(
        'Booking Successful',
        'Go to Manage Booking tab to see your orders',
        'success'
      );
    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 400) {
        const validationErrors = err.response.data.errors;
        const errorMessages = `Validation failed:\n${validationErrors.map((error) => error.message).join('\n')}`;
        alert(errorMessages);
      } else {
        alert('Error submitting data. Please try again.');
      }
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
                          name="gender"
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
                          name="gender"
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
                          name="gender"
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
                          required
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
                          required
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
                          required
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
                    name="cnic_no"
                    value={contactDetails.cnic_no}
                    onChange={handleContactChange}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label mx-2">Phone Number:</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobile_no"
                    value={contactDetails.mobile_no}
                    onChange={handleContactChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary m-3 w-100" >
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