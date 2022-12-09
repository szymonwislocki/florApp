import { FC, useContext } from "react";
import { useTemperature } from "../hooks/useTemperature";
import { DataContext } from "../providers/DataProvider";
import Device from "./Device";

interface Props {
  id: number;
  setDetails: (arg: boolean) => void;
}

const RoomDetails: FC<Props> = ({ id, setDetails }: Props) => {
  const { allRooms, devices } = useContext(DataContext);
  const thisRoom = allRooms.find((el) => el.id === id) as Room;
  const tempSensor = devices.find((el) => el.id === thisRoom.defaultSensors.temperature) as Device;
  const heatInfo = devices.find((el) => el.id === thisRoom.defaultThermostat)?.properties as DeviceProperties;

  const handleClose = () => setDetails(false);

  return (
    <div className="details">
      <div className="details__window">
        <p className="details__name">
          {thisRoom.name}
          <button className="details__button" onClick={handleClose}>
            Wyjdź
          </button>
        </p>
        {/* //do not show any heating info if there is no such devices */}
        {tempSensor ? (
          <p className="details__data--temperature">
            Temperatura: <span>{useTemperature(tempSensor.properties.value, 1)} </span>
          </p>
        ) : null}
        {heatInfo ? (
          <>
            <div className="details__datablock">
              Informacje o syst. grzewczym:
              <p className="details__data">
                Faktyczne ustawienie: <span>{useTemperature(heatInfo.value, 1)}</span>
              </p>
              <p className="details__data">
                Spodziewane auto-ustawienie: <span>{useTemperature(heatInfo.targetLevel, 1)}</span>
              </p>
              <p className="details__data">
                Następne auto-ustawienie: <span>{useTemperature(heatInfo.nextTargetLevel, 1)}</span>
              </p>
              <p className="details__data">
                Poziom naładowania baterii: <span>{heatInfo.batteryLevel + " %"}</span>
              </p>
            </div>
          </>
        ) : null}
        <div className="details__datablock--devices">
          {devices
            .filter((el) => el.roomID === id && el.type === "com.fibaro.binarySwitch")
            .map((el) => {
              return <Device key={el.id} id={el.id} switchable />;
            })}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
