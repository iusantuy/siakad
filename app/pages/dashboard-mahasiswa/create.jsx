import { Form, Link, useNavigate, useNavigation } from '@remix-run/react';
import { Button, FileInput, Modal, TextInput } from 'flowbite-react';
import React from 'react'
import ButtonComponent from '../../components/button';
// import Wrapper from '../../layouts/wrapper';

const CreateMahasiswaPage = ({nameInputRef}) => {
    // const nameInputRef = React.useRef()
  const navigate = useNavigate()
  function close() {
      navigate('..')
  }
  // const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form method='POST' reloadDocument>
        <div className="sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
                
            {/* <div className="col-span-6 sm:col-span-2">
                <label htmlFor="nim" className="block text-sm font-medium text-gray-700">
                    NIM
                </label>
                <TextInput
                    type="text"
                    name="nim"
                    id="nim"
                    autoComplete="given-name"
                    sizing='sm'
                    // className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.price}
                />
            </div> */}

                <div className="col-span-6 sm:col-span-2">
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                    Nama Mahasiswa
                </label>
                <input
                    ref={nameInputRef}
                    required
                    type="text"
                    name="nama"
                    id="nama"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.name}
                />
                </div>

                <div className="col-span-6 sm:col-span-2">
                <label htmlFor="nim" className="block text-sm font-medium text-gray-700">
                    NIM
                </label>
                <input
                    maxLength={10}
                    required
                    type="text"
                    name="nim"
                    id="nim"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.price}
                />
                </div>


                <div className="col-span-6 sm:col-span-2">
                <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">
                    Alamat
                </label>
                <input
                    required
                    type="text"
                    name="alamat"
                    id="alamat"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.name}
                />
                </div>

                <div className="col-span-6 sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mail
                </label>
                <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.price}
                />
                </div>

                <div className="col-span-6 sm:col-span-2">
                <label htmlFor="jurusan" className="block text-sm font-medium text-gray-700">
                    Jurusan
                </label>
                <input
                    required
                    type="text"
                    name="jurusan"
                    id="jurusan"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.price}
                />
                </div>

                {/* <div className="col-span-6 sm:col-span-2">
                <label htmlFor="prodi" className="block text-sm font-medium text-gray-700">
                    Program Studi
                </label>
                <input
                    required
                    type="text"
                    name="prodi"
                    id="prodi"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.price}
                />
                </div> */}

                <div className="col-span-6 sm:col-span-2">
                <label htmlFor="kurikulum" className="block text-sm font-medium text-gray-700">
                    Kurikulum
                </label>
                <input
                    required
                    type="text"
                    name="kurikulum"
                    id="kurikulum"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.price}
                />
                </div>

                <div className="col-span-6 sm:col-span-2">
                <label htmlFor="tgl_msk" className="block text-sm font-medium text-gray-700">
                    Tanggal Masuk
                </label>
                <input
                    required
                    type="date"
                    name="tgl_msk"
                    id="tgl_msk"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.price}
                />
                </div>

                <div className="col-span-6 sm:col-span-2">
                <label htmlFor="angkatan" className="block text-sm font-medium text-gray-700">
                    Angkatan
                </label>
                <div className="mt-1">
                <input
                    required
                    type="text"
                    name="angkatan"
                    id="angkatan"
                    autoComplete="given-name"
                    className="mt-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.stock}
                />
                </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="sistem_kuliah" className="block text-sm font-medium text-gray-700">
                    Sistem Kuliah
                </label>
                <select
                    id="sistem_kuliah"
                    name="sistem_kuliah"
                    autoComplete="sistem_kuliah"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    <option>REGULER</option>
                    <option>KARYAWAN</option>
                    <option>EKSEKUTIF</option>
                </select>
                {/* <input
                    type="text"
                    name="sistem_kuliah"
                    id="sistem_kuliah"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.price}
                /> */}
                </div>

                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="status_pendaftaran" className="block text-sm font-medium text-gray-700">
                    Status Pendaftaran
                </label>
                <input
                    type="text"
                    id="status_pendaftaran"
                    name="status_pendaftaran"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.name}
                />
                </div>

                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="kelas" className="block text-sm font-medium text-gray-700">
                    Kelas
                </label>
                <select
                    required
                    id="kelas"
                    name="kelas"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    <option>TI 1</option>
                    <option>TI 2</option>
                    <option>TI 3</option>
                    <option>TI 4</option>
                </select>
                </div>

                
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                    Semester
                </label>
                <select
                    required
                    id="semester"
                    name="semester"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
                </div>

            <div className="col-span-6 sm:col-span-2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                </label>
                <input
                    required
                    minLength={9}
                    maxLength={10}
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
                    required
                    minLength={7}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    // defaultValue={defaultValue.name}
                />
            </div>

            <div className="col-span-6 sm:col-span-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Foto
                </label>
                <FileInput/>
            </div>
            </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <ButtonComponent
                    isProcessing={isSubmitting}
                    disabled={isSubmitting}
                    type="submit"
                    // onClick={}
                    // className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Buat
                </ButtonComponent>
            </div>
        </div>
    </Form>
  )
}

export default CreateMahasiswaPage