import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'

const Layout = ({rutas, children}) => {

    const user = {
        name:'test',
        email:'test@gmail.com',
        password:'12345'
    }
  return (
    <div>
        <Navbar user={user} />
        {rutas && <Outlet />}
        {!rutas && children}
    </div>
  )
}

export default Layout