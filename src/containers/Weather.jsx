/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
// import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import Header from '../components/Header';
import CurrentLocation from '../components/CurrentLocation';
import Location from '../components/Location';
import { fetchWeatherById } from '../service/weatherAPI';
import { useGeolocation } from '../hooks/geolocation';
import '../App.css';
import ReloadButton from '../components/ReloadButton';

const placesData = require('../city.list.min.json');

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(null);

  const { location } = useGeolocation(counter);

  const handleClick = (e) => {
    e.preventDefault();
    setCity('');
    setWeather({});
    setCounter(counter + 1);
    setInput(null);
    console.log('COUNTER', counter);
    console.log('ONCLICK', location);
    console.log('CITY STATE', city);
    console.log('WEATHER STATE', weather);
  };

  //   1.   loop (map) over placeData, create a description field using NAME, STATE, COUNTRY for Autocomplete component.  If there's no state, insert an empty string. Then return each place.
  useEffect(() => {
    placesData.map((place) => {
      place.description = `${place.name.toUpperCase()}${
        place.state ? `, ${place.state}` : ''
      }, ${place.country}`;
      return place;
    });
  }, []);

  //   4. use the city stored in state and fetch with city.id as param to get weather data every time the city input changes.  Then 'munged' data from fetch is placed in weather state.
  useEffect(() => {
    if (city) {
      fetchWeatherById(city.id)
        .then((shapedData) => {
          setWeather({
            ...shapedData,
          });
        })
        .catch((e) => console.log('Error: ', e));
    }
  }, [city, counter]);
  console.log('City Weather now in state', weather);

  return (
    <>
      <Header />
      <Autocomplete
        freeSolo
        className="search"
        options={cities}
        value={input}
        onChange={(event, newInput) => {
          setInput(newInput);
        }}
        onSelect={(e) => {
          const value = e.target.value.toUpperCase();

          //   2.   Start Autocomplete after 3 characters.  If the query is included in a place description (made above in useEffect), it is an Autocomplete option.  Then limit to 10 options with slice.  Then set state (setCities) with the cities.
          if (value.length >= 3) {
            const placeOptions = placesData
              .filter((place) => place.description.includes(value))
              .slice(0, 15);
            setCities(placeOptions.map((place) => place.description));

            // 3.   match user input to place description to return the location weather in the API call, then put that location object into state
            const selected = placesData.find(
              (place) => place.description === value
            );
            setCity(selected);
          }
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search for a city" variant="outlined" />
        )}
      />
      {!city ? <CurrentLocation /> : <Location {...weather} />}

      <ReloadButton onClick={handleClick} />
    </>
  );
};

export default Weather;
