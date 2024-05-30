export const getWeatherData = async (beach) => {
    const response = await fetch(`/api/weather?beach=${beach}`);
    if (!response.ok) {
        return {
            waveHeight: 0.3,
            waveSeparation: 0.4,
            wind: 10,
            temperature: 25
        }
    //   throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  };