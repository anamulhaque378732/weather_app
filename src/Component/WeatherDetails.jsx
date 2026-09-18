import { useLocation } from "react-router";
import { getWeather } from "../Services/getWeather";
import { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";

const WeatherDetails = () => {
  
  const value = useLocation();
  const [weather, setWeather] = useState(null);
  const place = value.state.location;
  console.log(weather);

  useEffect(() => {
    if (!place) {
      return;
    }

    const fetchWeather = async () => {
      try {
        const result = await getWeather(place);
        setWeather(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchWeather();
  }, [place]);




  return (
    <div className="md:mt-15 mt-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <div className="shadow-2xl rounded-2xl p-5">
            <div className="space-y-3">
              <h1 className="text-2xl text-blue-500 font-semibold">
                Today's Weather Details
              </h1>
              <div className="flex items-center gap-3">
                <FiMapPin size={30} />
                <h2 className="text-4xl text-purple-500 font-semibold">
                  {place.name}
                </h2>
              </div>
              <div className="flex items-center gap-16">
                <h3 className="text-6xl text-purple-900 font-extrabold">
                  {weather?.temperature} C
                </h3>
                <p className="text-4xl text-purple-800 font-extrabold">
                  {weather?.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="rounded-2xl shadow-2xl p-4 text-center">
                  <h3 className="text-lg text-purple-900 font-bold">
                    Feels Like
                  </h3>
                  <p className="text-4xl text-purple-800 font-extrabold">
                    {weather?.feelsLike}
                  </p>
                </div>
                <div className="rounded-2xl shadow-2xl p-4 text-center">
                  <h3 className="text-lg text-purple-900 font-bold">
                    Humidity
                  </h3>
                  <p className="text-4xl text-purple-800 font-extrabold">
                    {weather?.humidity}
                  </p>
                </div>
                <div className="rounded-2xl shadow-2xl p-4 text-center">
                  <h3 className="text-lg text-purple-900 font-bold">
                    Wind Speed
                  </h3>
                  <p className="text-4xl text-purple-800 font-extrabold">
                    {weather?.windSpeed}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-2xl rounded-2xl p-5">
            <h2 className="text-blue-950  font-bold text-xl">
              Smart Recommandations
            </h2>
          </div>
        </div>

        <div className="shadow-2xl flex  flex-col items-center justify-between space- rounded-2xl p-5">
          <div className="">
            <h2 className="text-blue-500  font-bold text-xl">
              Live in {place.name}
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-4xl text-blue-900 font-extrabold">
              {weather?.description}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <span className="rounded-full border-2 font-medium text-lg border-purple-400 p-2">
              Feel's Like : {weather?.feelsLike}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
