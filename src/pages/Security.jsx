import React from 'react'

function Security() {
  return (
    <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Security Settings</h1>

        <form className="space-y-4">
          {/* Old Password */}
          <div>
            <label className="block text-gray-300 mb-1">Old Password</label>
            <input
              type="password"
              placeholder="Enter old password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-gray-300 mb-1">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* 2FA Option */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="2fa" className="w-4 h-4" />
            <label htmlFor="2fa" className="text-gray-300">Enable Two-Factor Authentication</label>
          </div>

    
        </form>
      </div>
    </div>
  )
}

export default Security
