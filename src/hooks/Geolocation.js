import { useEffect, useState } from 'react';

export const useGeolocation = (loc = '') => {
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
          setLocation(result);
        });
    };
    setTimeout(() => fetchLocationByCoords(), 2000);

    console.log('GEO Location is:', location);
    console.log('GEO Latitude is:', lat);
    console.log('GEO Longitude is:', long);
  }, [lat, long]);

  return { location };
};
