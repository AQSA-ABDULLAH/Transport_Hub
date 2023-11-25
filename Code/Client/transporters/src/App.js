import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path='/login' element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;