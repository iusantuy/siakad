import React from 'react'
import { Form, useMatches, useParams } from "@remix-run/react";
import { Button, Card, Dropdown, DropdownItem, Select, TextInput } from 'flowbite-react';
import ButtonComponent from '../../components/button';
import TextInputComponent from '../../components/text-input';
// import { Button } from '~/flowbite-react.module.js'

const DetailMahasiswaPage = (id) => {
    const [isUpdate, setIsUpdate] = React.useState(true)
    const updateForm = () => {
        setIsUpdate(!isUpdate)
    }
    const params = useParams();
    const matches = useMatches();
    // console.log(matches)
    // console.log(params)
    const mahasiswaData = matches.find(
      (match) => match.id === 'routes/dashboard.mahasiswa'
    ).data.mahasiswa; 
    const detail = mahasiswaData.find(mhs => mhs.id === params.id)

    // console.log(matches)
    // console.log(detail)
    // console.log(mahasiswaData)
    const defaultValue = 
    detail ? 
    {
        nim: detail.nim,
        nama: detail.nama,
        alamat: detail.alamat,
        email: detail.email,
        jurusan: detail.jurusan,
        // prodi: detail.prodi,
        kurikulum: detail.kurikulum,
        sistem_kuliah: detail.sistem_kuliah,
        status_pendaftaran: detail.status_pendaftaran,
        tgl_msk: detail.tgl_msk,
        angkatan: detail.angkatan,
        kelas: detail.kelas,
        semester: detail.semester,
        kelas: detail.kelas,
        semester: detail.semester,
        // role: detail.role,
        username: detail.username,
        // password: detail.password
    } :
    {
        nama: '',
        nim: '',
        alamat: '',
        email: '',
        jurusanurusan: '',
        // prodi: '',
        kurikulum: '',
        sistem_kuliah: '',
        status_pendaftaran: '',
        tgl_msk: '',
        angkatan: '',
        kelas: '',
        semester: '',
        kelas: '',
        semester: '',
        // role: '',
        username: '',
        // password: ''
    }
    // console.log(detailData)
    // console.log(detail)
    // console.log(mahasiswaData)
    // console.log(detail.nama);
    return (
<>
            {/* <button
                className='block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                onClick={updateForm}
                  // disabled={isSubmitting}
                //   type="submit"
                //   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {isUpdate ? 'Update' : 'Batal'}
            </button> */}
    <div className='relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'>    
            <button
                className='block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                onClick={updateForm}
                  // disabled={isSubmitting}
                //   type="submit"
                //   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {isUpdate ? 'Update' : 'Batal'}
            </button>
    
    {/* <ButtonComponent
                    className='my-2'
                    onClick={updateForm}
                // size='xs'
                    type="submit"
                    gradientDuoTone='purpleToBlue'
                    //   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    {isUpdate ? 'Update' : 'Batal'}
                </ButtonComponent> */}
      {/* <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Buat data mahasiswa baru
          </h3>
       
            <button onClick={close} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
          
      </div> */}
      <Form method={detail ? 'PATCH' : 'POST'}>
          <div className="overflow-y-scroll shadow sm:rounded-md">
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
                  <label htmlFor="nim" className="block text-sm font-medium text-gray-700">
                      NIM
                  </label>
                  <TextInputComponent
                      required
                      type="text"
                      name="nim"
                      id="nim"
                      autoComplete="given-name"
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      disabled={isUpdate}
                      defaultValue={defaultValue.nim}
                  />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                      Nama Mahasiswa
                  </label>
                  <TextInputComponent
                      type="text"
                      name="nama"
                      id="nama"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.nama}
                  />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                      Alamat
                  </label>
                  <TextInputComponent
                      type="text"
                      name="alamat"
                      id="alamat"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.alamat}
                  />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      E-mail
                  </label>
                  <TextInputComponent
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.email}
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Jurusan
                  </label>
                  <TextInputComponent
                      type="text"
                      name="jurusan"
                      id="jurusan"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.jurusan}
                  />
                  </div>

                  {/* <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Program Studi
                  </label>
                  <TextInputComponent
                      type="text"
                      name="prodi"
                      id="prodi"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.prodi}
                  />
                  </div> */}

                  <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Kurikulum
                  </label>
                  <TextInputComponent
                      type="text"
                      name="kurikulum"
                      id="kurikulum"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.kurikulum}
                  />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="kelas" className="block text-sm font-medium text-gray-700">
                      Tanggal Masuk
                  </label>
                  <TextInputComponent
                      type="text"
                      name="tgl_msk"
                      id="tgl_msk"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.tgl_msk}
                  />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                      Angkatan
                  </label>
                  <div className="mt-1">
                  <TextInputComponent
                      type="text"
                      name="angkatan"
                      id="angkatan"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.angkatan}
                  />
                  </div>
                  </div>
{/* 
                  <div className="col-span-6 sm:col-span-6">
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                      Kurikulum
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

                  {/* <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                      Sistem Kuliah
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
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                      Jenis Pendaftaran
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

                  <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="nim" className="block text-sm font-medium text-gray-700">
                      Sistem Kuliah
                  </label>
                  <TextInputComponent
                      type="text"
                      name="sistem_kuliah"
                      id="sistem_kuliah"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.sistem_kuliah}
                  />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="status_pendaftaran" className="block text-sm font-medium text-gray-700">
                      Jenis Pendaftaran
                  </label>
                  <TextInputComponent
                      type="text"
                      name="status_pendaftaran"
                      id="status_pendaftaran"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.status_pendaftaran}
                  />
                  </div>

                  {/* <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                      Tanggal Masuk
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
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                      Angkatan
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

                  <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Kelas
                  </label>
                  <select
                      id="kelas"
                      name="kelas"
                      autoComplete="country-name"
                      disabled={isUpdate}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.kelas}
                  >
                      <option>TI 1</option>
                      <option>TI 2</option>
                      <option>TI 3</option>
                      <option>TI 4</option>
                  </select>
                  </div>

                  
                  <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Semester
                  </label>
                  <Select
                      id="semester"
                      name="semester"
                      autoComplete="country-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.semester}
                  >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                  </Select>

                  {/* <Dropdown label='Pilih' disabled={isUpdate}>
                    <DropdownItem>qwdwq</DropdownItem>
                    <DropdownItem>qwdwq</DropdownItem>
                    <DropdownItem>qwdwq</DropdownItem>
                  </Dropdown> */}

                    {/* <Select>
                        <option>wqdwqwqddw</option>
                    </Select> */}
                  </div>

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

              <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="nim" className="block text-sm font-medium text-gray-700">
                      Username
                  </label>
                  <TextInputComponent
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="given-name"
                      disabled={isUpdate}
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.username}
                  />
              </div>

              {/* <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                      Password
                  </label>
                  <TextInputComponent
                      type="text"
                      name="password"
                      id="password"
                      autoComplete="given-name"
                      disabled
                    //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={'encrypted'}
                  />
              </div> */}

              {/* <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                      Role
                  </label>
                  <select
                      id="role"
                      name="role"
                      autoComplete="country-name"
                      disabled={isUpdate}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={defaultValue.role}
                  >
                      <option>MAHASISWA</option>
                      <option>DOSEN</option>
                  </select>
              </div> */}
{/* 
              <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="nim" className="block text-sm font-medium text-gray-700">
                      Username
                  </label>
                  <input
                      type="text"
                      name="nim"
                      id="nim"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      // defaultValue={defaultValue.price}
                  />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                      Password
                  </label>
                  <input
                      type="text"
                      name="nama"
                      id="nama"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      // defaultValue={defaultValue.name}
                  />
              </div> */}

              

              </div>
                <ButtonComponent
                    className='my-2'
                // size='xs'
                    disabled={isUpdate}
                    type="submit"
                    gradientDuoTone='purpleToBlue'
                    //   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Buat {/* {isSubmitting ? 'Loading...' : 'Submit'} */}
                </ButtonComponent>
              </div>
              {/* <div className="flex bg-gray-50 text-right sm:px-6">

              </div> */}
          </div>
      </Form>
               
    </div>
              {/* <Button
                    onClick={updateForm}
                  // disabled={isSubmitting}
                //   type="submit"
                //   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {isUpdate ? 'Update' : 'Batal'}
              </Button> */}
</>






//       <Card>
//         <Form>
//         <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-sm border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

//         <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />

// <input
//           type="text"
//           name="nim"
//           id="nim"
//           autoComplete="given-name"
//           className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//           // defaultValue={defaultValue.price}
//         />
//         </Form>
//       <div className='ml-72'>

//         <h1>{detail.nama}</h1>
//         <h1>{detail.nim}</h1>
//         <h1>{detail.kelas}</h1>
//         <h1>{detail.semester}</h1>
//         <h1>{detail.email}</h1>
//       </div>
//       </Card>
  )
}

export default DetailMahasiswaPage