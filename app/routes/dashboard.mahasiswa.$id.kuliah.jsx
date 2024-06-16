import React from 'react'
import DetailMahasiswaPage from '~/pages/dashboard-mahasiswa/detail'
import { deleteMahasiswa, getMahasiswa, updateMahasiswa } from '../server/mahasiswa.server'
// import { Modal } from 'flowbite-react'
import Modal from '../components/modal'
import { useNavigate } from '@remix-run/react'
import { redirect } from '@remix-run/node'

export default function DetailMahasiswa() {
  const navigate = useNavigate()
  function close() {
    navigate('..')
}
  return (
    <h1>eqjbeqkqeb</h1>
  )
}

export async function action({params, request}) {
  const mahasiswaId = params.id
  const formData = await request.formData()
  const mahasiswaData = Object.fromEntries(formData)
  await updateMahasiswa(mahasiswaId, mahasiswaData)
  return redirect('/dashboard/mahasiswa')
  // if (request.method === 'DELETE') {
  //     await deleteMahasiswa(mahasiswaId)
  //     return {deleteId: mahasiswaId}
  //     // return redirect('/dashboard/note')
  // }
}

// export async function loader({params}) {
//   const mahasiswaId = params.id
//   const mahasiswaDetail = await getMahasiswa(mahasiswaId)
//   return mahasiswaDetail
// }

// export default DetailMahasiswa