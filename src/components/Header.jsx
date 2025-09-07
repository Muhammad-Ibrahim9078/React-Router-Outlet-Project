import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <nav>
        <ul className="flex justify-center gap-12 p-6 flex-wrap">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-bold px-4 py-2 rounded-lg"
                  : "text-gray-300 hover:text-red-500 transition"}> Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-bold px-4 py-2 rounded-lg"
                  : "text-gray-300 hover:text-red-500 transition"}>About</NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-bold px-4 py-2 rounded-lg"
                  : "text-gray-300 hover:text-red-500 transition"}> Service</NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-bold px-4 py-2 rounded-lg"
                  : "text-gray-300 hover:text-red-500 transition"}> Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
