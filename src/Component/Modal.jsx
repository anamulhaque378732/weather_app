import { useState } from "react";

const Modal = ({ setClick }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = city.trim();
    console.log(value);
  };

  const handleGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (positions) => {
        const { latitude, longitude } = positions.coords;

        console.log({ latitude, longitude });
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 10000,
      },
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-base-100 p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setClick(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-4xl">
          🌤️
        </div>

        {/* Title */}
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-base-content">
            Where are you today?
          </h2>

          <p className="mt-2 text-sm text-base-content/60">
            Search for a city to see the current weather and forecast.
          </p>
        </div>

        {/* Search */}
        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              🔍
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="Enter city name..."
                className="grow"
              />
            </label>
            {/* Search Button */}
            <button
              type="submit"
              className="btn btn-primary mt-4 w-full   hover:btn-secondary hover:scale-105"
            >
              Search Weather
            </button>
          </form>
        </div>

        {/* Current Location */}
        <button
          type="button"
          className="btn btn-outline mt-3 w-full hover:btn-secondary hover:scale-105"
          onClick={handleGeoLocation}
        >
          📍 Use Current Location
        </button>

        {/* Popular Cities */}
        <div className="mt-5">
          <p className="mb-2 text-sm font-semibold">Popular Cities</p>

          <div className="flex flex-wrap gap-2">
            <button className="btn btn-sm btn-ghost">Dhaka</button>
            <button className="btn btn-sm btn-ghost">Bogura</button>
            <button className="btn btn-sm btn-ghost">Chittagong</button>
            <button className="btn btn-sm btn-ghost">Rajshahi</button>
          </div>
        </div>

        {/* Cancel */}
        <button
          onClick={() => setClick(false)}
          className="btn btn-ghost mt-4 w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
