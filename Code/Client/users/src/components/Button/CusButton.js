import React from "react";

import "./button.css";

const CusButton = (props) => {
  const {
    btnText,
    primary,
    secondary,
    size,
    bgColor,
    textColor,
    width,
    icon,
    btnClick,
    border,
    fontWeight,
    margin,
  } = props;

  const buttonStyle = {
    backgroundColor:
      bgColor || (primary ? "#7E22CE" : secondary ? "#6c757d" : "transparent"),
    color: textColor || "#ffffff",
    fontSize: size || "16px",
    width: width || "auto",
    border: border || "none",
    fontWeight: fontWeight || "bold",
    margin: margin || "0px 10px",
  };

  return (
    <button className="btn" style={buttonStyle} onClick={btnClick}>
      {icon}
      {btnText}
    </button>
  );
};

export default CusButton;
