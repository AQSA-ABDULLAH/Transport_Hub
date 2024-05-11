import React, { useState, useEffect, Profiler } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import './route.css'
import Home from "../pages/Home.js";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile.js";
import Header from "../components/sections/header/Header";
import Footer from "../components/sections/footer/Footer";
import axios from 'axios';
import NoRoute from "../pages/NoRoute.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSignedIn } from "../redux/containers/auth/actions";

import LandingPage from "../pages/car-rental/LandingPage.js";
// import ExtendedDetailPage from "../pages/car-rental/addOnPage/AddOnPage.js";
import ViewCars from "../pages/car-rental/showCarsPage/ViewCars.js";
import RentalBookingPage from '../pages/car-rental/bookingPage/RentalBookingPage.js';
import BlogsNews from '../pages/blogs&news/BlogsNews.js';
import BlogsDetails from '../pages/blogs&news/BlogsDetails.js';
import CareerPage from "../pages/career/CareerPage.js";
import DriverEmail from "../pages/career/driver/registration/DriverEmail.js";
import DriverVerifyMail from "../pages/career/driver/verifymail/DriverVerifyMain.js";
import DriverName from "../pages/career/driver/namesection/DriverName.js"
import TransporterEmail from "../pages/career/transporter/registration/TransporterEmail.js"
import TransporterName from "../pages/career/transporter/namesection/TransporterName.js";
import VerifyTransporterEmail from "../pages/career/transporter/verifymail/VerifyMail.js"
import DriverLocation from "../pages/career/driver/locationsection/DriverLocation.js";
import DriverVechicalSection from "../pages/career/driver/vechicalselection/DriverVechicalSelection.js";
import DriverApplication from "../pages/career/driver/application/DriverApplication.js";
import DriverPhoto from "../pages/career/driver/patnerphoto/DriverPhoto.js";
import DriverCnicFrontSide from "../pages/career/driver/uploadCNIC/DriverCnicFrontSide.js";
import DriverCnicBackSide from "../pages/career/driver/uploadCNIC/DriverCnicBackSide.js";
import TermsCondition from "../pages/career/driver/terms&condition/Terms&Condition.js";
import DriverLicense from "../pages/career/driver/driving-license/DriverLicense.js";
import ShipmentLandingPage from "../pages/good-shipment/ShipmentLandingPage.js";
import ShipmentForm from "../pages/good-shipment/create-shipment/ShipmentForm.js";
import LandingTripPage from "../pages/Trips/LandingTripPage.js";
import ManageShipments from "../pages/good-shipment/manage-shipments/ManageShipments.js";
import TransportLocation from "../pages/career/transporter/locationsection/TransporterLocation.js";
import TransporterVechicalSection from "../pages/career/transporter/vechicalselection/TransporterVechicalSelection.js";
import Parcelform from "../components/Parcel/Parcelform.js";
import PickupBoyForm from "../components/Parcel/PickupBoyForm.js";
import Showpickupboy from "../components/Parcel/showpickupboysforms.js";
import Userdashboard from "../user-dashboard/User-dashboard.js";
import PickupboysLandingPage from "../pages/pickupboylandingpage/PickupboysLandingPage.js";

import PickupboyEmail from "../pages/career/PickupboyCareer/pickupboyregistration/emailpage/PickupboyEmail.js";
import PickupBoyVerifyMail from "../pages/career/PickupboyCareer/pickupboyregistration/verifyemailpage/PickupBoyVerifyMain.js";
import PickupBoyDetailPage from "../pages/career/PickupboyCareer/pickupboyregistration/PickupboyDetails/PickupBoyDetailPage.js";
import PickupBoyLocation from "../pages/career/PickupboyCareer/pickupboyregistration/PickupboyCity/PickupboyLocationDetail.js";
import Pickupboynum from "../pages/career/PickupboyCareer/pickupboyregistration/PickupBoyNum/Pickupboynum.js"

import TripDetails from "../components/molecules/trips/TripDetails.js";
import AddOnPage from "../pages/car-rental/addOnPage/AddOnPage.js";
import BookingForm from "../pages/Trips/BookingForm.js";
import BookingPage from "../pages/Booking/BookingPage.js";
import ManageBooking from "../pages/manage_booking/ManageBooking.js";
import ManageRental from "../pages/manage_booking/rental_reservation/ManageRental.js";
import ExtendRental from "../pages/manage_booking/extend-rental/ExtendRental.js";
import ViewRental from "../pages/manage_booking/rental_reservation/ViewRental.js";
import RentalDetails from "../pages/manage_booking/extend-rental/RentalDetails.js";


function AppRoutes() {

  const [pickupBoy, setpickupBoy] = useState([]);
  const fetchData = async () => {
    try {
      const {response} = await axios.get('http://localhost:5000/getAllData');
      setpickupBoy(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.signIn);

  const location = useLocation();
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const noHeaderPaths = ["/login", "/signup", "/404", "/profile", "/driverRegistration", "/driver_verify_mail", 
  "/driver_name_section", "/driver_location_section", "/driver_vechical_selection", "/driver_application_form", 
  "/driver_terms_and_conditions", "/driver_photo", "/upload_driver_cnic_front_side", "/upload_driver_cnic_back_side",
  "/driver_driving_license", "/create_shipment_form", "/manage_shipments", "/transporterRegistration", "/verify_transporter_mail", 
  "/transporter_name_section", "/transporter_location_section", "/transporter_vechical_selection", 
  "/manage_booking", "/manage_rental", "/extend_rental", "/manage_rental/view_rental", "/extend_rental/rental-details" ];
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => { 
    
        if (window.scrollY >= window.innerHeight  ) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
        window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const accessToken = localStorage.getItem("access_token");

  if (accessToken && !reduxState.isSignedIn) {
    // console.log("Access token found:", accessToken);
    dispatch(setSignedIn(accessToken));
  } else {
  }
  // useEffect(() => console.log(reduxState), [reduxState]);

  return (
    <>
  <div className={`header-container ${isScrolled ? 'scrolled' : ''}`}> 
  {!noHeaderPaths.includes(location.pathname) && <Header />}
</div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog&news" element={<BlogsNews/>}/>
        <Route path="/blog&news/:id" element={<BlogsDetails/>}/>

        {/* MANAGE BOOKING ROUTES */}
        {/* <Route
          path="/manage_booking"
          element={isAuthenticated ? <Navigate to="/" replace /> : <ManageBooking/> }
        /> */}
        <Route path="/manage_rental" element={<ManageRental/>}/>
        <Route path="/manage_rental/view_rental" element={<ViewRental/>}/>
        <Route path="/extend_rental" element={<ExtendRental/>}/>
        <Route path="/extend_rental/rental-details" element={<RentalDetails/>}/>

        {/* CAR RENTAL ROUTES */}
        <Route path="/rental_landing_page" element={<LandingPage/>}/>
        <Route path="/viewCars" element={<ViewCars/>}/>
        <Route path="/carAddOn" element={<AddOnPage/>}/>
        <Route path="/RentalBooking" element={<RentalBookingPage/>}/>

        {/* GOOD SHIPMENT ROUTES */}
        <Route path="/shipment_landing_page" element={<ShipmentLandingPage/>}/>
        <Route path="/create_shipment_form" element={<ShipmentForm/>}/>
        <Route path="/manage_shipments" element={<ManageShipments/>}/>

        <Route path="/career" element={<CareerPage/>}/>
        {/* DRIVER REGISTRATION */}
        <Route path="/driverRegistration" element={<DriverEmail/>}/>
        <Route path="/driver_verify_mail" element={<DriverVerifyMail/>}/>
        <Route path="/driver_name_section" element={<DriverName/>}/>
        <Route path="/driver_location_section" element={<DriverLocation/>}/>
        <Route path="/driver_vechical_selection" element={<DriverVechicalSection/>}/>
        <Route path="/driver_application_form" element={<DriverApplication/>}/>
        <Route path="/driver_terms_and_conditions" element={<TermsCondition/>}/>
        <Route path="/driver_photo" element={<DriverPhoto/>}/>
        <Route path="/upload_driver_cnic_front_side" element={<DriverCnicFrontSide/>}/>
        <Route path="/upload_driver_cnic_back_side" element={<DriverCnicBackSide/>}/>
        <Route path="/driver_driving_license" element={<DriverLicense/>}/>

        {/* TRANSPORTER REGISTRATION */}
        <Route path="/transporterRegistration" element={<TransporterEmail/>}/>
        <Route path="/verify_transporter_mail" element={< VerifyTransporterEmail/>}/>
        <Route path="/transporter_name_section" element={<TransporterName/>}/>
        <Route path="/transporter_location_section" element={<TransportLocation/>}/>
        <Route path="/transporter_vechical_selection" element={<TransporterVechicalSection/>}/>
        
        {/* Trips Packages */}
        <Route path="/trips_packages" element={<LandingTripPage/>} />
        <Route path="/tripDetails/:tripId" element={<TripDetails/>} />  
        <Route path="/BookingPage" element={<BookingPage/>} />
        <Route path="/BookingForm/:tripId" element={<BookingForm/>} />

        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Signup />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/user-profile"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Profile/> }
        />
        <Route path="/404" element={<NoRoute />} />    
        <Route path="*" element={<Navigate to="/404" replace />} />

          {/* Parcel Pickup Routes */}
          <Route path="/parcelform" element={<Parcelform/>}/> 
          <Route path="/pickupboyform" element={<PickupBoyForm/>}/>
          <Route path="/pickupboy-email" element={<PickupboyEmail/>}/>
          <Route path="/pickupboyverifymail" element={<PickupBoyVerifyMail/>}/>
          <Route path="/pickupboy-detail-page" element={<PickupBoyDetailPage/>}/>
          <Route path="/pickupboy-location" element={<PickupBoyLocation/>}/>
          <Route path="/pickupboy-number" element={<Pickupboynum/>}/>
          
           {pickupBoy.map((pickupBoy) => (
           <Route
             path="/getpickupBoy"
             element={<Showpickupboy pickupBoy={pickupBoy} key={pickupBoy._id} />}
           />
          ))} 
          <Route path="/userdashboard" element={<Userdashboard/>} />
          <Route path="/pickupboyslandingpage" element={<PickupboysLandingPage/>} />

      </Routes>
      {!noHeaderPaths.includes(location.pathname) && <Footer />}
    </>
  );
}
export default AppRoutes; 
