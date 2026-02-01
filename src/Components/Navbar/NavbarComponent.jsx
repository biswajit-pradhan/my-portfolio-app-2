import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { NavLink } from "react-router-dom";
import images from "../../assets/Images/images.json";
import { useTheme } from "../../hooks/useTheme";

const NavbarComponent = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Navbar fluid rounded className="dark:bg-gray-900 dark:border-gray-700">
      <NavbarBrand as={NavLink} to="/">
        <img
          src={images.logo}
          loading="lazy"
          className="mr-3 h-8 w-8 rounded-full object-cover"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Biswajit Pradhan
        </span>
      </NavbarBrand>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleDarkMode}
          className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707.707a1 1 0 001.414-1.414l-.707-.707zm2.828 9.193a1 1 0 001.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z"></path>
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          )}
        </button>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink as={NavLink} to="/home">
          Home
        </NavbarLink>

        <NavbarLink as={NavLink} to="/blogs">
          Blogs
        </NavbarLink>

        <NavbarLink as={NavLink} to="/projects">
          My Projects
        </NavbarLink>

        <NavbarLink as={NavLink} to="/contact">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavbarComponent;
