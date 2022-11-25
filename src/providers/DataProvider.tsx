import { createContext, ReactElement, SetStateAction, useState } from "react";
import { useAPI } from "../hooks/useAPI";

interface Props {
  children: JSX.Element;
}
interface Device extends Object {
  properties: Properties;
}

interface Properties extends Object {
  batteryLevel: string;
}

interface ContextTypes {
  devices: Device[];
  setDevices: (a: SetStateAction<Device[] | []>) => void;
  fetchDevices: () => void;
  obtainNotifications: () => void;
}

export const DataContext = createContext<ContextTypes>({} as ContextTypes);

const DataProvider = ({ children }: Props): ReactElement => {
  const [devices, setDevices] = useState<Device[] | []>([]);
  const [meta, setMeta] = useState<object>({});

  const fetchMeta = (): void => {
    useAPI("settings/network").then((meta) => {
      console.log(meta);
    });
  };

  const fetchDevices = (): void => {
    useAPI("devices").then((devs) => {
      console.log(devs);
      setDevices(devs);
    });
  };

  const obtainNotifications = async (): Promise<void> => {
    console.log("oN called");
    const batEquipped = devices.filter((e: Device) => Number(e.properties.batteryLevel) < 80);
  };
  return <DataContext.Provider value={{ devices, setDevices, fetchDevices, obtainNotifications }}>{children}</DataContext.Provider>;
};

export default DataProvider;
