import React from 'react'
import Navbar from '../../components/atoms/Navbar/Navbar';
import Slider from './Slider';
import Footer from '../../components/atoms/Footer/Footer';
import TripsMain from './TripsMain';
import ManageCars from '../../components/sections/carRentalSections/landinPageSections/ManageCars';
function LandingTripPage () {
    return (
        <div>
                <Navbar />
                <Slider />
                <TripsMain />
                <ManageCars />
                <Footer />
        </div>
    )
}
export default LandingTripPage;