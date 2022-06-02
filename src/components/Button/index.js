import React from "react";
import "./index.scss";

const Button = (props) => {
  const { label, handleClick } = props;
  return (
    <button className="default-btn" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
