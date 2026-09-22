import { BiDroplet } from "react-icons/bi";
import { BsThermometer } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { WiSandstorm } from "react-icons/wi";
import StatCard from "./StatCard";

const WeatherCard = ({ place, weather }) => {
  
  const stats = [
    {
      icon: BsThermometer,
      label: "Feels like",
      value: `${weather?.feelsLike}°C`,
    },
    { icon: BiDroplet, label: "Humidity", value: `${weather?.humidity}%` },
    {
      icon: WiSandstorm,
      label: "Wind speed",
      value: `${weather?.windSpeed} km/h`,
    },
  ];

  return (
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
          {stats.map((st, idx) => (
            <StatCard key={idx} st={st}></StatCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
