import React, { useState } from 'react';
import { useGeolocation } from '../hooks/geolocation';

const ReloadButton = () => {
  const [count, setCount] = useState(0);
  const { location } = useGeolocation(count);

  const handleClick = () => {
    setCount(count + 1);
    console.log('ONCLICK', location);
    console.log('ONCLICK Count', count);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Reload
      </button>
    </div>
  );
};

export default ReloadButton;
