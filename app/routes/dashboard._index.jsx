import React from 'react'
import HomeComponent from '../pages/dashboard-home'
import { getTotalMhs, totalMahasiswa } from '../server/mahasiswa.server'
import { getTotalMK } from '../server/matakuliah.server'
import { json } from '@remix-run/node'

export default function Home() {
  return (
    <>
      <HomeComponent/>
    </>
  )
}

export async function loader() {
  // // const mahasiswaId = params.id
  // const mahasiswa = await totalMahasiswa()
  // return mahasiswa
  const totalMhs = await getTotalMhs()
  // const totalMK = await getTotalMK()
  return json({totalMhs})

}