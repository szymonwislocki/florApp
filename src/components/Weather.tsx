import { FC, useContext } from "react";
import { useTemperature } from "../hooks/useTemperature";
import { DataContext } from "../providers/DataProvider";

const Weather: FC = () => {
  const {
    weather: { Humidity, Temperature, Wind, WindUnit },
  } = useContext(DataContext);
  return (
    <div className="blockmenu--weather">
      Na zewnątrz:
      <div className="blockmenu__itemblocks--weather">
        <div className="blockmenu__weatherinfo">
          <p>Wilgotność</p>
          <img src="../../media/iconmonstr-drop-24-24.png" className="weatherinfo__icon" alt="water" />
          <p>{Humidity + "%"}</p>
        </div>
        <div className="blockmenu__weatherinfo">
          <p>Temperatura</p>
          <img src="../../media/iconmonstr-weather-6-24.png" className="weatherinfo__icon" alt="temperature" />
          <p>{useTemperature(Temperature, 1)}</p>
        </div>
        <div className="blockmenu__weatherinfo">
          <p>Wiatr</p>
          <img src="../../media/iconmonstr-weather-65-24.png" className="weatherinfo__icon" alt="wind" />
          <p>{Wind + " " + WindUnit}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
