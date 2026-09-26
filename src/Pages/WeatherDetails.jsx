import { useLocation } from "react-router";
import { getWeather } from "../Services/getWeather";
import { useEffect, useState } from "react";
import WeatherCard from "../Component/WeatherCard";
import RecomandationCard from "../Component/RecomandationCard";
import WeatherType from "../Component/WeatherType";
import { getRecommandations } from "../Utils/getRecommandation";

const WeatherDetails = () => {
  const value = useLocation();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const place = value.state.location;

  useEffect(() => {
    if (!place) {
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const result = await getWeather(place);
        setWeather(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
        setOpen(false);
      }
    };

    fetchWeather();
  }, [place]);

  return (
    <div>
      <div className="grid md:grid-cols-2 mt-20 gap-5">
        <div className="space-y-3">
          <WeatherCard place={place} weather={weather} />

          {/* recomandation card */}
          <RecomandationCard
            place={place}
            weather={weather}
            recommendation={getRecommandations}
          />
        </div>
        {/* weather type */}
        <WeatherType place={place} weather={weather} />
      </div>
    </div>
  );
};

export default WeatherDetails;
