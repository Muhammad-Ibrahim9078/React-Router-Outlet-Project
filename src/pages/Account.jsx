import React from 'react'

function Account() {
  return (
    <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-white mb-6">Account Information</h1>

        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="mx-auto rounded-full border-4 border-gray-700 shadow-lg mb-4"
        />

        {/* Account Details */}
        <div className="text-gray-300 space-y-3">
          <p><span className="font-semibold text-white">Name:</span> Ibrahim Developer</p>
          <p><span className="font-semibold text-white">Youtube:</span> @ProgrammingwithIbrahim</p>
          <p><span className="font-semibold text-white">Member Since:</span> Septempber 2025</p>
        </div>

        {/* Button */}
        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition">
          Edit Account
        </button>
      </div>
    </div>
  )
}

export default Account
