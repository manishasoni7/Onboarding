import React,{useContext} from "react";
import { ActiveScreenContext } from "../index";
import "../index.scss";
import Button from "../../Button";
import Input from "../../Input";

const Workspace = (props) => {
  const setActiveScreen = useContext(ActiveScreenContext);
  return (
    <>
      <div className="content-heading">
        Let's set up a home for all your work
      </div>
      <div className="content-desc">
        You can always create another workspace later.
      </div>
      <div className="content-form">
        <Input label="Workspace Name" type="text" placeholder="Eden"/>
        <Input
          label="Workspace URL"
          placeholder="Example"
          type="text"
          optional
          staticData="www.eden.com/"
        />
        <Button label="Create Workspace" handleClick={()=>setActiveScreen("3")} />
      </div>
      
    </>
  );
};

export default Workspace;
