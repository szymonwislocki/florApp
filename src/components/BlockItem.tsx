import { ReactElement } from "react";

const BlockItem = (): ReactElement => {
  const suggestion = "";
  const icon = "";
  const room = "";
  return (
    <div className="blockitem">
      <p className="blockitem__roomname">{room}</p>
      <img className="blockitem__icon" src={icon} />
      {true ? <p className="blockitem__suggestion">{suggestion}</p> : null}
    </div>
  );
};

export default BlockItem;
