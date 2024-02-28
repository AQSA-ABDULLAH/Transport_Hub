import LoginModal from "../../LoginModal/LoginModal";
import { useState, useEffect } from "react";
import Button from "../../atoms/button/Button";
import "./section3molecule.css";
import useUserAction from "../../../utils/customHooks/useUserAction";
import { useNavigate } from "react-router-dom";
import useModalToggler from "../../../utils/customHooks/useModalToggler";

function HomeSection3molecule() {
  const navigate = useNavigate();
  const { isOpen, toggleIsOpen, setIsOpen } = useModalToggler();
  const { reduxState, userAction } = useUserAction(() => {
    navigate("/about");
  });

  useEffect(() => {
    if (reduxState.isSignedIn) {
      setIsOpen(false);
    }
  }, [reduxState.isSignedIn]);

  return (
    <div className="left-container">
      <h1 className="header-aboutus">Welcome <br/>to the body doctor</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem ipsum has been the Industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley
      </p>
      <div className="btn-container">
        <Button
          primary
          btnText={
            reduxState.isSignedIn ? "Learn More About Us" : "JOIN WITH US"
          }
          size={"14px"}
          btnClick={reduxState.isSignedIn ? userAction : toggleIsOpen}
        />
      </div>
      {isOpen ? <LoginModal onClose={toggleIsOpen} /> : ""}
    </div>
  );
}
export default HomeSection3molecule;
