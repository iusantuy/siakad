import React from 'react'
import DetailMahasiswaPage from '~/pages/dashboard-mahasiswa/detail'
import { deleteMahasiswa, getMahasiswa, getMahasiswaId, updateMahasiswa } from '../server/mahasiswa.server'
// import { Modal } from 'flowbite-react'
import Modal from '../components/modal'
import { Outlet, useNavigate } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import { deleteDosen, getDosenId, updateDosen } from '../server/dosen.server'
import DetailDosenPage from '~/pages/dashboard-dosen/detail'

export default function DetailDosen() {
//   const navigate = useNavigate()
//   function close() {
//     navigate('..')
// }
  return (
    // <Modal onClose={ close }>
    <>
    <h1>awddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</h1>
      <DetailDosenPage/>
      {/* <Outlet/> */}
      {/* </Modal> */}
    </>
  )
}

export async function action({params, request}) {
  const dosenId = params.id
  const formData = await request.formData()
  const dosenData = Object.fromEntries(formData)
  await deleteDosen(dosenId)
  return redirect('/dashboard/dosen') 
  // const dltDsn = await deleteDosen(dosenId)
  // return dltDsn
  // return await deleteDosen(dosenId)
  // return redirect('/dashboard/mahasiswa')
  // return redirect('/dashboard/mahasiswa')

  // if (request.method === 'PATCH') {
  //   await updateDosen(dosenId, dosenData)
  // } else if (request.method === 'DELETE') {
  //   await deleteDosen(dosenId)
  //   return redirect('/dashboard/dosen')
  // }

  // if (request.method === 'DELETE') {
  //     await deleteMahasiswa(mahasiswaId)
  //     return {deleteId: mahasiswaId}
  //     // return redirect('/dashboard/note')
  // }
}

export async function loader({params}) {
  const dosenId = params.id
  const dosenDetail = await getDosenId(dosenId)
  return dosenDetail
}

// export default DetailMahasiswa