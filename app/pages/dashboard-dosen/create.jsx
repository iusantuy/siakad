import { Form, Link, useNavigate, useNavigation } from '@remix-run/react';
import { Button, Modal } from 'flowbite-react';
import React from 'react'
import ButtonComponent from '../../components/button';
// import Wrapper from '../../layouts/wrapper';

const CreateDosenPage = ({nameInputRef}) => {
  const navigate = useNavigate()
  function close() {
      navigate('..')
  }
  // const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
  return (
    <>
      {/* <div className='relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'>
            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Buat data dosen baru
                </h3>
             
                  <button onClick={close} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Close modal</span>
                  </button>
                
            </div>
      </div> */}
            <Form method='POST' reloadDocument>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                            Nama Dosen
                        </label>
                        <input
                            ref={nameInputRef}
                            type="text"
                            name="nama"
                            id="nama"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            // defaultValue={defaultValue.name}
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="kode" className="block text-sm font-medium text-gray-700">
                            NIK
                        </label>
                        <input
                            type="text"
                            name="kode"
                            id="kode"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            // defaultValue={defaultValue.price}
                        />
                        </div>


                        <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-mail
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            // defaultValue={defaultValue.price}
                        />
                        </div>


                        {/* <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Bahan 1
                        </label>
                        <div className="mt-1">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Deskripsi Bahan 1
                        </label>
                        <div className="mt-1">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>
                        </div> */}

                        <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="pendidikan" className="block text-sm font-medium text-gray-700">
                            Pendidikan
                        </label>
                        <select
                            required
                            id="pendidikan"
                            name="pendidikan"
                            autoComplete="pendidikan"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                            <option>D3</option>
                            <option>S1</option>
                            <option>S2</option>
                            <option>S3</option>
                        </select>
                        {/* <input
                            type="text"
                            name="pendidikan"
                            id="pendidikan"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            // defaultValue={defaultValue.price}
                        /> */}
                        </div>

                        <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            // defaultValue={defaultValue.price}
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            // defaultValue={defaultValue.price}
                        />
                        </div>

                        {/* <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                            Semester
                        </label>
                        <div className="mt-1">
                        <input
                            type="text"
                            name="semester"
                            id="semester"
                            autoComplete="given-name"
                            className="mt-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            // defaultValue={defaultValue.stock}
                        />
                        </div>
                        </div> */}

                        {/* <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Tipe
                        </label>
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                            <option>Pastry</option>
                            <option>Non-Pastry</option>
                            <option>Goreng</option>
                            <option>Rebus</option>
                        </select>
                        </div> */}

                        {/* <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                        <div className="mt-1 flex items-center">
                            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            </span>
                            <button
                            type="button"
                            className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                            Change
                            </button>
                        </div>
                        </div> */}

                        {/* <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        </div> */}
                    </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <ButtonComponent
                        disabled={isSubmitting}
                        type="submit"
                        gradientDuoTone='cyanToBlue'
                        // className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {isSubmitting ? 'Tunggu...' : 'Buat'}
                    </ButtonComponent>
                    </div>
                </div>
            </Form>







      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Buat data mahasiswa baru</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  )
}

export default CreateDosenPage