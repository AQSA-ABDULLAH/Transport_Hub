import React from "react";
import "./button.module.css";

const Button = (props) => {
  const {
    btnText,
    primary,
    secondary,
    size,
    radius,
    fontWeight,
    bgColor,
    textColor,
    bw,
    width, 
    btnClick,
    hoverColor,
  } = props;

  const buttonStyle = {
    backgroundColor:
      bgColor || (primary ? "#7E22CE" : secondary ? "#F3F4F6" : "transparent"),
    color: textColor || "#ffffff",
    borderRadius: radius || "40px",
    fontSize: size || "16px",
    width: width || "auto",
    fontWeight: fontWeight || "400",
    border: bw || "0px",
    transition: "0.3s",
  };

  const [hovered, setHovered] = React.useState(false);

  const toggleHover = () => setHovered(!hovered);

  return (
    <button 
      className="btn" 
      style={{
        ...buttonStyle,
        backgroundColor: hovered ?  hoverColor: buttonStyle.backgroundColor,
        cursor: "pointer"
      }} 
      onClick={btnClick}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {btnText}
    </button>
  );
};

export default Button;