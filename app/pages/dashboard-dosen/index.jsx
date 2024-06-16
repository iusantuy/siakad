import React from 'react'
import { Breadcrumb, Button, Modal, Table, Tabs, TextInput } from 'flowbite-react'
import { HiAcademicCap, HiClipboardCheck, HiOutlineHome, HiOutlineLockClosed, HiOutlineSearch, HiOutlineUser, HiOutlineUserGroup, HiOutlineUsers } from 'react-icons/hi';
// import Wrapper from '../../layouts/wrapper-dashboard'
import { Link, useLocation, useMatches } from '@remix-run/react';
import ListDosen from './list';
import WrapperDashboard from '../../layouts/wrapper-dashboard';
import ButtonComponent from '../../components/button';
import CreateDosenPage from './create';
import SearchInput from '../../components/searchInput';

const DashboardDosenPage = ({dosen}) => {
  const matches = useMatches();
  const location = useLocation();
  const pathName = location.pathname.slice(11);
  const nameInputRef = React.useRef()
  const [openModal, setOpenModal] = React.useState(false)
  const x = [
    // {
    //     id: 0,
    //     title: 'Id'
    // },
    {
        id: 1,
        title: 'NIK'
      },
      {
        id: 2,
        title: 'Dosen'
    },
    {
        id: 3,
        title: 'Pendidikan'
    },
    // {
    //     id: 4,
    //     title: 'Semester'
    // },
    {
        id: 5,
        title: 
        <span className="sr-only">Detail</span>
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
        ))}
     
                  <div className='mx-1 my-2'>
                   <SearchInput/>
                      {/* <Link to='/dashboard/mahasiswa/create'> */}
                    <ButtonComponent onClick={() => setOpenModal(true)} gradientDuoTone='purpleToBlue'>+Buat data</ButtonComponent>
                        {/* <ButtonComponent gradientDuoTone='cyanToBlue'>+Buat data mahasiswa</ButtonComponent> */}
                      
                      {/* </Link>    */}
                  </div>

                  <Modal show={openModal} onClose={() => setOpenModal(false)} size='5xl' initialFocus={nameInputRef}>
                    <Modal.Header>
                      Buat data mahasiswa baru
                    </Modal.Header>
                    <Modal.Body>
                      <CreateDosenPage nameInputRef={nameInputRef}/>
                    </Modal.Body>
                  </Modal>
     
        
             

              <Table hoverable>
                <Table.Head>
                  {x.map((y) => (
                  <Table.HeadCell key={y.id}>
                    {y.title}
                  </Table.HeadCell>
                  ))}
                </Table.Head>
                  {dosen.map((x) => (
                    <Table.Body className="divide-y">
                      <ListDosen
                        id={x.id}
                        kode={x.kode}
                        nama={x.nama}
                        pendidikan={x.pendidikan}
                        // semester={x.semester}
                      />
                    </Table.Body>
                  ))}
                {/* <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {'Fairuz Hibatullah Akbar'}
                    </Table.Cell>
                    <Table.Cell>232101388</Table.Cell>
                    <Table.Cell>TI</Table.Cell>
                    <Table.Cell>5</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Microsoft Surface Pro
                    </Table.Cell>
                    <Table.Cell>White</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                    <Table.Cell>$1999</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                    <Table.Cell>Black</Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                    <Table.Cell>$99</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body> */}
              </Table>
          {/* <div className='mx-1 my-2'>
            <Tabs style='fullWidth'>
              <Tabs.Item title='Data' icon={HiOutlineUsers}>
                  

              </Tabs.Item>
              <Tabs.Item title='Absensi' icon={HiClipboardCheck}>
                  <h1>wadwa</h1>
              </Tabs.Item>
              <Tabs.Item title='Penilaian' icon={HiAcademicCap}>
                  <h1>wadwa</h1>
              </Tabs.Item>
            </Tabs>
          </div> */}


          {/* <div className="flex justify-between my-5">
            <div className='self-center'>
              <TextInput id="dosen" type="text"  rightIcon={HiOutlineSearch} placeholder="Cari dosen" required sizing='sm' addon='Dosen'/>
            </div>
            <div>    
                <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
              <Link to='/dashboard/dosen/create'>
                <ButtonComponent gradientDuoTone='purpleToBlue'>+Buat data dosen</ButtonComponent>
              </Link>
            </div>
          </div> */}

        </div>
    </WrapperDashboard>

    // <div className="overflow-x-auto ml-72">

    // <div className="max-w-md m-5">
    //   <TextInput id="email4" type="email"  rightIcon={HiOutlineSearch} placeholder="name@flowbite.com" required sizing='sm' addon='Dosen'/>
    // </div>

    // <Table hoverable>
    //   <Table.Head>
    //     <Table.HeadCell>Nama</Table.HeadCell>
    //     <Table.HeadCell>NIP</Table.HeadCell>
    //     <Table.HeadCell>Kelas</Table.HeadCell>
    //     <Table.HeadCell>Semester</Table.HeadCell>
    //     <Table.HeadCell>
    //       <span className="sr-only">Edit</span>
    //     </Table.HeadCell>
    //   </Table.Head>
    //   <Table.Body className="divide-y">
    //     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    //       <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    //         {'Endang'}
    //       </Table.Cell>
    //       <Table.Cell>232101388</Table.Cell>
    //       <Table.Cell>TI</Table.Cell>
    //       <Table.Cell>5</Table.Cell>
    //       <Table.Cell>
    //         <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
    //           Edit
    //         </a>
    //       </Table.Cell>
    //     </Table.Row>
    //     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    //       <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    //         Microsoft Surface Pro
    //       </Table.Cell>
    //       <Table.Cell>White</Table.Cell>
    //       <Table.Cell>Laptop PC</Table.Cell>
    //       <Table.Cell>$1999</Table.Cell>
    //       <Table.Cell>
    //         <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
    //           Edit
    //         </a>
    //       </Table.Cell>
    //     </Table.Row>
    //     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    //       <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
    //       <Table.Cell>Black</Table.Cell>
    //       <Table.Cell>Accessories</Table.Cell>
    //       <Table.Cell>$99</Table.Cell>
    //       <Table.Cell>
    //         <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
    //           Edit
    //         </a>
    //       </Table.Cell>
    //     </Table.Row>
    //   </Table.Body>
    // </Table>
    // </div>
    
  )
}

export default DashboardDosenPage