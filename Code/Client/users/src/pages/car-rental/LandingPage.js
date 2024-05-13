import React from 'react';
import CarMain from "../../components/sections/car-rental/rental-landingpage/rentalSection1/CarMain";
import CarTypes from '../../components/sections/car-rental/rental-landingpage/rentalSection4/CarTypes';
import CarDeals from "../../components/sections/car-rental/rental-landingpage/rentalSection2/CarDeals";
import ManageCars from "../../components/sections/car-rental/rental-landingpage/rentalSection3/ManageCars";

export default function LandingPage() {
    return (
        <>
            <CarMain
                car1Image={"./assets/images/carrental/landing_image.png"}
            />
            <CarDeals/>
            <ManageCars />
            <CarTypes/>
        </>
    )
}


// LandingCarPage.js
// import React, { useState } from "react";
// import Navbar from '../../../components/atoms/Navbar/Navbar';
// import Footer from "../../../components/atoms/Footer/Footer";
// import CarDeals from "../../../components/sections/carRentalSections/landinPageSections/CarDeals";
// import CarTypes from "../../../components/sections/carRentalSections/landinPageSections/CarTypes";
// import CarMain from "../../../components/sections/carRentalSections/landinPageSections/CarMain";
// import CarFiltering from "../../../components/sections/carRentalSections/landinPageSections/CarFiltering";
// import CarResults from "../../../components/sections/carRentalSections/landinPageSections/CarResults"; // Import the CarResults component

// function LandingCarPage() {
//   const [filterApplied, setFilterApplied] = useState(false);
//   const [filterCriteria, setFilterCriteria] = useState({});

//   const handleFilter = (criteria) => {
//     setFilterCriteria(criteria);
//   };

//   const handleFilterApplied = () => {
//     setFilterApplied(true);
//   };

//   return (
//     <>
//       <Navbar />

//       {!filterApplied && (
//         <CarMain
//           car1Image={"./assets/images/cars/SUVs.png"}
//           car4Image={"./assets/images/cars/car4.png"}
//           onFilter={handleFilter}
//           onFilterApplied={handleFilterApplied}
//         />
//       )}
//       {filterApplied && <CarResults filters={filterCriteria} />}
//       {!filterApplied && <CarDeals />}
//       {!filterApplied && <CarTypes />}
//       {!filterApplied && <ManageCars />}

//       <Footer />
//     </>
//   );
// }

// export default LandingCarPage;
