// import { useEffect, useState } from 'react';
// import { fetchWeatherById } from '../service/weatherAPI';

// // const placesData = require('../city.list.min.json');

// export const useLocation = () => {
//   const [weather, setWeather] = useState({});
//   //   const [cities, setCities] = useState([]);
//   const [city, setCity] = useState();

//   useEffect(() => {
//     if (city) {
//       fetchWeatherById(city.id)
//         .then((shapedData) => {
//           setWeather({
//             ...shapedData,
//           });
//         })
//         .catch((e) => console.log('Error: ', e));
//       // .then(() => setLoading(false));
//     }
//   }, [city]);
//   console.log('City Weather now in state', weather);

//   return { weather, city };
// };

// // do i need to setCity to pass city state to Location.jsx component
