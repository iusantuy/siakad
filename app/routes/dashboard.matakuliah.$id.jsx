import React from 'react'
import DetailMahasiswaPage from '~/pages/dashboard-mahasiswa/detail'
import { deleteMahasiswa, getMahasiswa, getMahasiswaId, updateMahasiswa } from '../server/mahasiswa.server'
// import { Modal } from 'flowbite-react'
import Modal from '../components/modal'
import { Outlet, useNavigate } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import { deleteMK, getMKId } from '../server/matakuliah.server'

export default function DetailMataKuliah() {
  return (
    <>
      {/* <DetailMahasiswaPage/> */}
      <Outlet/>
    </>
  )
}

export async function action({params, request}) {
  const mkId = params.id

  const formData = await request.formData()
  const mkData = Object.fromEntries(formData)
  return await deleteMK(mkId)
  // return redirect('/dashboard/mahasiswa')
  // return redirect('/dashboard/mahasiswa')

  // if (request.method === 'PATCH') {
  //   await updateMahasiswa(mahasiswaId, mahasiswaData)
  // } else if (request.method === 'DELETE') {
  //   await deleteMahasiswa(mahasiswaId)
  //   return redirect('/dashboard/mahasiswa')
  // }

  // if (request.method === 'DELETE') {
  //     await deleteMahasiswa(mahasiswaId)
  //     return {deleteId: mahasiswaId}
  //     // return redirect('/dashboard/note')
  // }
}

export async function loader({params}) {
  const mkId = params.id
  const mkDetail = await getMKId(mkId)
  return mkDetail
}

// export default DetailMahasiswa