export const useAction = async (id: number, action: string, value: number): Promise<Device> => {
  const response = await fetch(`//${localStorage.getItem("clientIP")}/api/devices/${id}/action/${action}`, { method: "POST", body: JSON.stringify({ [action]: value }) });
  return await response.json();
};
