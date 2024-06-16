import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-neutral-800 p-3">
      <div className="container mx-auto flex items-center">
        <div className="text-customRed text-2xl font-bold">
          <a href="/">MyApp</a>
        </div>
        <div className="flex-grow flex justify-center mx-4">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              className="block w-full px-4 py-2 pl-10 text-black bg-stone-300	 border border-transparent rounded-full placeholder-white-400 focus:border-white focus:ring-0"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-white border-b-2 border-customRed' : 'text-white hover:text-customRed'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-white border-b-2 border-customRed' : 'text-white hover:text-customRed'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-white border-b-2 border-customRed' : 'text-white hover:text-customRed'
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-white border-b-2 border-customRed' : 'text-white hover:text-customRed'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
