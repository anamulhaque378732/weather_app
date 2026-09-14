import { useState } from "react";
import Modal from "../Component/Modal";

const Home = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="text-center my-5   min-h-screen ">
      <h1 className="text-6xl text-blue-300 font-extrabold">
        Next Level <span>Weather</span>
      </h1>
      <p className="my-5 text-xl font-medium">
        Check your weather today in next lavel
      </p>

      <div>
        <button
          onClick={() => setClick(true)}
          type="button"
          className="text-lg font-medium my-4 btn btn-primary hover:btn-secondary hover:scale-105"
        >
          Check Weather
        </button>
      </div>

      {click && <Modal setClick={setClick} />}
    </div>
  );
};

export default Home;
