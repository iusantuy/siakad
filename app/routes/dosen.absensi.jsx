import React from 'react'
import AbsensiPage from '../pages/dosen/absensi'
import { getMahasiswa } from '../server/mahasiswa.server'
import { json } from '@remix-run/node'


export default function Absensi() {
    return (
        <AbsensiPage/>
    )
}

export const meta = () => {
    return [
      { title: "Absensi" },
      { name: "description", content: "Absensi Mahasiswa!" },
    ];
  };

export async function loader({params}) {
    // const mahasiswaId = params.id
    const mahasiswa = await getMahasiswa()
    // if (mahasiswa) {
    //   return (
    //     <ToastComponent>
    //       OK
    //     </ToastComponent>
    //   )
    // }
    return json(mahasiswa)
  }

