import React from 'react'
import { Breadcrumb, Button, Modal, Table, Tabs, TextInput } from 'flowbite-react'
import { HiOutlineDownload, HiOutlineHome, HiOutlineLockClosed, HiOutlineSearch, HiOutlineUpload, HiOutlineUser, HiOutlineUserGroup } from 'react-icons/hi';
// import Wrapper from '../../layouts/wrapper'
import { Form, Link, useLocation, useMatches, useNavigation, useRevalidator } from '@remix-run/react';
// import ListComponent from './List';
import ListMahasiswa from './List';
import WrapperDashboard from '../../layouts/wrapper-dashboard';
import ButtonComponent from '../../components/button';
import { redirect } from '@remix-run/node';
import CreateMahasiswaPage from './Create';
import SearchInput from '../../components/searchInput';

const DashboardMahasiswaPage = ({ mahasiswa }) => {
  const nameInputRef = React.useRef()
  const matches = useMatches();
  const location = useLocation();
  const pathName = location.pathname.slice(11);
  const navigation = useNavigation()
  const [openModal, setOpenModal] = React.useState(false)
  const isSubmitting = navigation.state === 'submitting'
  const data = [
    {
        id: 1,
        title: 'NIM'
    },
    {
        id: 2,
        title: 'Mahasiswa'
    },
    {
        id: 3,
        title: 'Kelas'
    },
    {
        id: 4,
        title: 'Semester'
    },
    {
        id: 5,
        title: 'Action'
    }
  ]

  const nilai = [
    {
      id: 1,
      title: 'Nim'
    },
    {
      id: 2,
      title: 'Mahasiswa'
    },
    {
      id: 3,
      title: 'Mata Kuliah'
    },
    {
      id: 4,
      title: 'Nilai'
    },
    {
      id: 5,
      title: 'Grade'
    }
  ]

  const krs = [
    {
      id: 1,
      title: 'Nim'
    },
    {
      id: 2,
      title: 'Mahasiswa'
    },
    {
      id: 3,
      title: 'Kelas'
    },
    {
      id: 4,
      title: 'Semester'
    },
    {
      id: 5,
      title: 'Status'
    }
  ]
  
  return (
  
<WrapperDashboard>
  <div className="overflow-x-auto">  
      {matches.filter(
        (match) => 
        match.handle && match.handle.breadcrumb
      ).map((match, index) => (
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item key={index} href="/dashboard" icon={HiOutlineHome}>
              {match.handle.breadcrumb(match)}
            </Breadcrumb.Item>
            <Breadcrumb.Item className='capitalize'>{pathName}</Breadcrumb.Item>
          </Breadcrumb>
      ))
      }
        
      <div className='mx-1 my-2'>
        <Tabs style='fullWidth'>
          <Tabs.Item title='Data' icon={HiOutlineUserGroup}>
            <div className="flex items-center my-2">
              <div className='basis-1/2'>
                <SearchInput/>
              </div>
              <div className='basis-1/2 flex justify-end'>
                <button
                  className='block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                >
                <div className='flex items-center'>
                  <HiOutlineUpload/>
                    Upload
                </div>
                </button>
                <button
                  className='mx-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                >
                <div className='flex items-center'>
                  <HiOutlineDownload/>
                  Download
                </div>
                </button>
                <ButtonComponent onClick={() => setOpenModal(true)} gradientDuoTone='purpleToBlue'>+Buat data</ButtonComponent>
              </div>
              {/* <div className='flex'>
                <TextInput className='mx-2' id="mahasiswa" type="text" icon={HiOutlineSearch} placeholder="Cari mahasiswa" required sizing='sm'/>
              </div> */}
              {/* <div className='flex gap-3'>
              </div> */}
              {/* <div className='flex basis-3/4 mx-1'>
                <button
                    className='mx-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    >
                  <div className='flex items-center'>
                    <HiOutlineUpload/>
                    Upload
                  </div>
                </button>
                <button
                    className='mx-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    >
                  <div className='flex align-center items-center'>
                    <HiOutlineDownload/>
                    Download
                  </div>
                </button>
                <ButtonComponent onClick={() => setOpenModal(true)} gradientDuoTone='purpleToBlue'>+Buat data</ButtonComponent>
              </div> */}
            </div>

              <Modal show={openModal} onClose={() => setOpenModal(false)} size='5xl' initialFocus={nameInputRef}>
                <Modal.Header>
                  Buat data mahasiswa baru
                </Modal.Header>
                <Modal.Body>
                  <CreateMahasiswaPage nameInputRef={nameInputRef}/>
                </Modal.Body>
              </Modal>


            <Table hoverable>
              <Table.Head>
                {data.map((y) => (
                  <Table.HeadCell key={y.id}>
                  {y.title}
                </Table.HeadCell>
                ))}
              </Table.Head>
                {mahasiswa.map((x) => (
                  <Table.Body className="divide-y">
                    <ListMahasiswa
                      id={x.id}
                      nim={x.nim}
                      nama={x.nama}
                      kelas={x.kelas}
                      semester={x.semester}
                    />
                  </Table.Body>
                ))}
            </Table>
          </Tabs.Item>
          <Tabs.Item title='Nilai' icon={HiOutlineUser}>
            <div className="flex justify-between my-2">
              {/* <div className='flex'>
                <TextInput className='mx-2' id="mahasiswa" type="text"  rightIcon={HiOutlineSearch} placeholder="Cari mahasiswa" required sizing='sm'/>
                <ButtonComponent gradientDuoTone='purpleToBlue'>Cari</ButtonComponent>
              </div> */}
                <div className='basis-1/2'>
                  <SearchInput/>
                </div>
              <div className='flex gap-3'>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <optgroup label='Semester'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </optgroup>
                </select>

                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <optgroup label='Kelas'>
                    <option>TI 1</option>
                    <option>TI 2</option>
                    <option>TI 3</option>
                    <option>TI 4</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <Table hoverable>
              <Table.Head>
                {nilai.map((y) => (
                <Table.HeadCell key={y.id}>
                  {y.title}
                </Table.HeadCell>
                ))}
              </Table.Head>
            </Table>
          </Tabs.Item>
          <Tabs.Item title='KRS' icon={HiOutlineUser}>
            <div className="flex justify-between my-2">
              <div className='flex'>
                <TextInput className='mx-2' id="mahasiswa" type="text"  rightIcon={HiOutlineSearch} placeholder="Cari mahasiswa" required sizing='sm'/>
                <ButtonComponent gradientDuoTone='purpleToBlue'>Cari</ButtonComponent>
              </div>

              <div className='flex gap-3'>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <optgroup label='Semester'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </optgroup>
                </select>

                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <optgroup label='Kelas'>
                    <option>TI 1</option>
                    <option>TI 2</option>
                    <option>TI 3</option>
                    <option>TI 4</option>
                  </optgroup>
                </select>
              </div>
            </div>
            
            <Table hoverable>
              <Table.Head>
                {krs.map((y) => (
                <Table.HeadCell key={y.id}>
                  {y.title}
                </Table.HeadCell>
                ))}
              </Table.Head>
            </Table>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
</WrapperDashboard>
    
  )
}

export default DashboardMahasiswaPage