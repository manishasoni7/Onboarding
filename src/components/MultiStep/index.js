import React from "react";
import "./index.scss";

const MultiStep = (props) => {
  const { selectedScreen } = props;
  let list = [1, 2, 3, 4];
  return (
    <ul className="multistep">
      {list.map((item) => (
        <li className={item <= selectedScreen ? "completed" : ""}>{item}</li>
      ))}
    </ul>
  );
};

export default MultiStep;
