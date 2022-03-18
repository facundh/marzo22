import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'

const Layout = ({rutas}) => {

  return (
    <div>
        <Navbar  />
        {rutas && <Outlet />}
        
    </div>
  )
}

export default Layout