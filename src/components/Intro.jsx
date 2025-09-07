import React from 'react'

function Intro() {
  return (
    <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
      <div className="text-center ">
          <h1 className="text-white text-2xl font-bold mt-4">Plz Visit Profile Page</h1>
          <br />
        <img
            src="https://ib-updatedportfolio.netlify.app/images/My%20Pic.png"
            alt="Profile" width='200px'
            className="mx-auto rounded-full border-4 border-gray-700 shadow-lg"
        />
        <h1 className="text-white text-2xl font-bold mt-4">Welcome to My Web</h1>
        <p className="text-gray-400 mt-2">Developed By <b>Muhammad Ibrahim</b></p>
        <p className="text-gray-400 mt-2">This is a simple dark theme design</p>
      </div>
    </div>
  )
}

export default Intro
