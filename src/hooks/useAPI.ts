export const useAPI = async (path: string): Promise<[]> => {
  const response = await fetch(`//${localStorage.getItem("clientIP")}/api/${path}`);
  return await response.json();
};
