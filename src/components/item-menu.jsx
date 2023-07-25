import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ItemMenu = ({ Items }) => {
  const location = useLocation();
  const [divClassName, setClassName] = useState("");
  const ItemsMenu = useRef(null);
  useEffect(() => {
    console.log(location.pathname === Items.path);
    setClassName(
      location.pathname === Items.path
        ? "w-full flex my-3 p-2 -ml-4 bg-neutral-800 rounded-r cursor-pointer outline outline-1 outline-transparent focus-within:outline-neutral-300 focus-within:outline-neutral-300"
        : "ItemMenu"
    );
    if (location.pathname === Items.path) ItemsMenu.current.focus();
  }, [location.pathname, Items.path, ItemsMenu]);
  return (
    <Link ref={ItemsMenu} className={divClassName} to={Items.path}>
      <div>{Items.name}</div>
    </Link>
  );
};

export default ItemMenu;
