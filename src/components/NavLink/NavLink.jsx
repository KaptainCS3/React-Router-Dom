import { NavLink, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavBarLink = ({ link, name, icon }) => {
  const { pathname } = useLocation();
  
  return (
    <NavLink to={link} className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
      <div className="flex flex-col cursor-pointer justify-center items-center gap-y-2 relative">
        <div
          className={`${
            pathname === link &&
            "rounded-full border-8 border-white h-16 w-16 flex justify-center items-center absolute -top-12 bg-primary z-100"
          } ${
            pathname === "/contact" ? "mr-4" : pathname === "/" ? "ml-4" : "mx-0"
          }`}
        >
          <img
            src={icon}
            width={pathname === link ? 30 : 30}
            height={pathname === link ? 30 : 30}
            alt=""
            className=""
          />
        </div>
        <span
          className={`text-sm font-light ${pathname === link ? "mt-8" : ""} ${
            pathname === "/contact" ? "pr-4" : pathname === "/" ? "pl-4" : "px-0"
          }`}
        >
          {name}
        </span>
      </div>
    </NavLink>
  );
};

export default NavBarLink;
