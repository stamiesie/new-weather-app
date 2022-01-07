/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Location from '../components/Location';
import { fetchWeather } from '../service/weatherAPI';

const cities = require('../city.list.min.json');

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
      .catch((e) => console.log('Error: ', e))
      .finally(() => setLoading(false));
  }, []);
  console.log('State Weather', weather);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Autocomplete
        disablePortal
        className="search"
        //   options={}
        onSelect={(e) => {}}
        renderInput={(params) => (
          <TextField {...params} label="Search for a city" variant="outlined" />
        )}
      />
      <Location {...weather} />
    </>
  );
};

export default Weather;
