import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tab } from "../../../constants/ShipmentsTab";
import styles from "../../TransportManagment/main/Transport.module.css";
import Button from "../../../components/atoms/buttons/Button";
import Qoute from "../tabs/qoute/Qoute";
import Shipments from "../tabs/shipments/Shipments";
import ActiveBidding from "../tabs/bidding/ActiveBidding";
import Bidded from "../tabs/bidding/Bidded";
import CanceledShipments from "../tabs/shipments/CanceledShipments";

const ManageShipment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(0);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabName = params.get("tab");
    if (tabName == null) {
      document.title = "Manage Shipments"
    }
    if (tabName) {
      const tabIndex = Tab.findIndex(tab => tab.text.toLowerCase() === tabName.toLowerCase());
      if (tabIndex !== -1) {
        setIsActive(tabIndex);
      }
    }
    else {
      navigate(`?tab=Cars`);
    }
  }, [location]);

  const handleTabClick = (index) => {
    setIsActive(index);
    buttonRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
    navigate(`?tab=${Tab[index].text}`);

    document.title = `${Tab[index].text}`
  };

  const renderTabContent = () => {
    switch (isActive) {
      case 0:
        return <Shipments/>
      case 1:
        return <Qoute/>
      case 2:
        return <ActiveBidding/>
      case 3:
        return <Bidded/>
      case 7:
        return <CanceledShipments/>
      default:
        return null;
    }
  };

  return (
    <div className={styles.content_container}>
      <div className={styles.tabBar}>
        <div className={styles.scrollableTab}>
          {Tab.map((item, index) => {
            return (
              <div className={styles.btn_wrapper} key={index} ref={el => buttonRefs.current[index] = el}>
                <Button
                  btnText={item.text}
                  btnClick={() => handleTabClick(index)}
                  bgColor={isActive === index ? "#7E22CE" : "transparent"}
                  textColor={isActive === index ? "#fff" : "#000"}
                  radius={"5px"}
                  padding="8px"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.tabContent}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ManageShipment;