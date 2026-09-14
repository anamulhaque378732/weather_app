import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const RootLayouts = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Navbar></Navbar>
      <main className=" flex-1 overflow-hidden  ">
        <Outlet></Outlet>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayouts;
