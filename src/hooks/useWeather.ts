export const useWeather = async () : Promise<Weather> => {
    const response = await fetch(`//${localStorage.getItem("clientIP")}/api/weather`);
    return await response.json();
}