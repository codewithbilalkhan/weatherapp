import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";

const Home = ({ apikey }) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (value) => {
    if (value === "") {
      setResult(null);
      setError("");
    }
  };
  // This function will be called from WeatherForm
  const handleWeather = async (place) => {
    setError("");
    setResult(null);
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${place}&aqi=no`
      );
      if (!response.ok) {
        setError("Place not found.");
        return;
      }
      const data = await response.json();
      setResult({
        place: data.location.name,
        temp: data.current.temp_c,
        type: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch {
      setError("Something went wrong.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/featured/beautiful-background-td7gsxerv3ecl20h.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="container p-4 rounded-4 shadow w-100 mx-auto"
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          maxWidth: "400px",
        }}
      >
        <h1 className="text-center mt-0 mb-4">
          <strong>Weather App</strong>
        </h1>
        <WeatherForm
          onSearch={handleWeather}
          OnInputChange={handleInputChange}
        />
        <WeatherResult result={result} error={error} />
      </div>
    </div>
  );
};

export default Home;
