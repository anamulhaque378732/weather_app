export const getGeoLocation = async (city) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
  const result = await fetch(url);
  //   console.log(result);
  if (!result) {
    throw new Error("Geocoding request faild ");
  }
  const data = await result.json();
  const place = data.results[0];

  return {
    name: place.name,
    lat: place.latitude,
    log: place.longitude,
  };
};
