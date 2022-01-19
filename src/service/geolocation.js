export const fetchGeolocation = async () => {
  await navigator.geolocation.getCurrentPosition((position) => {
    const results = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    };
    console.log('RESULTS', results);
    return results;
  });
};
