import { FC, useContext } from "react";
import { deviceTypes } from "../data/devicetypes";
import { DataContext } from "../providers/DataProvider";
import Device from "./Device";

const Devices : FC = () => {
  const { devices } = useContext<ContextTypes>(DataContext);

  return (
    <div className="blockmenu">
      Urządzenia:
      <div className="blockmenu__itemblocks">
        {devices
          .filter((el: Device) => deviceTypes.includes(el.type))
          .map((el: Device) => {
            switch (el.type) {
              case "com.fibaro.binarySwitch": {
                return <Device key={el.id} id={el.id} switchable />;
              }
              case "com.fibaro.FGT001": {
                return <Device key={el.id} id={el.id}/>;
              }
            }
          })}
      </div>
    </div>
  );
};

export default Devices;
