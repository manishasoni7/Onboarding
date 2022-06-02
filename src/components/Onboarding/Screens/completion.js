import React, { useContext } from "react";
import { ActiveScreenContext } from "../index";
import "../index.scss";
import Button from "../../Button";
import tick from "../../../assets/images/tick.jpg";

const Completion = (props) => {
  const setActiveScreen = useContext(ActiveScreenContext);
  return (
    <>
      <img src={tick} alt="Tickmark" />
      <div className="content-heading">Congratulations, Eren!</div>
      <div className="content-desc">
        You have completed onboarding, you can start using the Eden!
      </div>
      <div className="content-form">
        <Button label="Launch Eden" handleClick={() => setActiveScreen("1")} />
      </div>
    </>
  );
};

export default Completion;
