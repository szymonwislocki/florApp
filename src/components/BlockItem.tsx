import { HTMLAttributes, ReactElement, useContext } from "react";
import { useAction } from "../hooks/useAction";
import { DataContext } from "../providers/DataProvider";
interface Props {
  id: number;
  name: string;
  batteryLevel: string;
  temperature: string | undefined;
  roomID: number;
  switchable?: string;
}
const BlockItem = ({ name, id, batteryLevel, temperature, roomID, switchable }: Props): ReactElement => {
  const { allRooms } = useContext(DataContext);
  const suggestion = "";
  const icon = "";

  const handleSwitch = () => {
    useAction(id, "", 0, "GET").then((r) => {
      if (r.properties.value === "true") {
        useAction(id, "turnOff", 1, "POST");
      } else {
        useAction(id, "turnOn", 1, "POST");
      }
    });
  };
  return (
    <div onClick={{ switchable } && handleSwitch} className="blockitem">
      <p className="blockitem__roomname">{name}</p>
      <img className="blockitem__icon" src={icon} />
      {true ? <p className="blockitem__suggestion">{suggestion}</p> : null}
    </div>
  );
};

export default BlockItem;
