export const useTemperature = (temperature : string) : string => {
    return Number(temperature).toFixed(0) + "'C";
}