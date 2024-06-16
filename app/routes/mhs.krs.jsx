import KrsMahasiswaPage from '~/pages/mahasiswa/krs'


export default function Krs() {
    return (
        <KrsMahasiswaPage/>
    )
}

export const meta = () => {
    return [
      { title: "Perwalian" },
      { name: "description", content: "KRS Mahasiswa!" },
    ]
  }