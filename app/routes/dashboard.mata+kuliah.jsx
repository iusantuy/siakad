import React from 'react'
import MatakuliahComponent from '../pages/dashboard-matakuliah'
import DashboardMataKuliahPage from '../pages/dashboard-matakuliah/index'
import { Link, Outlet, useLoaderData } from '@remix-run/react'
import { getMK, getTotalMK } from '../server/matakuliah.server'
import { json } from '@remix-run/node'

export default function Matakuliah() {
  const { matakuliah } = useLoaderData()
  return (
    <>
      <DashboardMataKuliahPage mk={ matakuliah }/>
      {/* <Outlet/> */}
      <h1>awddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</h1>
    </>
  )
}

export const meta = () => {
  return [
    { title: "Dashboard | Mata Kuliah" },
    { name: "description", content: "Data Mata Kuliah" },
  ]
}

// let PER_PAGE = 5

export async function loader({ params, request }) {
  // const url = new URL(request.url)
  // const query = url.searchParams
  // const currentPage = Math.max(Number(query.get('page') || 1), 1)
  // let options = {
  //   take: PER_PAGE,
  //   skip: (currentPage - 1) * PER_PAGE,
  //   orderBy: {
  //       id: 'desc'
  //   }
  // }
  // const q = url.searchParams.get('q')
  
  // const mkId = params.id
  // const matakuliah = await getMK(q)
  // const total = await getTotalMK()
  const mkId = params.id
  const matakuliah = await getMK()
  return json({ matakuliah })
}

export const handle = {
  breadcrumb: () => (
    <>
      <h1>
        Dashboard
      </h1>
      {/* <Link to='/dashboard'>Dashboard</Link> */}
      {/* <Link to='/home/mahasiswa'>qwe</Link> */}
    </>
  )
}

// export default Matakuliah