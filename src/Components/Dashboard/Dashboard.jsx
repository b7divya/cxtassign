
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { FaCloudRain, FaTemperatureHigh, FaCloudSun } from "react-icons/fa";

const Dashboard = () => {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "9a3f74970d13e1dd48e4fca9215ca0b7",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("city");

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        setWeather(result);
        setError("");
      })
      .catch(() => {
        setError("City not found. Please enter a valid city name.");
        setWeather(null);
      });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Weather Dashboard</h2>
        </div>
        <div className="dashboard-tabs">
          <button
            className={`dashboard-tab ${activeTab === "city" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("city")}
          >
            Search City
          </button>
          <Link to="/dashboard-locality" className="dashboard-link">
            <button
              className={`dashboard-tab ${activeTab === "locality" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("locality")}
            >
              Localities
            </button>
          </Link>
        </div>
        {activeTab === "city" && (
          <div className="dashboard-search">
            <input
              type="text"
              placeholder="Enter city name..."
              className="dashboard-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="dashboard-search-btn" onClick={searchPressed}>
              Search
            </button>
          </div>
        )}
        {weather && (
          <div className="dashboard-weather">
            <div className="weather-widget">
              <FaCloudRain className="weather-icon" />
              <h3 className="weather-title">Rain</h3>
              <p className="weather-value">
                {weather.rain && weather.rain["1h"]
                  ? `${weather.rain["1h"]} mm`
                  : "No Data"}
              </p>
            </div>
            <div className="weather-widget">
              <FaTemperatureHigh className="weather-icon" />
              <h3 className="weather-title">Temperature</h3>
              <p className="weather-value">{`${weather.main.temp}°C`}</p>
            </div>
            <div className="weather-widget">
              <FaCloudSun className="weather-icon" />
              <h3 className="weather-title">Condition</h3>
              <p className="weather-value">{weather.weather[0].main}</p>
            </div>
          </div>
        )}
        {error && <p className="dashboard-error">{error}</p>}
      </div>
    </div>
  );
};

export default Dashboard;

