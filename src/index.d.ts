interface Device {
  properties: DeviceProperties;
  type: string;
  id: number;
  roomID: number;
  name: string;
  actions: DeviceActions;
}

interface Room {
  id: number;
  name: string;
  defaultSensors: SensorList;
  icon: string;
}

interface SensorList {
  temperature: number;
}

interface Meta {
  sunsetHour: string;
}

interface DeviceProperties {
  batteryLevel: string;
  value: string;
}

interface ContextTypes {
  devices: Device[];
  setDevices: (a: SetStateAction<Device[] | []>) => void;
  fetchData: () => void;
  meta: Meta[];
  setMeta: (a: SetStateAction<Meta[]>) => void;
  allRooms: Room[];
  setAllRooms: (a: Room[]) => void;
  weather: Weather | null;
  alerts: FibaroNotification[];
  setAlerts: (a: FibaroNotification[]) => void;
  loaded: boolean;
}

interface FibaroNotification {
  id: number;
  name: string;
}
interface DeviceActions {
  turnOff: number;
  turnOn: number;
}

interface Weather {
  Humidity: number;
  Temperature: number;
  TemperatureUnit: string;
  Wind: number;
  WindUnit: string;
}
