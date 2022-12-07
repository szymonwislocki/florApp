import { ReactElement, useContext } from "react";
import { useTemperature } from "../hooks/useTemperature";
import { DataContext } from "../providers/DataProvider";

interface Props {
  id: number;
  name: string;
  temperatureSensor: number;
  icon: string;
}

const Room = ({ name, id, icon, temperatureSensor }: Props): ReactElement => {
  const { devices } = useContext(DataContext);

  //get data of device which is handling a 'temperatureSensor' role in a proper room
  const getTemperature = devices.find((el) => el.roomID === id && el.id === temperatureSensor)?.properties.value;

  const getIcon = () => {
    //if fetched obj does not have 'type' key, i assume it is a room
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

  const iconUrl = getIcon();

  return (
    <div className="blockitem">
      <p className="blockitem__roomname">{name}</p>
      {/* {true ? <p className="blockitem__suggestion">{suggestion}</p> : null} */}
      <img className="blockitem__icon" alt="room icon" src={iconUrl} />
      <div className="blockitem__roomtemperature">{getTemperature ? <p className="blockitem__details">{useTemperature(getTemperature)}</p> : null}</div>
    </div>
  );
};

export default Room;
