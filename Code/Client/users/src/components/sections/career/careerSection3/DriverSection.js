// DriverSection.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for navigation

export default function DriverSection() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/driverRegistration'); // Replace '/RentalBookingPage' with the actual path to your driver login page
    };

    return (
        <div>
            <h2>Driver Section</h2>
            <p>This is the driver section content.</p>
            <button onClick={handleRedirect}>Become a Driver</button>
        </div>
    );
}


