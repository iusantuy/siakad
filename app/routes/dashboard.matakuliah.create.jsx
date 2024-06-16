import React from 'react'
import { redirect } from '@remix-run/node';
import z from 'zod'
import Modal from '~/components/modal'
// import CreateMahasiswaPage from '~/pages/dashboard-mahasiswa/create'
// import { Button, Modal } from 'flowbite-react';
// import { useNavigate } from '@remix-run/react';
// import { addMahasiswa } from '../server/mahasiswa.server';
import { addMK } from '../server/matakuliah.server';
import CreateMataKuliahPage from '~/pages/dashboard-matakuliah/create';

export default function CreateMataKuliah() {
    // const navigate = useNavigate()
    // function close() {
    //     navigate('..')
    // }
    // const [openModal, setOpenModal] = useState(false);
  return (
    <Modal>
        <CreateMataKuliahPage/>
    </Modal>

  )
}

export async function action({request}) {
    try {       
        const formData = await request.formData()
        const mkData = Object.fromEntries(formData)
        // console.log(formData, noteData)
        // const formSchema = z.object({
        //     nim: z.string().min(10),
        //     nama: mahasiswa.nama,
        //         email: mahasiswa.email,
        //         kelas: mahasiswa.kelas,
        //         semester: mahasiswa.semester,
        //         username: mahasiswa.username,
        //         password: passwordHash
        // })
        await addMK(mkData)
        return redirect('/dashboard/matakuliah')
    } catch (e) {
        console.log(e)
        throw e
    }
}

// export default CreateMahasiswa