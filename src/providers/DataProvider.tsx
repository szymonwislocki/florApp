import { createContext, FC, useState } from "react";
import { useAPI } from "../hooks/useAPI";
import { useWeather } from "../hooks/useWeather";

export const DataContext = createContext<ContextTypes>({} as ContextTypes);

interface Props {
  children: JSX.Element;
}

const DataProvider: FC<Props> = ({ children }) => {
  const [devices, setDevices] = useState<Device[]>([] as Device[]);
  const [meta, setMeta] = useState<Meta[]>([]);
  const [allRooms, setAllRooms] = useState<Room[]>([]);
  const [weather, setWeather] = useState<Weather>({} as Weather);
  const [alerts, setAlerts] = useState<FibaroNotification[] | []>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    setLoaded(false);
    setMeta(await useAPI("settings/info"));
    setDevices(await useAPI("devices"));
    setAllRooms(await useAPI("rooms"));
    setWeather(await useWeather());
    setAlerts(await useAPI("panels/notifications"));
    setLoaded(true);
  };

  return <DataContext.Provider value={{ devices, setDevices, meta, setMeta, allRooms, setAllRooms, fetchData, weather, alerts, setAlerts, loaded }}>{children}</DataContext.Provider>;
};

export default DataProvider;
