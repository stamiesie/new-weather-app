/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Location from '../components/Location';
import { fetchWeather } from '../service/weatherAPI';
import '../App.css';

const placesData = require('../city.list.min.json');

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [cities, setCities] = useState([]);

  //   loop (map) over placeData, create a description field using NAME, STATE, COUNTRY for Autocomplete component.  If there's no state, insert an empty string. Then return each place.
  useEffect(() => {
    placesData.map((place) => {
      place.description = `${place.name.toUpperCase()}${
        place.state ? `, ${place.state}` : ''
      }, ${place.country}`;
      return place;
    });
  }, []);

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
        freeSolo
        className="search"
        options={cities}
        onSelect={(e) => {
          const value = e.target.value.toUpperCase();

          //   Start Autocomplete after 3 characters.  If the query is included in a place description (made above in useEffect), it is an Autocomplete option.  Then limit to 10 options with slice.  Then set state (setCities) with the cities.
          if (value.length >= 3) {
            const placeOptions = placesData
              .filter((place) => place.description.includes(value))
              .slice(0, 15);
            setCities(placeOptions.map((place) => place.description));
          }
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search for a city" variant="outlined" />
        )}
      />
      <Location {...weather} />
    </>
  );
};

export default Weather;
