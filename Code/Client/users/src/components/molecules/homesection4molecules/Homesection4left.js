import Button from "../../atoms/button/Button";
import React, { useState } from "react";
import "./Section4.css";
import LoginModal from "../../LoginModal/LoginModal";
import useUserAction from "../../../utils/customHooks/useUserAction";
import { useNavigate } from "react-router-dom";
import useModalToggler from "../../../utils/customHooks/useModalToggler";

function Homesection4left() {
  const { isOpen, toggleIsOpen } = useModalToggler();

  const navigate = useNavigate();
  const { reduxState, userAction } = useUserAction(() => {
    navigate("/classes");
    console.log("Custom prop function executed");
  });

  return (
    <div className="left-classes-container">
      <hr />
      <div className="left-inner">
        <div className="Header-text-4">days and time</div>
        <div className="Day-tag">
          <hr />
          <span>MONDAY</span>
        </div>
        <div className="Day-tag">
          <hr />
          <span>TUESDAY</span>
        </div>
        <div className="Day-tag">
          <hr />
          <span>WEDNESDAY</span>
        </div>
        <div className="Day-tag">
          <hr />
          <span>THURSDAY</span>
        </div>
        <div className="Day-tag">
          <hr />
          <span>FRIDAY</span>
        </div>
        <div className="Day-tag">
          <hr />
          <span>SATURDAY</span>
        </div>
        <div className="Day-tag">
          <hr />
          <span>SUNDAY</span>
        </div>
        <div className="button-container">
          <Button
            primary
            btnText={reduxState.isSignedIn ? "Schedule Class" : "JOIN WITH US"}
            size={"14px"}
            btnClick={reduxState.isSignedIn ? userAction : toggleIsOpen}
          />
        </div>
        {isOpen ? <LoginModal onClose={toggleIsOpen} /> : ""}
      </div>
    </div>
  );
}
export default Homesection4left;
