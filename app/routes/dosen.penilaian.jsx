import React from 'react'
import PenilaianPage from '../pages/dosen/penilaian'
import { json } from '@remix-run/node'
import { getMahasiswa } from '../server/mahasiswa.server'


export default function Penilaian() {
    return (
        <PenilaianPage/>
    )
}

export const meta = () => {
    return [
      { title: "Penilaian" },
      { name: "description", content: "Penilaian Mahasiswa!" },
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