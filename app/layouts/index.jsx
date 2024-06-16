import { Outlet } from '@remix-run/react'
import React from 'react'
import SidebarLayout from './Sidebar'
import HeaderLayout from './header'
import FooterLayout from './footer'
import Wrapper from './wrapper'

const Layout = () => {
  return (
    <div>
        <Wrapper/>
        {/* <HeaderLayout/> */}
        {/* <SidebarLayout/> */}
        {/* <Outlet/> */}
        {/* <FooterLayout/> */}
        {/* <main>
        </main> */}
    </div>
  )
}

export default Layout