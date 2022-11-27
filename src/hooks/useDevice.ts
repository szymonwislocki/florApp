export const useDevice = async (id: number): Promise<Device> => {
  const response = await fetch(`//${localStorage.getItem("clientIP")}/api/devices/${id}`);
  return await response.json();
};
