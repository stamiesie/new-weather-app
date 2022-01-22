import React, { useEffect, useState } from 'react';

export const Geolocation = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchLocationByCoords = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((result) => result.json())
        .then((result) => {
          setLocation({
            name: result.name,
            temperature: result.main.temp,
            description: result.weather[0].description,
            icon: result.weather[0].icon,
          });
          console.log('Location is:', location);
        });
    };
    fetchLocationByCoords();
    console.log('Latitude is:', lat);
    console.log('Longitude is:', long);
  }, [lat, long]);
};
