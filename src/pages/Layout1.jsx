import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function Layout1() {
  return (
    <div>

        <Header />
        

        <Outlet />

        
    </div>
  )
}

export default Layout1
