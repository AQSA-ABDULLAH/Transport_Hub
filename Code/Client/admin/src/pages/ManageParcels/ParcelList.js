import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./parcelList.module.css";
import Parcels from "../../components/molecules/parcel/Parcels";


const ParcelList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabName = params.get("tab");
    if (tabName == null) {
      document.title = "Parcel Managment"
    }
    // if (tabName) {
    //   const tabIndex = Tab.findIndex(tab => tab.text.toLowerCase() === tabName.toLowerCase());
    //   if (tabIndex !== -1) {
    //     setIsActive(tabIndex); 
    //   }
    // }
    else {
      navigate(`?tab=ManageParcels`);
    }
  }, [location, navigate, setIsActive]);


  return (
    <div className={styles.container}>
        <div className={styles.scrollableTab}>
             <Parcels/>
        </div>
    </div>
  );
};

export default ParcelList;
