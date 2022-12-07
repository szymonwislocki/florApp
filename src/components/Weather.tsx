import { ReactElement, useContext } from "react";
import { useAPI } from "../hooks/useAPI";
import { useWeather } from "../hooks/useWeather";
import { DataContext } from "../providers/DataProvider";

const Weather = (): ReactElement => {
  const { weather } = useContext(DataContext);

  return (
    <div className="blockmenu--weather">
      Na zewnątrz:
      <div className="blockmenu__itemblocks--weather">
        <div className="blockmenu__weatherinfo">
          <p>Wilgotność</p>
          <img src="../../media/iconmonstr-drop-24-24.png" className="weatherinfo__icon" alt="water" />
          <p>{weather?.Humidity + "%"}</p>
        </div>
        <div className="blockmenu__weatherinfo">
          <p>Temperatura</p>
          <img src="../../media/iconmonstr-weather-6-24.png" className="weatherinfo__icon" alt="temperature" />
          <p>{weather?.Temperature.toFixed(1) + "'" + weather?.TemperatureUnit}</p>
        </div>
        <div className="blockmenu__weatherinfo">
          <p>Wiatr</p>
          <img src="../../media/iconmonstr-weather-65-24.png" className="weatherinfo__icon" alt="wind" />
          <p>{weather?.Wind + " " + weather?.WindUnit}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
