import { ReactElement, useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import Room from "./Room";

const Rooms = (): ReactElement => {
  const { allRooms } = useContext<ContextTypes>(DataContext);

  return (
    <div className="blockmenu">
      Pomieszczenia:
      <div className="blockmenu__itemblocks">
        {allRooms
          //'User1001' stands for technical rooms such as weather bot. I do not want it in that moment
          .filter((el: Room) => el.icon !== "User1001")
          .map((el: Room) => (
            <Room key={el.id} id={el.id} name={el.name} icon={el.icon} temperatureSensor={el.defaultSensors.temperature} />
          ))}
      </div>
    </div>
  );
};

export default Rooms;
