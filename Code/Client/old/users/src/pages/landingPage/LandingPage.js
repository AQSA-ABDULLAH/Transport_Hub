import React from 'react';
import Intro from './Intro';
import Services from './Services';
import Main from './Main';
import Footer from '../../components/atoms/Footer/Footer';
import './CSS/LandingPage.css'; 
function LandingPage() {
  return (
    <div className="landing-page ">
     <Main />
      <Intro />
      <Services />
      <Footer />
     
    </div>
  );
}

export default LandingPage;
