import { createContext, ReactElement, SetStateAction, useState } from "react";
import { useAPI } from "../hooks/useAPI";

interface Props {
  children: JSX.Element;
}
interface Device extends Object {
  properties: DeviceProperties;
  type: string;
  id: number;
  roomID: number;
  name: string;
}
interface Room extends Object {
  id: number;
  name: string;
}

interface Meta extends Object {
  sunsetHour: string;
}

interface DeviceProperties extends Object {
  batteryLevel: string;
  value: string;
}

interface ContextTypes {
  devices: Device[];
  setDevices: (a: SetStateAction<Device[] | []>) => void;
  fetchDevices: () => void;
  fetchRooms: () => void;
  fetchMeta: () => void;
  obtainNotifications: () => void;
  meta: Meta[];
  setMeta: (a: SetStateAction<Meta[]>) => void;
  allRooms: Room[];
  setAllRooms: (a: Room[]) => void;
}

export const DataContext = createContext<ContextTypes>({} as ContextTypes);

const DataProvider = ({ children }: Props): ReactElement => {
  const [devices, setDevices] = useState<Device[] | []>([]);
  const [meta, setMeta] = useState<Meta[]>({});
  const [allRooms, setAllRooms] = useState<Room[]>([]);

  const fetchMeta = (): void => {
    useAPI("settings/info").then((metadata) => {
      console.log(metadata);
      setMeta(metadata);
    });
  };

  const fetchDevices = (): void => {
    useAPI("devices").then((devs) => {
      console.log(devs);
      setDevices(devs);
    });
  };

  const fetchRooms = (): void => {
    useAPI("rooms").then((rooms) => {
      console.log(rooms);
      setAllRooms(rooms);
    });
  };

  const obtainNotifications = async (): Promise<void> => {
    //Possible notification categories: low battery (ONLY? - have to check if anything more from API is possible to present it as worth-attention notification)
    console.log("oN called");
    const batEquipped: Device[] = devices?.filter((e: Device) => parseFloat(e.properties.batteryLevel) < 5);
    console.log(batEquipped);
  };
  return <DataContext.Provider value={{ devices, setDevices, fetchDevices, obtainNotifications, meta, setMeta, allRooms, setAllRooms, fetchRooms, fetchMeta }}>{children}</DataContext.Provider>;
};

export default DataProvider;
