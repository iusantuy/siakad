import React from 'react'
import DosenPage from '../pages/dosen/index.jsx'
import { Outlet } from '@remix-run/react'
import HeaderLayout from '../layouts/header.jsx'
import HomeDosenPage from '../pages/dosen/index.jsx'

export default function HomeDosen() {
  return (
    <>
        <HomeDosenPage/>
    </>
  )
}

export const meta = () => {
  return [
    { title: "Home | Dosen" },
    { name: "Halaman Utama Dosen", content: "Halaman Utama Dosen" },
  ]
}