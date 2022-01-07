/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';
import Location from '../components/Location';
import { fetchWeather } from '../service/weatherAPI';

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetchWeather()
      .then((result) =>
        setWeather({
          name: result.name,
          temperature: result.main.temp,
          description: result.weather[0].description,
          icon: result.weather[0].icon,
        })
      )
      .finally(() => setLoading(false));
  }, []);
  console.log(weather);

  if (loading) return <h1>Loading...</h1>;

  return <Location weather={weather} />;
};

export default Weather;
