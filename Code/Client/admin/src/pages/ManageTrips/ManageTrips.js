import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Trips from "../../components/molecules/trips/Trips"
import { Tab } from "../../constants/ManageTabs";
import styles from "./manageTrips.module.css";

const ManageTrips = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [setIsActive] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabName = params.get("tab");
    if (tabName == null) {
      document.title = "Trips management"
    }
    if (tabName) {
      const tabIndex = Tab.findIndex(tab => tab.text.toLowerCase() === tabName.toLowerCase());
      if (tabIndex !== -1) {
        setIsActive(tabIndex);
      }
    }
    else {
      navigate(`?tab=ManageTrips`);
    }
  }, [location, navigate, setIsActive]);

  return (
    <div className={styles.container}>
        <div >
             <Trips/>
        </div>
    </div>
  );
};

export default ManageTrips;
