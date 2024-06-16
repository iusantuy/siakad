import React from 'react'
import { Link, Outlet, useLoaderData } from '@remix-run/react'
import { json, redirect } from '@remix-run/node'
import { getMahasiswa } from '~/server/mahasiswa.server'
import { popToast, putToast } from '../server/toast.server'
import DashboardMahasiswaPage from '~/pages/dashboard-mahasiswa/index'
import ToastComponent from '~/components/toast'
import { addMahasiswa } from '../server/mahasiswa.server'

export default function Mahasiswa() {
  const { mahasiswa, toast } = useLoaderData()
  return (
    <>
      <ToastComponent toast={ toast }/>
      <DashboardMahasiswaPage mahasiswa={ mahasiswa }/>
      {/* <Outlet/> */}
    </>
  )
}

export const meta = () => {
  return [
    { title: "Dashboard | Mahasiswa" },
    { name: "description", content: "Data Mahasiswa" },
  ]
}

export async function action({request}) {
  try {       
      const headers = await putToast()
      const formData = await request.formData()
      const mahasiswaData = Object.fromEntries(formData)
      await addMahasiswa(mahasiswaData)
      return redirect('/dashboard/mahasiswa', { headers })
  } catch (e) {
      console.log(e)
      throw e
  }
}

export async function loader({ params, request }) {
  const mahasiswaId = params.id
  const mahasiswa = await getMahasiswa()
  const { toast, headers } = await popToast(request)
  // if (mahasiswa) {
  //   return (
  //     <ToastComponent>
  //       OK
  //     </ToastComponent>
  //   )
  // }
  // return json({ mahasiswa })
  return json({ mahasiswa, toast }, { headers })
}

export const handle = {
  breadcrumb: () => (
    <>
      <h1>Dashboard</h1>
      {/* <Link to='/dashboard'>Dashboard</Link> */}
      {/* <Link to='/home/mahasiswa'>qwe</Link> */}
    </>
  )
}

// import { Route } from 'remix';

// export let loader = () => {
//   // Loader function for Home section
//   return 'Home Section Content';
// };

// export default function Home() {
//   // Component for the Home section
//   return (
//     <div>
//       <h2>Home Section</h2>
//       {/* Home section content */}
//     </div>
//   );
// }