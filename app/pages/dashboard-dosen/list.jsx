import { Form, Link } from '@remix-run/react'
import { Button, Modal, Table } from 'flowbite-react'
import React from 'react'
import { HiOutlineExclamationCircle, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import TextInputComponent from '../../components/text-input'

const ListDosen = ({ id, kode, nama, pendidikan }) => {
  const [openModal, setOpenModal] = React.useState(false)
  const [openModalDetail, setOpenModalDetail] = React.useState(false)
  const [kodeDelete, setKodeDelete] = React.useState(true)
  const inputKode = () => {
    setKodeDelete(!kodeDelete)
}
  return (
    <>
        <tr className='hover:bg-gray-100'>
          <td class="border px-4 py-2 text-gray-900 font-medium">{kode}</td>
          <td class="border px-4 py-2 text-gray-900 font-medium">{nama}</td>
          <td class="border px-4 py-2 text-gray-900 font-medium">{pendidikan}</td>
          {/* <td class="border px-4 py-2 text-gray-900 font-medium">{semester}</td> */}
          <td class="flex justify-center space-x-4 px-4 py-2">
              <Link to={id} onClick={openModalDetail}>
                <HiOutlinePencil/>
              </Link>
              <button onClick={() => setOpenModal(true)} className='text-red-400'>
                <HiOutlineTrash/>
              </button>
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
                <TextInputComponent type="text" name="kodeDelete" disabled={kodeDelete}/>
                  {kodeDelete ? <button onClick={inputKode}>masukan kode</button> :       
                    <div className="flex justify-center gap-4 my-2">
                      <Form method='DELETE' action={`/dashboard/dosen/${id}`} reloadDocument>
                        <Button type="submit" color="failure">
                          {"Ya, hapus"}
                        </Button>
                      </Form>
                      <Button color="gray" onClick={() => setOpenModal(false)}>
                        Tidak
                      </Button>
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

export default ListDosen

{/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
  {nama}
</Table.Cell>
<Table.Cell>{kode_dosen}</Table.Cell>
<Table.Cell>{mata_kuliah}</Table.Cell>
<Table.Cell>{semester}</Table.Cell>
<Table.Cell>
  <Link to={id} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
    Edit
  </Link>
</Table.Cell>
</Table.Row> */}