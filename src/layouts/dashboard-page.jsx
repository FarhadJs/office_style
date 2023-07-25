import "./dashboard.css";

// List Menu Components
import ListMenu from "./../components/list-menu";
import { Outlet } from "react-router-dom";

// Icons
import { MenuAlt1Icon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [TimeSystem, setTimeSystem] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSystem(new Date());
    }, 500);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div id="Dashboard" className="h-screen text-white bg-neutral-800">
      <nav className="fixed top-3 left-3 right-3 lg:left-auto lg:w-[81.5%] flex items-center justify-between p-2 bg-neutral-500 rounded">
        <div className="w-full">
          <MenuAlt1Icon className="w-8 h-8 p-1 bg-gray-200 bg-opacity-50 rounded cursor-pointer active:scale-90 hover:scale-105" />
        </div>
        <h4 className="w-full text-center">Name & LastName</h4>
        <span className="w-full text-sm text-right">
          {TimeSystem.toLocaleTimeString()}
        </span>
      </nav>
      <div className="fixed left-0 top-0 bottom-0 p-4 -translate-x-80 lg:translate-x-0 sm:w-1/4 lg:w-2/12 bg-neutral-600">
        <ListMenu />
      </div>
      <div
        id="DashBoard_Pages"
        className="bg-neutral-800 float-right w-full lg:w-10/12 p-4 pt-20 overflow-y-auto"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
