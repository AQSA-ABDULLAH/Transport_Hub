import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="TransportHub" services="Services" LP="Loyality Program" MS="Manage Bookings" Subscribe="Subscribe" />
        <Routes>
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path='/signIn' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
