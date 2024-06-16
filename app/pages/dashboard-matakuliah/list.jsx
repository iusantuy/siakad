import { Link } from '@remix-run/react'
import { Table } from 'flowbite-react'
import React from 'react'
import { HiOutlineExclamationCircle, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import Modal from '../../components/modal'
import TextInputComponent from '../../components/text-input'
import ButtonComponent from '../../components/button'

const ListMataKuliah = ({ id, kode, nama }) => {
  const [openModal, setOpenModal] = React.useState(false)
  const [openModalDetail, setOpenModalDetail] = React.useState(false)
  const [kodeDelete, setKodeDelete] = React.useState(true)
  const inputKode = () => {
    setKodeDelete(!kode)
}
  return (
    <>
    <tr className='hover:bg-gray-100'>
      <td class="border px-4 py-2 text-gray-900 font-medium">{kode}</td>
      <td class="border px-4 py-2 text-gray-900 font-medium">{nama}</td>
      <td class="flex justify-center space-x-4 px-4 py-2">
        {/* <div className='flex'> */}
          <Link to={id} onClick={openModalDetail}>
            <HiOutlinePencil/>
          </Link>
          {/* <Form method='DELETE' action={`/dashboard/mahasiswa/${id}`}>
          </Form> */}
            <button onClick={() => setOpenModal(true)} className='text-red-400'>
              <HiOutlineTrash/>
            </button>
        {/* </div> */}
      </td>
    </tr>
        <Modal dismissible show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Apakah anda yakin ingin menghapus data?
              </h3>
              <TextInputComponent type="text" name="kode" disabled={kode}/>
                {kodeDelete ? <button onClick={inputKode}>masukan kode</button> :       
                  <div className="flex justify-center gap-4 my-2">
                    <Form method='DELETE' action={`/dashboard/matakuliah/${id}`} reloadDocument>
                      <ButtonComponent type="submit" color="failure">
                        {"Ya, hapus"}
                      </ButtonComponent>
                    </Form>
                    <ButtonComponent color="gray" onClick={() => setOpenModal(false)}>
                      Tidak
                    </ButtonComponent>
                  </div>
                }
            </div>
          </Modal.Body>
        </Modal>

        <Modal dismissible show={openModalDetail} size="md" onClose={() => setOpenModalDetail(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <h1>awdbi</h1>
          </Modal.Body>
        </Modal>
</>
  )
}

export default ListMataKuliah

  // <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
  //       <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
  //         {nama}
  //       </Table.Cell>
  //       <Table.Cell>{kode}</Table.Cell>
  //       <Table.Cell>
  //         <Link to={id} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
  //           Detail
  //         </Link>
  //       </Table.Cell>
  //   </Table.Row>