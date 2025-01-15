import React, { useState, useEffect } from "react";
import "./LocalityWeather.css";
import localities from "./LocalityWeatherData";

const LocalityWeather = () => {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "9a3f74970d13e1dd48e4fca9215ca0b7",
  };

  const [weatherData, setWeatherData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [sortBy, setSortBy] = useState("temperature");
  const [filterCondition, setFilterCondition] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state for better UX

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherPromises = localities.map(async (locality) => {
          const response = await fetch(
            `${api.base}weather?lat=${locality.latitude}&lon=${locality.longitude}&units=metric&appid=${api.key}`
          );
          if (!response.ok) {
            throw new Error(`Failed to fetch data for ${locality.localityName}`);
          }
          const data = await response.json();
          return {
            localityName: locality.localityName,
            temperature: data.main?.temp || "N/A",
            condition: data.weather ? data.weather[0]?.description : "N/A",
            humidity: data.main?.humidity || "N/A",
            windSpeed: data.wind?.speed || "N/A",
          };
        });

        const results = await Promise.all(weatherPromises);
        setWeatherData(results);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [api.base, api.key]); // Explicitly added `api.base` and `api.key` to the dependencies

  const filteredData = weatherData.filter((weather) => {
    const matchesSearchQuery =
      weather.localityName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCondition =
      filterCondition === "" || weather.condition.toLowerCase().includes(filterCondition.toLowerCase());
    return matchesSearchQuery && matchesCondition;
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortBy === "temperature") {
      return a.temperature - b.temperature;
    } else if (sortBy === "humidity") {
      return a.humidity - b.humidity;
    } else if (sortBy === "windSpeed") {
      return a.windSpeed - b.windSpeed;
    }
    return 0;
  });

  return (
    <div className="localityweather">
      <div className="localityweather-container">
        <h2>Locality Weather</h2>
        <input
          type="text"
          placeholder="Search by locality"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={filterCondition}
          onChange={(e) => setFilterCondition(e.target.value)}
        >
          <option value="">All Conditions</option>
          <option value="clear">Clear</option>
          <option value="cloudy">Cloudy</option>
          <option value="rain">Rain</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="temperature">Temperature</option>
          <option value="humidity">Humidity</option>
          <option value="windSpeed">Wind Speed</option>
        </select>

        <div className="localityweather-list">
          {loading ? (
            <p>Loading weather data...</p>
          ) : sortedData.length === 0 ? (
            <p>No weather data found.</p>
          ) : (
            sortedData.map((weather, index) => (
              <div key={index} className="localityweather-item">
                <h3>{weather.localityName}</h3>
                <p>Temperature: {weather.temperature}°C</p>
                <p>Condition: {weather.condition}</p>
                <p>Humidity: {weather.humidity}%</p>
                <p>Wind Speed: {weather.windSpeed} m/s</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LocalityWeather;
