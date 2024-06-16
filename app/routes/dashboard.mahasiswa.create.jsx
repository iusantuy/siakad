import React from 'react'
import { redirect } from '@remix-run/node';
// import z from 'zod'
import Modal from '~/components/modal'
import CreateMahasiswaPage from '~/pages/dashboard-mahasiswa/create'
// import { Button, Modal } from 'flowbite-react';
// import { useNavigate } from '@remix-run/react';
import { addMahasiswa } from '~/server/mahasiswa.server';
import { putToast } from '../server/toast.server';

export default function CreateMahasiswa() {
    // const navigate = useNavigate()
    // function close() {
    //     navigate('..')
    // }
    // const [openModal, setOpenModal] = useState(false);
  return (
    <>
    {/* <h1>wqrqwrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</h1> */}
    <Modal>
        <CreateMahasiswaPage/>
    </Modal>
    {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
    {/* <ModalComponent show={openModal} title='aqwdqw' footer='qwrwqr'>
        <CreatePage/>
    </ModalComponent> */}
    {/* <Modal show={openModal}>

    </Modal> */}
    </>
    // <div>CreateMahasiswa</div>
  )
}

export async function action({request}) {
    try {       
        const headers = await putToast()
        const formData = await request.formData()
        const mahasiswaData = Object.fromEntries(formData)
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
        await addMahasiswa(mahasiswaData)
        return redirect('/dashboard/mahasiswa', { headers })
    } catch (e) {
        console.log(e)
        throw e
    }
}

// export default CreateMahasiswa