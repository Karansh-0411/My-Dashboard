const API_KEY = "b1c6e2177413fea9f369c03a8f79e93a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
