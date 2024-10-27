import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ROUTES } from "@/constants/routes";

type LinkProps = {
  isActive: boolean;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine the className for NavLink
  const getLinkClassName = ({ isActive }: LinkProps) =>
    isActive
      ? "underline"
      : "text-black hover:underline md:text-sm lg:text-base font-normal";

  return (
    <nav className="w-full md:w-3/5 xl:w-[675px] ">
      <div className="flex  items-center justify-between">
        <div className="text-black md:text-lg lg:text-2xl font-bold">
          <NavLink to={ROUTES.Main}>Exclusive</NavLink>
        </div>

        {/* Desktop Links Section */}
        <div className="hidden md:flex items-center md:gap-3 xl:space-x-12">
          <NavLink to={ROUTES.Main} className={getLinkClassName}>
            Home
          </NavLink>
          <NavLink to={ROUTES.CONTACT} className={getLinkClassName}>
            Contact
          </NavLink>
          <NavLink to={ROUTES.ABOUT} className={getLinkClassName}>
            About
          </NavLink>
          <NavLink to={ROUTES.REGISTER} className={getLinkClassName}>
            Signup
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none transition-transform duration-300 ease-in-out"
        >
          <div
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-90 opacity-100" : "rotate-0 opacity-100"
            }`}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Links Section with transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 mt-2 w-32 border rounded-md border-gray-300 p-3 ml-auto">
          <NavLink to={ROUTES.Main} className={getLinkClassName}>
            Home
          </NavLink>
          <NavLink to={ROUTES.CONTACT} className={getLinkClassName}>
            Contact
          </NavLink>
          <NavLink to={ROUTES.ABOUT} className={getLinkClassName}>
            About
          </NavLink>
          <NavLink to={ROUTES.REGISTER} className={getLinkClassName}>
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
