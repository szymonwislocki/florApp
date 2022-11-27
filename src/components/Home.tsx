import { ReactElement, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { deviceTypes } from "../data/devicetypes";
import { DataContext } from "../providers/DataProvider";
import Device from "./Device";
import BlockItem from "./Device";
import Room from "./Room";

const Home = (): ReactElement => {
  const navigate = useNavigate();
  const { devices, allRooms } = useContext(DataContext);

  const handleLogOut = (): void => {
    localStorage.removeItem("clientIP");
    navigate("/login");
  };
  console.log(allRooms);
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
        <div className="blockmenu__itemblocks">
          {allRooms
            //'User1001' stands for technical rooms such as weather bot
            .filter((el: Room) => el.icon !== "User1001")
            .map((el: Room) => (
              <Room key={el.id} id={el.id} name={el.name} icon={el.icon} temperatureSensor={el.defaultSensors.temperature} />
            ))}
        </div>
      </div>
      <div className="blockmenu">
        Urządzenia:
        <div className="blockmenu__itemblocks">
          {devices
            .filter((el) => deviceTypes.includes(el.type))
            .map((el) => {
              switch (el.type) {
                case "com.fibaro.binarySwitch": {
                  return <Device key={el.id} id={el.id} type={el.type} value={el.properties.value} room={el.roomID} name={el.name} switchable />;
                }
                case "com.fibaro.FGT001": {
                  return (
                    <BlockItem
                      key={el.id}
                      id={el.id}
                      icon={el.type}
                      value={el.properties.value}
                      type={el.type}
                      room={el.roomID}
                      name={el.name}
                      batteryLevel={el.properties.batteryLevel}
                      temperature={devices.find((e) => e.type === "com.fibaro.temperatureSensor" && e.roomID === el.roomID)?.properties.value}
                      givenTemperature={el.properties.value}
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
