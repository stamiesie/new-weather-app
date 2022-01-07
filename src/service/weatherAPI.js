export const fetchWeather = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
  );

  const result = await response.json();

  return result;
};
