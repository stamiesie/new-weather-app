export const fetchWeatherById = async (cityId) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
  );

  const result = await response.json();

  const shapedData = {
    name: result.name,
    temperature: result.main.temp,
    description: result.weather[0].description,
    icon: result.weather[0].icon,
  };

  console.log('Munged', shapedData);
  return shapedData;
};
