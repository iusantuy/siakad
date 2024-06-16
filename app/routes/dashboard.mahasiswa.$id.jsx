import React from 'react'
import DetailMahasiswaPage from '~/pages/dashboard-mahasiswa/detail'
import { deleteMahasiswa, getMahasiswa, getMahasiswaId, updateMahasiswa } from '../server/mahasiswa.server'
// import { Modal } from 'flowbite-react'
import Modal from '../components/modal'
import { Outlet, useLoaderData, useNavigate } from '@remix-run/react'
import { json, redirect } from '@remix-run/node'

export default function DetailMahasiswa() {
  const {mahasiswaDetail} = useLoaderData()
  const navigate = useNavigate()
  function close() {
    navigate('..')
}
  return (
    <>
    {/* {mahasiswaDetail.nama}
    {mahasiswaDetail.nama}
    {mahasiswaDetail.nama}
    {mahasiswaDetail.nama}
    {mahasiswaDetail.nama}
    {mahasiswaDetail.nama}
    {mahasiswaDetail.nama}
    {mahasiswaDetail.nama}
    {mahasiswaDetail.nama}
    {mahasiswaDetail.nama}
    {mahasiswaDetail.nama} */}
      <DetailMahasiswaPage/>
      {/* <Outlet/> */}
    </>
    // <Modal onClose={ close }>
    // </Modal>
  )
}

export async function action({params, request}) {
  const mahasiswaId = params.id

  // await deleteMahasiswa(mahasiswaId)
  // return redirect('/dashboard/mahasiswa')
  // return redirect('/dashboard/mahasiswa')
  
  if (request.method === 'PATCH') {
    const formData = await request.formData()
    const mahasiswaData = Object.fromEntries(formData)
    await updateMahasiswa(mahasiswaId, mahasiswaData)
    return redirect('/dashboard/mahasiswa')
  } else if (request.method === 'DELETE') {
    await deleteMahasiswa(mahasiswaId)
    return redirect('/dashboard/mahasiswa')
  }

  // if (request.method === 'DELETE') {
  //     await deleteMahasiswa(mahasiswaId)
  //     return {deleteId: mahasiswaId}
  //     // return redirect('/dashboard/note')
  // }
}

export async function loader({params}) {
  const mahasiswaId = params.id
  const mahasiswaDetail = await getMahasiswaId(mahasiswaId)
  return json({mahasiswaDetail})
}

// export default DetailMahasiswa