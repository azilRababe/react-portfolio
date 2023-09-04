import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout-container flex h-screen">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content flex-1 p-5 overflow-auto relative ">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
