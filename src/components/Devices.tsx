import { ReactElement, useContext } from "react";
import { deviceTypes } from "../data/devicetypes";
import { DataContext } from "../providers/DataProvider";
import Device from "./Device";

const Devices = (): ReactElement => {
  const { devices } = useContext<ContextTypes>(DataContext);

  //get data of a temperature sensor from the same room as heat controller is
  const sensorRef = devices.find((el: Device) => el.type === "com.fibaro.temperatureSensor" && el.roomID === el.roomID);

  return (
    <div className="blockmenu">
      Urządzenia:
      <div className="blockmenu__itemblocks">
        {devices
          .filter((el: Device) => deviceTypes.includes(el.type))
          .map((el: Device) => {
            switch (el.type) {
              case "com.fibaro.binarySwitch": {
                return <Device key={el.id} id={el.id} type={el.type} value={el.properties.value} room={el.roomID} name={el.name} switchable />;
              }
              case "com.fibaro.FGT001": {
                return <Device key={el.id} id={el.id} value={el.properties.value} type={el.type} room={el.roomID} name={el.name} batteryLevel={el.properties.batteryLevel} temperature={sensorRef?.properties.value} givenTemperature={el.properties.value} />;
              }
            }
          })}
      </div>
    </div>
  );
};

export default Devices;
