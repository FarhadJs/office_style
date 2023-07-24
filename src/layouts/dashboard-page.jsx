import "./dashboard.css";

// List Menu Components
import ListMenu from "./../components/list-menu";
import { Route, Routes } from "react-router-dom";
import Users from "../views/dashboard-pages/users";
const Dashboard = () => {
  const children_routes = [
    {
      path: "/users",
      element: <Users />,
    },
  ];
  return (
    <div id="Dashboard" className="h-screen text-white">
      <div className="fixed left-0 top-0 bottom-0 p-4 w-2/12 bg-gray-600">
        <ListMenu />
      </div>
      <div
        id="DashBoard_Pages"
        className="bg-neutral-800 h-full float-right w-10/12 p-4"
      >
        <Routes>
          {children_routes.map((el, i) => (
            <Route key={i} path={el.path} element={el.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
