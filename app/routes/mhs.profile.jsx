import React from 'react'
import ProfileMahasiswaPage from '~/pages/mahasiswa/profile'
import { getMahasiswa } from '../server/mahasiswa.server'
// import ProfileMahasiswaPage from ''

export default function Profile() {
  return (
    <ProfileMahasiswaPage/>
  )
}

export const meta = () => {
  return [
    { title: "Profil" },
    { name: "description", content: "Profil Mahasiswa!" },
  ]
}

export async function loader({params}) {
    const mahasiswaId = params.id
    const mahasiswa = await getMahasiswa(mahasiswaId)
    return mahasiswa
  }



// export default home