import "./dashboard.css";

// List Menu Components
import ListMenu from "./../components/list-menu";
const Dashboard = () => {
  return (
    <div id="Dashboard" className="h-screen text-white">
      <div className="fixed left-0 top-0 bottom-0 p-4 w-2/12 bg-gray-600">
        <ListMenu />
      </div>
      <div
        id="DashBoard_Pages"
        className="bg-neutral-800 h-full float-right w-10/12 p-4"
      >
        <h1>Main Page</h1>
      </div>
    </div>
  );
};

export default Dashboard;
