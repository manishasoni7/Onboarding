import React, { useContext } from "react";
import { ActiveScreenContext } from "../index";
import "../index.scss";
import Button from "../../Button";
import Input from "../../Input";

const Welcome = (props) => {
  const setActiveScreen = useContext(ActiveScreenContext);
  return (
    <>
      <div className="content-heading">Welcome! First things first...</div>
      <div className="content-desc">You can always change them later.</div>
      <div className="content-form">
        <Input label="Full Name" type="text" placeholder="Steve Jobs"/>
        <Input label="Display Name" type="text" placeholder="Steve"/>
        <Button
          label="Create Workspace"
          handleClick={() => setActiveScreen("2")}
        />
      </div>
    </>
  );
};

export default Welcome;
