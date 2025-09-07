import React from 'react'

function Service() {
  return (
    <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h1 className="text-3xl font-bold text-white mb-8">My Services</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-white">Web Development</h2>
            <p className="text-gray-400 mt-2">
              Build modern and responsive websites using React & Tailwind CSS.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-white">UI/UX Design</h2>
            <p className="text-gray-400 mt-2">
              Create clean and user-friendly designs for better user experience.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-white">Firebase Integration</h2>
            <p className="text-gray-400 mt-2">
              Add authentication, database, and hosting with Firebase backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
