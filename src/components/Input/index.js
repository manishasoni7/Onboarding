import React from "react";
import "./index.scss";

const Input = (props) => {
  const { label, placeholder, optional, staticData, type } = props;
  const inputClass = `default-input ${staticData ? "static-input" : ""}`;
  return (
    <div className="input">
      <label>
        {label}
        {optional && <span>(optional)</span>}
      </label>
      <input className={inputClass} type={type} placeholder={placeholder} />
      {staticData && (
        <span id="data" className="static-data">
          {staticData}
        </span>
      )}
    </div>
  );
};

export default Input;
