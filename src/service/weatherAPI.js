export const fetchWeatherById = async (cityId) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
  );

  const result = await response.json();

  const shapedData = {
    town: result.name,
    temperature: result.main.temp,
    description: result.weather[0].description,
    icon: result.weather[0].icon,
  };

  console.log('Shaped Data CITY', shapedData);
  return shapedData;
};

export const fetchWeatherByCoords = async (lat, long) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
  );

  const result = await response.json();

  const coordsData = {
    town: result.name,
    temperature: result.main.temp,
    description: result.weather[0].description,
    icon: result.weather[0].icon,
  };

  console.log('Shaped Data COORDS', coordsData);
  return coordsData;
};
