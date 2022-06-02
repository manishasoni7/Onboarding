import React from "react";
import "./index.scss";

const Card = (props) => {
  const { icon, heading, content } = props;
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-heading">{heading}</div>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
