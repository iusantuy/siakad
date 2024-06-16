import React from 'react'
import AdminDosenPage from '../pages/dashboard-dosen'
import { Link, Outlet, useLoaderData } from '@remix-run/react'
import dosen from './dosen'
import { addDosen, getDosen } from '../server/dosen.server'
import { redirect } from '@remix-run/node'

export default function Dosen() {
  const dosen = useLoaderData()
  return (
    <> 
      <AdminDosenPage dosen={dosen}/>
      <Outlet/>
    </>
  )
}

export const meta = () => {
  return [
    { title: "Dashboard | Dosen" },
    { name: "description", content: "Data Dosen" },
  ]
}

export async function action({request}) {
  try {       
      const formData = await request.formData()
      const dosenData = Object.fromEntries(formData)
      // console.log(formData, noteData)
      await addDosen(dosenData)
      return redirect('/dashboard/dosen')
  } catch (e) {
      console.log(e)
      throw e
  }
}

export async function loader({params}) {
  const dosenId = params.id
  const dosen = await getDosen(dosenId)
  return dosen
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