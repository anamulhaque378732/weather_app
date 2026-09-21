import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const RootLayouts = () => {
  return (
    <div className="h-screen  overflow-hidden flex flex-col">
      <main className=" max-w-7xl mx-auto flex-1 overflow-hidden  ">
      <Navbar />
        <Outlet></Outlet>
      </main>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default RootLayouts;
