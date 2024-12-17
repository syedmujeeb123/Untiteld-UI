import { useState } from "react";
import Logo from "./Logo";
import notification from "../Components/images/notification.svg";
import smr from "../Components/images/smr.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flex items-center justify-between bg-white z-50 relative">
      {/* Left Section - Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Menu - Hidden on Small Screens */}
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex gap-6 py-6 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-5 cursor-pointer">
          <li>Home</li>
          <li>Bookings</li>
          <li>Projects</li>
          <li>Tasks</li>
          <li>Reporting</li>
          <li>Users</li>
        </ul>
      </div>

      {/* Right Section - Notifications and Avatar (Hidden in Mobile View) */}
      <div className="flex items-center gap-2">
        <img
          src={notification}
          alt="notification"
          className="w-10 h-10 md:block hidden"
        />
        <img
          src={notification}
          alt="notification"
          className="w-10 h-10 md:block hidden"
        />
        <img src={notification} alt="notification" className="w-10 h-10" />
        <img
          src={smr}
          alt="avatar"
          className="rounded-full w-8 h-8 ml-2 border border-gray-300"
        />
        {/* Hamburger Menu - Visible on Small Screens */}
        <button
          className="md:hidden text-gray-700 focus:outline-none ml-6"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          {menuOpen ? (
            <span className="text-2xl">&times;</span> // Close Icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger Icon
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
