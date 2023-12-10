import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import PrivateComponents from './components/PrivateComponents';
import Career from './pages/careers/Career';
import Services from './pages/Services';
import ErrorPage from './pages/unknownPage/ErrorPage';
import LandingCarPage from './pages/carRental/LandingCarPage';
import ExtendedDetailPage from './pages/carRental/ExtendedDetailPage';
import RentalBookingPage from './pages/carRental/bookingPage/RentalBookingPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/LandingCarPage" element={<LandingCarPage />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/aboutUs" element={<h1>About Us Page</h1>} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/loyaltyProgram" element={<h1>Loyalty Program</h1>} />
          <Route exact path="/carRental" element={<h1>Car Rental</h1>} />
          <Route exact path="/recreationalTrips" element={<h1>Recreational Trips</h1>} />
          <Route exact path="/goodShipment" element={<h1>Good Shipment</h1>} />
          <Route exact path="/parcelPickup" element={<h1>Parcel Pickup</h1>} />
          <Route exact path="/career" element={<Career/>} />
          {/* CAR RENTAL ROUTES */}
          <Route exact path="/LandingCarPage" element={<LandingCarPage/>} />
          <Route exact path="/ExtendedDetailPage" element={<ExtendedDetailPage/>} />
          <Route exact path="/RentalBookingPage" element={<RentalBookingPage/>} />

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
