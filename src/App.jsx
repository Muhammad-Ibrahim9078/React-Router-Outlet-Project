import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout1 from './pages/Layout1'
import About from './pages/About'
import Service from './pages/Service'
import Profile from './Profile'
import Setting from './pages/Setting'
import Intro from './components/Intro'
import Account from './pages/Account'
import Security from './pages/Security'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout1 />,
    children:[
      {
        index: true,
        element: <Intro />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: '/service',
        element: <Service /> 
      },
      {
        path: '/profile',
        element: <Profile />,
        children: [
          {
            path: '/profile/setting',
            element: <Setting />
          },
          {
            path: '/profile/account',
            element: <Account />
          },
          {
            path: '/profile/security',
            element: <Security />
          }
        ]
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
