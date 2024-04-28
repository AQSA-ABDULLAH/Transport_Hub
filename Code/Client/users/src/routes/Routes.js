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

import LandingPage from '../pages/carRental/LandingPage.js';
import ViewCars from '../pages/carRental/showCarsPage/ViewCars.js';
import ExtendedDetailPage from '../pages/carRental/addOnPage/ExtendedDetailPage.js';
import RentalBookingPage from '../pages/carRental/bookingPage/RentalBookingPage.js';
import BlogsNews from "../pages/blogs&News/BlogsNews.js";
import BlogsDetails from "../pages/blogs&News/BlogsDetails.js";

import LandingPage from "../pages/car-rental/LandingPage.js";
import ViewCars from "../pages/car-rental/showCarsPage/ViewCars.js"
import ExtendedDetailPage from "../pages/car-rental/addOnPage/ExtendedDetailPage.js"
import RentalBookingPage from "../pages/car-rental/bookingPage/RentalBookingPage.js"
import BlogsNews from "../pages/blogs&news/BlogsNews.js";
import BlogsDetails from "../pages/blogs&news/BlogsDetails.js";


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
import DriverCnic from "../pages/career/driver/uploadCNIC/DriverCnic.js";
import TermsCondition from "../pages/career/driver/terms&condition/Terms&Condition.js";
import ShipmentLandingPage from "../pages/good-shipment/ShipmentLandingPage.js";
import ShipmentForm from "../pages/good-shipment/create-shipment/ShipmentForm.js";
import LandingTripPage from "../pages/Trips/LandingTripPage.js";
import ManageShipments from "../pages/good-shipment/manage-shipments/ManageShipments.js";
import Parcelform from "../components/Parcel/Parcelform.js";
import PickupBoyForm from "../components/Parcel/PickupBoyForm.js";
import Showpickupboy from "../components/Parcel/showpickupboysforms.js";
import Userdashboard from "../user-dashboard/User-dashboard.js";
import PickupboysLandingPage from "../pages/pickupboylandingpage/PickupboysLandingPage.js";
import PickupBoyEmail from "../components/pickupboyregistration/emailpage/PickupboyEmail.js";
import PickupBoyVerifyMail from "../components/pickupboyregistration/verifyemailpage/PickupBoyVerifyMain.js";




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
  const noHeaderPaths = ["/login", "/signup", "/404", "/profile", "/driverRegistration", "/verify_transporter_mail",
  "/transporterRegistration", "/transporter_name_section", "/driver_name_section", "/driver_location_section",
  "/driver_vechical_selection", "/driver_application_form", "/trems_and_conditions", "/upload_driver_cnic", 
  "/driver_verify_mail", "/create_shipment_form", "/manage_shipments" ];
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

        {/* CAR RENTAL ROUTES */}
        <Route path="/rental_landing_page" element={<LandingPage/>}/>
        <Route path="/viewCars" element={<ViewCars/>}/>
        <Route path="/carAddOn" element={<ExtendedDetailPage/>}/>
        <Route path="/RentalBooking" element={<RentalBookingPage/>}/>

        {/* GOOD SHIPMENT ROUTES */}
        <Route path="/shipment_landing_page" ele-ment={<ShipmentLandingPage/>}/>
        <Route path="/create_shipment_form" element={<ShipmentForm/>}/>
        <Route path="/manage_shipments" element={<ManageShipments/>}/>

        <Route path="/career" element={<CareerPage/>}/>
        {/* DRIVER REGISTRATION */}
        <Route path="/driverRegistration" element={<DriverEmail/>}/>
        <Route path="/driver_verify_mail" element={<DriverVerifyMail/>}/>
        <Route path="/driver_name_section" element={<DriverName/>}/>
        <Route path="/driver_location_section" ele-ment={<DriverLocation/>}/>
        <Route path="/driver_vechical_selection" ele-ment={<DriverVechicalSection/>}/>
        <Route path="/driver_application_form" ele-ment={<DriverApplication/>}/>
        <Route path="/upload_driver_cnic" element={<DriverCnic/>}/>
        <Route path="/trems_and_conditions" element={<TermsCondition/>}/>

        {/* TRANSPORTER REGISTRATION */}
        <Route path="/transporterRegistration" element={<TransporterEmail/>}/>
        <Route path="/verify_transporter_mail" element={< VerifyTransporterEmail/>}/>
        <Route path="/transporter_name_section" element={<TransporterName/>}/>
        
        {/* Trips Packages */}
        <Route path="/trips_packages" element={<LandingTripPage/>} />
        <Route path="/404" element={<NoRoute />} />      

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
        <Route path="*" element={<Navigate to="/404" replace />} />

          {/* Parcel Pickup Routes */}
          <Route path="/parcelform" element={<Parcelform/>}/> 
          <Route path="/pickupboyform" element={<PickupBoyForm/>}/>

          <Route path="/pickupboy-email" element={<PickupBoyEmail/>}/>
          <Route path="/pickupboyverifymail" element={<PickupBoyVerifyMail/>}/>
          
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
