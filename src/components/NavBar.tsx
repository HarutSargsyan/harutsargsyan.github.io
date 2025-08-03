import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const StyledNavLink = ({
  to,
  children,
  toggleNav,
}: {
  to: string;
  children: React.ReactNode;
  toggleNav?: () => void;
}) => {
  return (
    <NavLink
      onClick={toggleNav}
      to={to}
      className={({ isActive }) =>
        isActive ? "text-xl mr-6 border-b-3 border-primary" : "text-xl mr-6"
      }
    >
      {children}
    </NavLink>
  );
};

export default function NavBar() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <div className="sticky top-0 z-50 mb-8 flex justify-between w-full px-8 py-4 bg-stone-50">
      <div className="font-logo text-xl hover:text-primary">HSargsyan</div>
      {!isOpenNav ? (
        <RxHamburgerMenu onClick={toggleNav} size={25} className="sm:hidden" />
      ) : (
        <IoClose onClick={toggleNav} size={25} className="sm:hidden" />
      )}

      <div
        className={`${
          !isOpenNav ? "hidden" : ""
        } z-50 pb-4 bg-stone-50 fixed left-0 top-15 w-full border-b border-b-neutral-900 px-6 text-inherit sm:relative sm:top-0 sm:mx-6 sm:block sm:w-auto sm:border-b-0 sm:px-0 md:mx-8 lg:mx-10`}
      >
        <ul className="flex flex-col gap-6 text-center text-lg sm:h-full sm:flex-row sm:justify-center sm:gap-6 md:gap-8 lg:gap-10">
          <li>
            <StyledNavLink toggleNav={toggleNav} to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink toggleNav={toggleNav} to="/experience">Experience</StyledNavLink>
          </li>
          <li>
            <StyledNavLink toggleNav={toggleNav} to="/projects">Projects</StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink toggleNav={toggleNav} to="/coursework">Coursework</StyledNavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
