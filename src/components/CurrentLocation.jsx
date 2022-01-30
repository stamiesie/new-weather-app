import React from 'react';
import { useGeolocation } from '../hooks/geolocation';
import Location from './Location';

const CurrentLocation = () => {
  const { location } = useGeolocation();
  console.log('CURRENT LOCATION', location);
  console.log('CITY', location.name);

  return (
    <div>
      {typeof location.main !== 'undefined' ? (
        <Location
          town={location.name}
          temperature={location.main.temp}
          description={location.weather[0].description}
          icon={location.weather[0].icon}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CurrentLocation;
