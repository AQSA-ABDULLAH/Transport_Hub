import React, { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import Login from "../pages/login/Login";
import {Route,Routes} from 'react-router-dom'
// import { useSelector } from "react-redux";
const GlobalRoute = () => {
//   const isSignedIn = useSelector((state) => state.auth.isSignedIn);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isSignedIn) {
//       navigate('/login'); 
//     } else {
//       navigate('/'); 
//     }
//   }, [isSignedIn, navigate]);

  return (
    <>
          <Routes>
            <Route path='/login' element={<Login />}/>
          </Routes>
    </>
  );
};


export default GlobalRoute;