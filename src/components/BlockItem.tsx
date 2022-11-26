import { HTMLAttributes, ReactElement, useContext, useState } from "react";
import { useAction } from "../hooks/useAction";
import { DataContext } from "../providers/DataProvider";
interface Props {
  id: number;
  name: string;
  batteryLevel: string;
  temperature: string | undefined;
  roomID: number;
  switchable?: boolean;
  type: string;
  value: string;
  givenTemperature: string;
}
const BlockItem = ({ name, id, type, batteryLevel, givenTemperature, temperature, value, switchable }: Props): ReactElement => {
  const { fetchDevices } = useContext(DataContext);
  const [currentValue, setCurrentValue] = useState(value);
  const suggestion = "";
  const getIcon = () => {
    switch (type) {
      case "com.fibaro.FGT001": {
        return "../../media/iconmonstr-circle-5-32.png";
      }
      case "com.fibaro.binarySwitch": {
        return "../../media/iconmonstr-light-bulb-thin-24-2.png";
      }
    }
  };

  const icon = getIcon();
  const handleClick = () => {
    //switchable block

    //it's look like callback hell actually, probably this shitty API forces me to do this in that way
    useAction(id, "", 0, "GET").then((r) => {
      useAction(id, r.properties.value == "true" ? "turnOff" : "turnOn", 1, "POST").then(() => {
        useAction(id, "", 0, "GET").then((r) => {
          setCurrentValue(r.properties.value);
          console.log(currentValue);
        });
      });
    });
  };
  return (
    <div onClick={handleClick} className="blockitem active">
      <p className="blockitem__roomname">{name}</p>
      {givenTemperature ? (
        <p className="blockitem__details">
          {givenTemperature.split(".", 1) + "'C"}
          <img className="blockitem__icon" src={icon} />
        </p>
      ) : (
        <img className="blockitem__icon" src={icon} />
      )}
      {/* {true ? <p className="blockitem__suggestion">{suggestion}</p> : null} */}
      <div className="blockitem__detailsrow">
        {temperature ? <p className="blockitem__details">{temperature.split(".", 1) + "'C"}</p> : null}
        {batteryLevel ? <p className="blockitem__details">{batteryLevel + "%"}</p> : null}
        {switchable ? currentValue === "true" ? <div className="blockitem__stateicon">🟡</div> : <div className="blockitem__stateicon">⚪️</div> : null}
      </div>
    </div>
  );
};

export default BlockItem;
