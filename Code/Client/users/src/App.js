import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './App.css';
import LandingPage from './pages/LandingPage';
import PrivateComponents from './components/PrivateComponents';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/aboutUs" element={<h1>About Us Page</h1>} />
          <Route exact path="/services" element={<h1>Services Page</h1>} />
          <Route exact path="/loyaltyProgram" element={<h1>Loyalty Program</h1>} />

          <Route element={<PrivateComponents/>}>
          <Route exact path="/profile" element={<h1>User Profile</h1>} />
          <Route exact path="/manageBooking" element={<h1>Manage Booking</h1>} />
          <Route exact path="/logout" element={<h1>Logout</h1>} />
          </Route>
          
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path='/signIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
