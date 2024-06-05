import { findIndex } from "../utils/findIndex";
import { beachCoordinates } from "./beachCoordinates";

export const getWeatherData = async (beach) => {
  const coordinates = beachCoordinates[decodeURI(beach)];
  if (!coordinates) {
    throw new Error("Beach not found");
  }

  const { latitude, longitude } = coordinates;
  const apiUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${latitude}&longitude=${longitude}&hourly=wave_height,wave_direction,wave_period&timezone=auto&forecast_days=1`;
  const temperatureUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

  const [marineResponse, temperatureResponse] = await Promise.all([
    fetch(apiUrl),
    fetch(temperatureUrl),
  ]);

  if (!marineResponse.ok || !temperatureResponse.ok) {
    throw new Error("No data was returned from the api");
  }

  const [marineData, temperatureData] = await Promise.all([
    marineResponse.json(),
    temperatureResponse.json(),
  ]);
  console.log("🚀 ~ getWeatherData ~ marineData:", marineData);
  console.log("🚀 ~ getWeatherData ~ temperatureData:", temperatureData);

  const now = new Date();
  const currentHour = now.getHours(); // Get the current hour
  const relevantDataMarineIndex = findIndex(
    marineData.hourly.time.map((data) => new Date(data).getHours()),
    (time) => time === currentHour
  );
  console.log(
    "🚀 ~ getWeatherData ~ relevantDataMarineIndex:",
    relevantDataMarineIndex
  );

  if (relevantDataMarineIndex === -1) {
    throw new Error("No relevant data found");
  }

  const waveHeight = marineData.hourly.wave_height[relevantDataMarineIndex];
  const waveSeparation = marineData.hourly.wave_period[relevantDataMarineIndex];
  const waveDirection = getAbsoluteDirection(
    marineData.hourly.wave_direction[relevantDataMarineIndex]
  );

  function getAbsoluteDirection(degrees) {
    const directions = [
      "⬆️ North",
      "↗️ North East",
      "➡️ East",
      "↘️ South East",
      "⬇️ South",
      "↙️ South West",
      "⬅️ West",
      "↖️ North West",
    ];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }
  const temperature =
    temperatureData.hourly.temperature_2m[relevantDataMarineIndex];
  return {
    waveHeight,
    waveSeparation,
    waveDirection,
    temperature,
  };
};
