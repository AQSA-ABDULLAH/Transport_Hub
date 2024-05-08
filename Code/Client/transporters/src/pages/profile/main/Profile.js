import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tab } from "../../../constants/ProfileTab";
import styles from "./profile.module.css";
import Button from "../../../components/atoms/buttons/Button";
import General from "../tabs/general/General";
import ProfileTab from "../tabs/profile_pic/Profile";
import CNIC from "../tabs/cnic/CNIC";
import License from "../tabs/driving_license/License";
import Vechical from "../tabs/vechical_registration/Vechical";


const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(0);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabName = params.get("tab");
    if (tabName == null) {
      document.title = "Manage Profile"
    }
    if (tabName) {
      const tabIndex = Tab.findIndex(tab => tab.text.toLowerCase() === tabName.toLowerCase());
      if (tabIndex !== -1) {
        setIsActive(tabIndex);
      }
    }
    else {
      navigate(`?tab=Profile`);
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
        return <General/>
      case 1:
        return <ProfileTab/>
      case 2:
        return <CNIC/>
      case 6:
        return <License/>
      case 7:
        return <Vechical/>
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

export default Profile;
