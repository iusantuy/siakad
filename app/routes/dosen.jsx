import React from 'react'
import DosenPage from '../pages/dosen/index.jsx'
import { Outlet } from '@remix-run/react'
import HeaderLayout from '../layouts/header.jsx'
import Wrapper from '../layouts/wrapper.jsx'
import HeaderDosenLayout from '../layouts/header-dosen.jsx'

export default function Dosen() {
  return (
    <>
    <HeaderDosenLayout/>
    <Outlet/>
    {/* <Wrapper>
    </Wrapper> */}
      {/* <DosenPage/>
      <Outlet/> */}
    </>
  )
}

export const meta = () => {
  return [
    { title: "Home | Dosen" },
    { name: "Halaman Utama Dosen", content: "Halaman Utama Dosen" },
  ]
}