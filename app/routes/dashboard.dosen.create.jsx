import React from 'react'
import Modal from '~/components/modal'
import CreateDosenPage from '~/pages/dashboard-dosen/create'
// import { Button, Modal } from 'flowbite-react';
import { useNavigate } from '@remix-run/react';
// import { addMahasiswa } from '../server/mahasiswa.server';
import { redirect } from '@remix-run/node';
import { addDosen } from '../server/dosen.server';

// const CreateDosen = () => {
//     // const navigate = useNavigate()
//     // function close() {
//     //     navigate('..')
//     // }
//     // const [openModal, setOpenModal] = useState(false);
//   return (
//     <>
//     {/* <h1>wqrqwrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</h1> */}
//     <Modal>
//         <CreateDosenPage/>
//     </Modal>
//     {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
//     {/* <ModalComponent show={openModal} title='aqwdqw' footer='qwrwqr'>
//         <CreatePage/>
//     </ModalComponent> */}
//     {/* <Modal show={openModal}>

//     </Modal> */}
//     </>
//     // <div>CreateMahasiswa</div>
//   )
// }

export default function CreateDosen() {
    return (
        <>
            <Modal>
                <CreateDosenPage/>
            </Modal>
        </>
    )
}

export async function action({request}) {
    try {       
        const formData = await request.formData()
        const dosenData = Object.fromEntries(formData)
        // console.log(formData, noteData)
        await addDosen(dosenData)
        return redirect('/home/dosen')
    } catch (e) {
        console.log(e)
        throw e
    }
}