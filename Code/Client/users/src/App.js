import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signUp/SignUp';
import SignIn from './pages/login/SignIn';
import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import BlogsNews from './pages/blogs&News/BlogsNews';
import PrivateComponents from './components/PrivateComponents';
import Career from './pages/careers/Career';
import Services from './pages/Services';
import ErrorPage from './pages/unknownPage/ErrorPage';
import LandingCarPage from './pages/CarRental/LandingPage/LandingCarPage';
import Viewcars from './pages/CarRental/showCarsPage/ViewCars';
import ExtendedDetailPage from './pages/CarRental/addOnPage/ExtendedDetailPage';
import RentalBookingPage from './pages/CarRental/bookingPage/RentalBookingPage';
import TripLandingPage from './pages/tripsPacakages/tripLandingPage/tripLandingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/aboutUs" element={<h1>About Us Page</h1>} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/loyaltyProgram" element={<h1>Loyalty Program</h1>} />
          <Route exact path="/blogs&News" element={<BlogsNews/>} />
          <Route exact path="/career" element={<Career/>} />

          {/* CAR RENTAL ROUTES */}
          <Route exact path="/LandingCarPage" element={<LandingCarPage/>} />
          <Route exact path="/ViewCars" element={<Viewcars/>} />
          <Route exact path="/ExtendedDetailPage" element={<ExtendedDetailPage/>} />
          <Route exact path="/RentalBookingPage" element={<RentalBookingPage/>} />

          {/* TRIP PACKAGES ROUTES */}
          <Route exact path="/tripLandingPage" element={<TripLandingPage/>}/>

          <Route path="/profile" element={<PrivateComponents />} />
          <Route path="/profile/userProfile" element={<h1>User Profile</h1>} />
          <Route path="/profile/manageBooking" element={<h1>Manage Booking</h1>} />
          <Route path="/profile/logout" element={<h1>Logout</h1>} />

          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path='/signIn' element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
