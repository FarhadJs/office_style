import ItemMenu from "./item-menu";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ListMenu = () => {
  const location = useLocation();
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
    // {
    //   name: "Settings",
    //   path: "/dashboard/settings",
    // },
  ];
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <div className="pt-3">
      {Menu.map((usr, i) => (
        <ItemMenu key={i} Items={usr} />
      ))}
      {/* <ItemMenu ItemMenu={users} /> */}
    </div>
  );
};

export default ListMenu;
