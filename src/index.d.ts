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
  obtainNotifications: () => void;
  meta: Meta[];
  setMeta: (a: SetStateAction<Meta[]>) => void;
  allRooms: Room[];
  setAllRooms: (a: Room[]) => void;
}

interface DeviceActions {
  turnOff: number;
  turnOn: number;
}
