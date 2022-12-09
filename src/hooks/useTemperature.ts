export const useTemperature = (temperature: string | number, precision: number): string => {
  return Number(temperature).toFixed(precision) + `°C`;
};
