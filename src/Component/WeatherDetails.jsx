import { useLocation } from "react-router";
import { getWeather } from "../Services/getWeather";

const WeatherDetails = () => {
  const value = useLocation();

  const place = value.state.location;

  const fetchWeather = async () => {
    try {
      const result = await getWeather(place);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  fetchWeather();
  return <div>this is weather details page</div>;
};

export default WeatherDetails;
