import React from 'react';
import Slider from './Slider';

import TripsMain from './TripsMain';
import ManageCars from '../../components/sections/car-rental/rental-landingpage/rentalSection3/ManageCars';
function LandingTripPage () {
    return (
        <div>
                
                <Slider />
                <TripsMain />
                <ManageCars />
               
        </div>
    )
}
export default LandingTripPage;