import { useState } from "react";
import useUserAction from "../../../utils/customHooks/useUserAction";
import Button from "../button/Button";
import "./section6atom.css";
import LoginModal from "../../LoginModal/LoginModal";
import useModalToggler from "../../../utils/customHooks/useModalToggler";
function Homesection6atoms({ data }) {
  const { isOpen, toggleIsOpen } = useModalToggler();

  const { reduxState, userAction } = useUserAction(() => {});
  const { heading, timePeriod, timeLimit, dietPlan, information, price } = data;
  const amount = price.split("/");
  return (
    <div className="package-card">
      <div className="card-content">
        <div className="package-header">{heading}</div>
        <div className="package-subheader">Trained Under Best Trainers</div>

        <ul className="no-bullet">
          <li>{timePeriod}</li>
          <li>{timeLimit}</li>
          <li>{dietPlan}</li>
          <li>{information}</li>
        </ul>
        <div className="price">
          <span>{amount[0]}</span>/{amount[1]}
        </div>
        <div className="btndiv">
          <Button
            btnText={reduxState.isSignedIn ? "Upgrade Now" : "JOIN WITH US"}
            primary
            btnClick={reduxState.isSignedIn ? userAction : toggleIsOpen}
          />
        </div>
      </div>
      {isOpen ? <LoginModal onClose={toggleIsOpen} /> : ""}
    </div>
  );
}
export default Homesection6atoms;
