import { ReactElement, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { deviceTypes } from "../data/devicetypes";
import { DataContext } from "../providers/DataProvider";
import BlockItem from "./BlockItem";

fetch("//192.168.0.200/api/devices/29/action/turnOff", { method: "POST", body: JSON.stringify({ turnOff: 0 }) })
  .then((r) => r.json())
  .then((r) => console.log(r));

const Home = (): ReactElement => {
  const navigate = useNavigate();
  const { devices } = useContext(DataContext);

  const handleLogOut = (): void => {
    localStorage.removeItem("clientIP");
    navigate("/login");
  };

  return (
    <div className="home">
      <div className="home__header">
        <h1>Witaj w domu!</h1>
        <button className="home__button" onClick={handleLogOut}>
          Wyloguj
        </button>
      </div>
      <div className="home__notifications">Bieżące komunikaty:</div>

      <div className="blockmenu">
        Sugestie działań:
        <div className="blockmenu__itemblocks">{/* items */}</div>
      </div>
      <div className="blockmenu">
        Pomieszczenia:
        <div className="blockmenu__itemblocks">{/* items */}</div>
      </div>
      <div className="blockmenu">
        Urządzenia:
        <div className="blockmenu__itemblocks">
          {devices
            .filter((el) => deviceTypes.includes(el.type))
            .map((el) => {
              switch (el.type) {
                case "com.fibaro.binarySwitch": {
                  return <BlockItem key={el.id} id={el.id} value={el.properties.value} type={el.type} room={el.roomID} name={el.name} />;
                }
                case "com.fibaro.FGT001": {
                  return (
                    <BlockItem
                      key={el.id}
                      id={el.id}
                      value={el.properties.value}
                      type={el.type}
                      room={el.roomID}
                      name={el.name}
                      batteryLevel={el.properties.batteryLevel}
                      temperature={devices.find((e) => e.type === "com.fibaro.temperatureSensor" && e.roomID === el.roomID)?.properties.value}
                      switchable
                    />
                  );
                }
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
