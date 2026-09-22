import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const RootLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayouts;
