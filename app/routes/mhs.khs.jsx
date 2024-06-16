import React from 'react'
import KhsMahasiswaPage from '~/pages/mahasiswa/khs'

export default function Khs() {
  return (
    <KhsMahasiswaPage/>
  )
}

export const meta = () => {
  return [
    { title: "KHS" },
    { name: "description", content: "Kartu Hasil Studi Mahasiswa!" },
  ]
}

// export default home