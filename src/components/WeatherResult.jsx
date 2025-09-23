import React from "react";

const WeatherResult = ({ result, error }) => {
  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }
  if (result) {
    return (
       <div className="text-center">
        <b className="h4">{result.place}</b>
        <p className="h1 mb-0">{result.temp}°C</p>
        <p className="h5">{result.type}</p>
        <img src={result.icon} alt={result.type} />
      </div>
    );
  }
  return null;
};

export default WeatherResult;