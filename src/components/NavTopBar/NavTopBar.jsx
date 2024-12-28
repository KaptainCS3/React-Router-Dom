import { topNavLink } from "../../../data";
import NavBarLink from "../NavLink/NavLink";

const NavTopBar = () => {
  return (
    <nav className="fixed w-full bottom-0 z-10">
      <section className="bg-primary box-shadow flex justify-between items-center py-5 px-4 gap-5 w-full">
        {topNavLink.map((item, index) => (
          <NavBarLink
            key={index}
            link={item.link}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </section>
    </nav>
  );
};

export default NavTopBar;
