import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TransporterSection() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/transporterRegistration'); // Replace '/RentalBookingPage' with the actual path to your driver login page
  };
  return (
    <>
      <h4>How do we reimagine & improve lives of our Transporters.</h4>
        <h2>Transporter Section</h2>
        <p>This is the Transporter section content.</p>
        <button onClick={handleRedirect}>Become a Transporter</button>
    </>
  );
}


