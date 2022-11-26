interface Device {
  actions: DeviceActions;
  properties: DeviceProperties;
}
interface DeviceProperties {
  value: string;
}
interface DeviceActions {
  turnOff: number;
  turnOn: number;
}

export const useAction = async (id: number, action: string, value: number, method: "GET" | "POST"): Promise<Device> => {
  const response = await (method === "POST" ? fetch(`//${localStorage.getItem("clientIP")}/api/devices/${id}/action/${action}`, { method: method, body: JSON.stringify({ [action]: value }) }) : fetch(`//${localStorage.getItem("clientIP")}/api/devices/${id}`));
  return await response.json();
};
