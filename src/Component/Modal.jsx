const Modal = ({ setClick }) => {
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
          <label className="input input-bordered flex items-center gap-2">
            🔍
            <input
              type="text"
              placeholder="Enter city name..."
              className="grow"
            />
          </label>
        </div>

        {/* Search Button */}
        <button className="btn btn-primary mt-4 w-full">Search Weather</button>

        {/* Current Location */}
        <button className="btn btn-outline mt-3 w-full">
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
