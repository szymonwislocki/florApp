import { useState } from "react";

export const useAPI = async (path: string): Promise<[]> => {
  console.log(path);
  const response = await fetch(`//${localStorage.getItem("clientIP")}/api/${path}`);
  return await response.json();
};
