import React, { useState } from "react";
import { fetchWeather } from "./weatherAPI";

const WeatherWidget = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleFetchWeather = async () => {
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError("City not found or API error.");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Weather Widget</h2>
      <div className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter city name"
        />
        <button
          onClick={handleFetchWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
        >
          Get Weather
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">{weatherData.name}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
