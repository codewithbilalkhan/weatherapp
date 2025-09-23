import React, { useState } from "react";

const WeatherForm = ({ onSearch, OnInputChange }) => {
  const [place, setPlace] = useState("");

    const handleChange = (e) => {
    setPlace(e.target.value);
    if (OnInputChange) {
      OnInputChange(e.target.value);

    }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (place.trim()) {
      onSearch(place);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        className="form-control form-control-sm mb-2"
        placeholder="Enter place name"
        value={place}
        onChange={handleChange}
        required
      />
       <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-md" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default WeatherForm;