import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav({ onSearchButtonClick }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="flex bg-black">
        <div className="flex basis-3/4 justify-evenly items-center mr-4">
          <div
            onClick={() => {
              toggleMenu();
              onSearchButtonClick();
            }}
            className="text-white focus:outline-none cursor-pointer ">
            {isMenuOpen ? (
              // Close icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white text-[0.937rem] font-bold">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
          <div className="flex justify-center">
            <img src="/images/Header/logo.png" alt="" className="h-10" />
          </div>

          <NavLink to="/US" className="text-white text-[0.937rem] font-bold">
            US
          </NavLink>
          <NavLink to="/World" className="text-white text-[0.937rem] font-bold">
            World
          </NavLink>
          <NavLink
            to="/Politics"
            className="text-white text-[0.937rem] font-bold">
            Politics
          </NavLink>
          <NavLink
            to="/Business"
            className="text-white text-[0.937rem] font-bold">
            Business
          </NavLink>
          <NavLink
            to="/Opinion"
            className="text-white text-[0.937rem] font-bold">
            Opinion
          </NavLink>
          <NavLink
            to="/Health"
            className="text-white text-[0.937rem] font-bold">
            Health
          </NavLink>
          <NavLink
            to="/Entertainment"
            className="text-white text-[0.937rem] font-bold">
            Entertainment
          </NavLink>
          <NavLink to="/Style" className="text-white text-[0.937rem] font-bold">
            Style
          </NavLink>
          <NavLink
            to="/Travel"
            className="text-white text-[0.937rem] font-bold">
            Travel
          </NavLink>
          <NavLink
            to="/Sports"
            className="text-white text-[0.937rem] font-bold">
            Sports
          </NavLink>
        </div>
        <div className="flex basis-1/4 justify-evenly items-center ">
          <NavLink to="/Watch" className="text-white text-[0.937rem] font-bold">
            Watch
          </NavLink>
          <NavLink
            to="/Listen"
            className="text-white text-[0.937rem] font-bold">
            Listen
          </NavLink>
          <NavLink
            to="/live-tv"
            className="text-white text-[0.937rem] font-bold">
            Live TV
          </NavLink>
          <div className=" cursor-pointer" onClick={onSearchButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <NavLink
            to="/login"
            className="text-white p-1 rounded text-[0.937rem] border border-white font-bold">
            Log In
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;
