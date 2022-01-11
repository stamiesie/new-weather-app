// export const fetchWeather = async () => {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
//   );

//   const result = await response.json();

//   return result;
// };

// api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

export const fetchWeatherById = async (cityId) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
  );

  const result = await response.json();

  return result;
};
