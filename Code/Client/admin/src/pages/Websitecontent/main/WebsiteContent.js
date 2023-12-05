import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./websitecontent.module.css";
import Button from "../../../components/atoms/buttons/Button";
import { Tab } from "../../../constants/WebsiteContentTab";
import AboutTab from '../tabs/about/AboutTab';
import SliderTab from '../tabs/silder/SliderTab';
import GalleryTab from '../tabs/gallery/GalleryTab';

const WebsiteContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(0);
  const buttonRefs = useRef([]);

  useEffect(() => {

    const params = new URLSearchParams(location.search);
    const tabName = params.get("tab");
    if (tabName == null) {
      document.title = "Website Content"
    }
    if (tabName) {
      const tabIndex = Tab.findIndex(tab => tab.text.toLowerCase() === tabName.toLowerCase());
      if (tabIndex !== -1) {
        setIsActive(tabIndex);
      }
    }
    else {
      navigate(`?tab=About`);
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
        return <AboutTab />
      case 3:
        return <GalleryTab />
      case 4:
        return <SliderTab />
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabBar}>
        <div className={styles.scrollableTab}>
          {Tab.map((item, index) => {
            return (
              <div className={styles.btn_wrapper} key={index} ref={el => buttonRefs.current[index] = el}>
                <Button
                  btnText={item.text}
                  btnClick={() => handleTabClick(index)}
                  bgColor={isActive === index ? "#EC1F3E" : "transparent"}
                  textColor={isActive === index ? "#fff" : "#000"}
                  radius={"10px"}
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

export default WebsiteContent;