import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import SignIn from './pages/SignIn';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignIn />} />
          <Route exact path='/adminDashboard' element={<AdminDashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
