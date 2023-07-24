// import ItemMenu from "./item-menu";

import { Link } from "react-router-dom";

const ListMenu = () => {
  let Menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Users",
      path: "/dashboard/users",
    },
    {
      name: "Entry and Exit",
      path: "/dashboard/entryexit",
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
    },
  ];
  return (
    <div className="pt-3">
      {Menu.map((usr, i) => (
        <Link key={i} to={usr.path}>
          <div id="ItemMenu">{usr.name}</div>
        </Link>
      ))}
      {/* <ItemMenu ItemMenu={users} /> */}
    </div>
  );
};

export default ListMenu;
