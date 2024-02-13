import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
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


function AppRoutes() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.signIn);

  const location = useLocation();
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const noHeaderPaths = ["/login", "/signup", "/billing", "/404", "/profile"];
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