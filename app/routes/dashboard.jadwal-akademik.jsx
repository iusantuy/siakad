import React from 'react'
import JadwalAkademikPage from "~/pages/dashboard-jadwal-akademik";
import { getJadwalAkademik } from "../server/jadwal-akademik";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";


export default function JadwalAkademik() {
  const jadwal_akademik = useLoaderData()
    return (
      <>
        <JadwalAkademikPage jadwal_akademik={jadwal_akademik}/>
        <Outlet/>
      </>
    )
}

export const meta = () => {
  return [
    { title: "Dashboard | Jadwal Akademik" },
    { name: "description", content: "Data Mahasiswa" },
  ]
}

export async function loader({params}) {
    const jadwalAkademikId = params.id
    const jadwalAkademik = await getJadwalAkademik(jadwalAkademikId)
    return json(jadwalAkademik)
}

export const handle = {
    breadcrumb: () => (
      <>
        <Link to='/dashboard'>Dashboard</Link>
      </>
    )
  }