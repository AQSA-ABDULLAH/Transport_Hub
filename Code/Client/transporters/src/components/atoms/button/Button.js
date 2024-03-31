import React from "react";
import "./button.css";

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
      bgColor || (primary ? "#7E22CE" : secondary ? "#e0e0e058" : "transparent"),
    color: textColor || "#ffffff",
    borderRadius: radius || "40px",
    fontSize: size || "16px",
    width: width || "auto",
    fontWeight: fontWeight || "400",
    border: bw || "0px",
    transition: "0.3s", // to smooth out the effect
  };

  const [hovered, setHovered] = React.useState(false);

  const toggleHover = () => setHovered(!hovered);

  return (
    <button 
      className="btn" 
      style={{
        ...buttonStyle,
        backgroundColor: hovered ?  hoverColor: buttonStyle.backgroundColor,
        cursor: "pointer" // to change the cursor to pointer on hover
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
