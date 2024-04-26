import React from 'react'
import { useNavigate } from 'react-router-dom';
const PickupboyCareerPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/pickupboyform'); // Replace '/RentalBookingPage' with the actual path to your driver login page
    };
  return (
    <div>
        <h2>Pickupboy Section</h2>
        <p>This is the Pickupboy section content.</p>
        <button onClick={handleRedirect}>Become a Pickupboy</button>
    </div>
  )
}

export default PickupboyCareerPage


