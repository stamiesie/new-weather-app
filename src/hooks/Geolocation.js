import { useEffect, useState } from 'react';

export const useGeolocation = (loc = '') => {
  // const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [location, setLocation] = useState({});
  // const [counter, setCounter] = useState(0);
  // const [click, setClick] = useState(true);

  // const handleClick = () => {
  //   console.log('CLICKED');
  // };

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
    setTimeout(() => fetchLocationByCoords(), 1000);
    // .then(() => setLoading(false));
    console.log('GEO Location is:', location);
    console.log('GEO Latitude is:', lat);
    console.log('GEO Longitude is:', long);
  }, [lat, long, loc]);

  return { location };
};
