import React, { useState, createContext } from "react";
import "./index.scss";
import logo from "../../assets/images/logo.jpg";
import Welcome from "./Screens/welcome";
import Workspace from "./Screens/workspace";
import Usage from "./Screens/usage";
import Completion from "./Screens/completion";
import MultiStep from "../MultiStep";

export const ActiveScreenContext = createContext();

const Onboarding = (props) => {
  const [activeScreen, setActiveScreen] = useState("1");
  const renderScreen= ()=>{switch (activeScreen) {
    case "1":
      return <Welcome/>;
    case "2":
      return <Workspace/>;
    case "3":
      return <Usage/>;
    case "4":
      return <Completion/>;

    default:
      break;
  }}
  return (
    <ActiveScreenContext.Provider value={setActiveScreen}>
    <div className="layout">
      <div className="layout-heading">
        <img src={logo} alt="logo" />
        <h1>Eden</h1>
      </div>
      <MultiStep selectedScreen={activeScreen}/>
      <div className="content">{renderScreen()}</div>
    </div>
    </ActiveScreenContext.Provider>
  );
};

export default Onboarding;
