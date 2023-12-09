// LandingCarPage.js
import React, { useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import CarDeals from "../../components/CarRental/comps/CarDeals";
import CarTypes from "../../components/CarRental/comps/CarTypes";
import CarMain from "../../components/CarRental/comps/CarMain";
import ManageCars from "../../components/CarRental/comps/ManageCars";
import CarFiltering from "../../components/CarRental/comps/CarFiltering";
import CarResults from "../../components/CarRental/comps/CarResults"; // Import the CarResults component

function LandingCarPage() {
  const [filterApplied, setFilterApplied] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({});

  const handleFilter = (criteria) => {
    setFilterCriteria(criteria);
  };

  const handleFilterApplied = () => {
    setFilterApplied(true);
  };

  return (
    <>
      <Navbar />

      {!filterApplied && (
        <CarMain
          onFilter={handleFilter}
          onFilterApplied={handleFilterApplied}
        />
      )}
      {filterApplied && <CarResults filters={filterCriteria} />}
      {!filterApplied && <CarDeals />}
      {!filterApplied && <CarTypes />}
      {!filterApplied && <ManageCars />}

      <Footer />
    </>
  );
}

export default LandingCarPage;
