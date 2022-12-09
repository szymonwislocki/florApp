import { FC, useContext, useState } from "react";
import { useTemperature } from "../hooks/useTemperature";
import { DataContext } from "../providers/DataProvider";
import RoomDetails from "./RoomDetails";

interface Props {
  id: number;
  name: string;
  temperatureSensor: number;
  icon: string;
}

const Room: FC<Props> = ({ name, id, icon, temperatureSensor }) => {
  const { devices } = useContext(DataContext);
  const [details, setDetails] = useState<boolean>(false);

  //get data of device which is handling a 'temperatureSensor' role in a proper room
  const temp = devices.find((el) => el.roomID === id && el.id === temperatureSensor)?.properties.value;

  const getIcon = () => {
    //'room_sypialnia' sound pretty good. Actually all of there are system names
    switch (icon) {
      case "room_cinema": {
        return "../../media/iconmonstr-television-21-24.png";
      }
      case "room_dining": {
        return "../../media/iconmonstr-eat-2-24.png";
      }
      case "room_sypialnia2": {
        return "../../media/iconmonstr-bed-4-24.png";
      }
      case "room_drzwiwejsciowe": {
        return "../../media/iconmonstr-door-2-24.png";
      }
      case "": {
        return "../../media/iconmonstr-drop-24-24.png";
      }
    }
  };

  return (
    <>
      <div className="blockitem" onClick={() => setDetails(true)}>
        <p className="blockitem__roomname">{name}</p>
        {/* {true ? <p className="blockitem__suggestion">{suggestion}</p> : null} */}
        <img className="blockitem__icon" alt="room icon" src={getIcon()} />
        <div className="blockitem__roomtemperature">{temp ? <p className="blockitem__details">{useTemperature(temp)}</p> : null}</div>
      </div>
      {details ? <RoomDetails id={id} setDetails={setDetails} /> : null}
    </>
  );
};

export default Room;
