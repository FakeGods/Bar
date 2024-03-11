import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-transparent z-50">
      <nav className="flex items-center justify-between relative h-[var(--header-height)] mx-4">
        <NavLink
          to="/"
          className="text-first-color transition-colors duration-400 font-second text-h2-font-size"
        >
          Navigation Bar
        </NavLink>

        <div
          className={`flex items-center flex-shrink-0 ${
            menuOpen ? "right-0" : "right-full"
          } transition-all duration-300 fixed top-0 h-full bg-white w-64 px-4 pt-20`}
          id="nav-menu"
        >
          <ul className="flex flex-col gap-10">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/news" className="nav__link">
                News
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about-us" className="nav__link">
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/favorite" className="nav__link">
                Favorite
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/location" className="nav__link">
                Location
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/get-started" className="nav__link nav__cta">
                Get Started
              </NavLink>
            </li>
          </ul>
          <div
            className="nav__close absolute top-4 right-6 cursor-pointer"
            id="nav-close"
            onClick={toggleMenu}
          >
            <IoClose />
          </div>
        </div>

        <div className="cursor-pointer" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
