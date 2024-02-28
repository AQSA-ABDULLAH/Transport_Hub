import React from "react";
import AboutCard from "../../atoms/aboutcard/AboutCard";
import Preview from "../../atoms/aboutcard/Preview";
import style from "./aboutus.module.css";

const Aboutus = (props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.mainMessage}>
          <div className={style.messageContainer}>
            <AboutCard
              heading={props.heading}
              text={props.text}
              author={props.author}
            />
          </div>
        </div>

        <div className={style.previewImg}>
          <Preview image={props.img} />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
