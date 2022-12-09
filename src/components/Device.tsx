import { ReactElement, useContext, useEffect, useState } from "react";
import { useAction } from "../hooks/useAction";
import { useDevice } from "../hooks/useDevice";
import { useTemperature } from "../hooks/useTemperature";

interface Props {
  id: number;
  name: string;
  batteryLevel?: string;
  temperature?: string | undefined;
  switchable?: boolean;
  type: string;
  value: string;
  givenTemperature?: string;
  room?: number;
}

const Device = ({ name, type, id, batteryLevel, givenTemperature, temperature, value, switchable }: Props): ReactElement => {
  const [currentValue, setCurrentValue] = useState<string>(value);
  // const suggestion = "";

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

  const handleClick = async () => {
    //switchable block
    if (switchable) {
      const actionType = currentValue === "true" ? "turnOff" : "turnOn";
      await useAction(id, actionType, 1);
      //response from "GET" query above does not return full data about device, so I have to again fetch it below + wait manually to avoid latency in communication between homecenter and device
      setTimeout(() => useDevice(id).then((r) => setCurrentValue(r.properties.value)), 100);
    }
  };

  return (
    <div onClick={handleClick} className="blockitem">
      <p className="blockitem__roomname">{name}</p>
      {givenTemperature ? (
        <p className="blockitem__details">
          {useTemperature(givenTemperature)}
          <img className="blockitem__icon" src={getIcon()} alt="device icon" />
        </p>
      ) : (
        <img className="blockitem__icon" src={getIcon()} alt="device icon" />
      )}
      {/* {true ? <p className="blockitem__suggestion">{suggestion}</p> : null} */}
      <div className="blockitem__detailsrow">
        {temperature ? <p className="blockitem__details">{useTemperature(temperature)}</p> : null}
        {batteryLevel ? <p className="blockitem__details">{batteryLevel + "%"}</p> : null}
        {switchable ? currentValue === "true" ? <div className="blockitem__stateicon">🟡</div> : <div className="blockitem__stateicon">⚪️</div> : null}
      </div>
    </div>
  );
};
export default Device;
