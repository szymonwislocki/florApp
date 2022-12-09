import { FC, useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const Weather: FC = () => {
  const {
    weather: { Humidity, Temperature, TemperatureUnit, Wind, WindUnit },
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
          <p>{Temperature.toFixed(1) + "'" + TemperatureUnit}</p>
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
