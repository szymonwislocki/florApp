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
  defaultThermostat: number;
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
  temperature: string;
  givenTemperature: string;
  nextTargetLevel: string;
  batteryLevel: string;
  targetLevel: string;
}

interface ContextTypes {
  devices: Device[];
  setDevices: (a: SetStateAction<Device[] | []>) => void;
  fetchData: () => void;
  meta: Meta[];
  setMeta: (a: SetStateAction<Meta[]>) => void;
  allRooms: Room[];
  setAllRooms: (a: Room[]) => void;
  weather: Weather;
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
