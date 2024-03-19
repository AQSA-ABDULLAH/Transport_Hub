import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/Home.js";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Billing from "../pages/Billing";
import Header from "../components/sections/header/Header";
import Footer from "../components/sections/footer/Footer";
import NoRoute from "../pages/NoRoute.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSignedIn } from "../redux/containers/auth/actions";
import './route.css'
import LandingPage from "../pages/carRental/LandingPage.js";
import ViewCars from "../pages/carRental/showCarsPage/ViewCars.js"
import ExtendedDetailPage from "../pages/carRental/addOnPage/ExtendedDetailPage.js"
import RentalBookingPage from "../pages/carRental/bookingPage/RentalBookingPage.js"
import BlogsNews from "../pages/blogs&News/BlogsNews.js";
import CareerPage from "../pages/career/CareerPage.js";
import DriverEmail from "../pages/career/driver/registration/DriverEmail.js";
import DriverName from "../pages/career/driver/namesection/DriverName.js"
import TransporterEmail from "../pages/career/transporter/registration/TransporterEmail.js"
import TransporterName from "../pages/career/transporter/namesection/TransporterName.js";
import VerifyMail from "../pages/career/transporter/verifymail/VerifyMail.js"


function AppRoutes() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.signIn);

  const location = useLocation();
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const noHeaderPaths = ["/login", "/signup", "/404", "/profile", "/driverRegistration", "/verify_transporter_mail",
  "/transporterRegistration", "/transporter_name_section", "/driver_name_section"];
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
        <Route path="/career" element={<CareerPage/>}/>
        <Route path="/driverRegistration" element={<DriverEmail/>}/>
        <Route path="/driver_name_section" element={<DriverName/>}/>
        <Route path="/transporterRegistration" element={<TransporterEmail/>}/>
        <Route path="/verify_transporter_mail" element={<VerifyMail/>}/>
        <Route path="/transporter_name_section" element={<TransporterName/>}/>
        <Route path="/viewCars" element={<ViewCars/>}/>
        <Route path="/carAddOn" element={<ExtendedDetailPage/>}/>
        <Route path="/RentalBooking" element={<RentalBookingPage/>}/>
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
          path="/billing"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Billing />}
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      {!noHeaderPaths.includes(location.pathname) && <Footer />}
    </>
  );
}
export default AppRoutes; 