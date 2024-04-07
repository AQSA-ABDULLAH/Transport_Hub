// CarFeaturesModel.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './carFeature.css';
import Button from '../../../components/atoms/button/Button';

const CarFeaturesModel = ({ onClose }) => {
    const navigate = useNavigate();

    // Accordion state
    const [accordionState, setAccordionState] = useState({
        theftProtection: false,
        cleanInteriorExterior: false,
        cancellationPolicies: false,
        termsConditions: false,
    });

    // Function to toggle accordion state
    const toggleAccordion = (section) => {
        setAccordionState((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    // Function to handle Continue button click
    const handleContinue = () => {
        // Redirect to /RentalBookingPage
        navigate('/RentalBooking');
    };

    return (
        <>
            <div className="overlayStyle" onClick={onClose}></div>
            <div className="modalStyle">
                <div className="closeButtonStyle" onClick={onClose}>
                    &times;
                </div>
                <h4>Car Features</h4>

                {/* Accordion menu */}
                <div className="accordion-section">
                    <div className="accordion-heading">
                        Theft Protection
                        <span className={`icon ${accordionState.theftProtection ? 'rotate' : ''}`} onClick={() => toggleAccordion('theftProtection')}>
                            &#9660;
                        </span>
                    </div>
                    {accordionState.theftProtection && (
                        <div className="accordion-details">
                            <p>Details about Theft Protection go here.</p>
                        </div>
                    )}
                </div>

                <div className="accordion-section">
                    <div className="accordion-heading">
                        Clean Interior/Exterior
                        <span className={`icon ${accordionState.cleanInteriorExterior ? 'rotate' : ''}`} onClick={() => toggleAccordion('cleanInteriorExterior')}>
                            &#9660;
                        </span>
                    </div>
                    {accordionState.cleanInteriorExterior && (
                        <div className="accordion-details">
                            {/* Details for Clean Interior/Exterior go here. */}
                            <p>Details about Clean Interior/Exterior go here.</p>
                            {/* Add additional details as needed */}
                        </div>
                    )}
                </div>

                <div className="accordion-section">
                    <div className="accordion-heading">
                        Cancellation Policies
                        <span className={`icon ${accordionState.cancellationPolicies ? 'rotate' : ''}`} onClick={() => toggleAccordion('cancellationPolicies')}>
                            &#9660;
                        </span>
                    </div>
                    {accordionState.cancellationPolicies && (
                        <div className="accordion-details">
                            <p>You’re not eligible for a refund if you cancel the ride 2 hours before the pickup time.</p>
                            <p>You’re eligible for a 100% refund if you cancel the ride within 4 hours of the booking time.</p>
                            <p>You’re eligible for a 30% refund if you cancel the ride within 22 hours of the pickup time.</p>
                            <p>You’re eligible for a 10% refund if you cancel the ride before 24 hours of the pickup time.</p>
                            <p>In case of multiple days bookings, the above-mentioned conditions are applied for day-1 and you’re eligible for a 100% refund for the remaining days.</p>
                        </div>
                    )}
                </div>

                <div className="accordion-section">
                    <div className="accordion-heading">
                        Term & Conditions
                        <span className={`icon ${accordionState.termsConditions ? 'rotate' : ''}`} onClick={() => toggleAccordion('termsConditions')}>
                            &#9660;
                        </span>
                    </div>
                    {accordionState.termsConditions && (
                        <div className="accordion-details">
                            <p>Chauffeur Rest The chauffeur should be given a break for lunch and dinner, in addition, the chauffeur should be given a minimum break of eight consecutive hours during 24 hours on duty. This is a necessary safety requirement.</p>
                            <p>You have the right to complain against the driver, service, vehicle, etc. but you cannot reprimand the chauffeur on your own or force the driver to go against company policies in any circumstances.</p>
                            <p>State/Border Restrictions: To be driven on the Pakistan mainland only. FATA and Northern Areas are excluded.</p>
                            <p>Toll Taxes, Parking Fees, etc. are to be paid by the renting part.</p>
                            <p>In case of intercity Drop-off, client will be charged for return fuel too.</p>
                        </div>
                    )}
                </div>

                <div className="feature_btn">
                    <Button
                        primary
                        size={"14px"}
                        radius={"4px"}
                        btnText="Continue"
                    />
                </div>

            </div>

        </>
    );
};

export default CarFeaturesModel;
