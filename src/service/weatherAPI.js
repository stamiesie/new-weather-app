export const fetchWeather = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=8be479bed40626741fc647e3eef648b8`
  );

  const result = await response.json();
  //   console.log(results);

  return result;

  // results.name,
  // results.main.temp,
  // results.weather.description,
  // results.weather.icon
};
