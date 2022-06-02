import React,{useContext} from "react";
import { ActiveScreenContext } from "../index";
import "../index.scss";
import Button from "../../Button";
import Card from "../../Card";
import { ReactComponent as User } from "../../../assets/images/user.svg";
import { ReactComponent as Users } from "../../../assets/images/users-alt.svg";

const Usage = (props) => {
  const setActiveScreen = useContext(ActiveScreenContext);
  return (
    <>
      <div className="content-heading">How are you planning to use Eden ?</div>
      <div className="content-desc">
        We'll streamline your setup experience accordingly.
      </div>
      <div className="content-form">
      <div className="content-cards">
        <Card
          icon={<User />}
          heading="For myself"
          content="Write better. Think more clearly. Stay organised."
        />
        <Card
          icon={<Users />}
          heading="With my team"
          content="Wikis, docs, tasks &amp; projects, all in one place."
        />
        
      </div>
      <Button label="Create Workspace"  handleClick={()=>setActiveScreen("4")}/>
      </div>
    </>
  );
};

export default Usage;
