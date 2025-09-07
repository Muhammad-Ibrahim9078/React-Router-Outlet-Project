import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div className="flex h-screen w-full bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="sm:w-[15%] lg:w-[18%] bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-6">Profile Menu</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/profile/setting" className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition">Setting</Link>
          </li>
          <li>
            <Link to="/profile/account" className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition">Account</Link>
          </li>
          <li>
            <Link to="/profile/security" className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition"> Security </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">


        <Outlet />
        
      </div>
    </div>
  )
}

export default Profile
