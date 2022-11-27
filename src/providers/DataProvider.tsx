import { createContext, ReactElement, SetStateAction, useState } from "react";
import { useAPI } from "../hooks/useAPI";

export const DataContext = createContext<ContextTypes>({} as ContextTypes);

interface Props {
  children: JSX.Element;
}

const DataProvider = ({ children }: Props): ReactElement => {
  const [devices, setDevices] = useState<Device[] | []>([]);
  const [meta, setMeta] = useState<Meta[]>([]);
  const [allRooms, setAllRooms] = useState<Room[]>([]);

  const fetchData = async (): Promise<void> => {
    setMeta(await useAPI("settings/info"));
    setDevices(await useAPI("devices"));
    setAllRooms(await useAPI("rooms"));
  };

  const obtainNotifications = async (): Promise<void> => {
    //Possible notification categories: low battery (ONLY? - have to check if anything more from API is possible to present it as worth-attention notification)
    const batEquipped: Device[] = devices?.filter((e: Device) => parseFloat(e.properties.batteryLevel) < 5);
  };
  return <DataContext.Provider value={{ devices, setDevices, obtainNotifications, meta, setMeta, allRooms, setAllRooms, fetchData }}>{children}</DataContext.Provider>;
};

export default DataProvider;
