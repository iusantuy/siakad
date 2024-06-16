import React from 'react'
import { Accordion, Card, Table, Tabs, TextInput } from 'flowbite-react'
import { HiOutlineBookOpen, HiOutlineLockClosed, HiOutlineSearch, HiOutlineUser, HiOutlineUserGroup, HiOutlineUsers } from 'react-icons/hi';
// import Wrapper from '../../layouts/wrapper'
import { Link, useLoaderData } from '@remix-run/react';
import WrapperDashboard from '../../layouts/wrapper-dashboard';

const HomeComponent = () => {
  const {totalMhs, totalMK} = useLoaderData()
  // const find = () => {
  //   return (
  //     <Link to='/home'>
  //       <h1>adad</h1>
  //     </Link>
  //   )
  // }
  const x = [
    {
      id: 1,
      title: 'Jumlah Dosen',
      jumlah: '1'
    },
    {
      id: 2,
      title: 'Jumlah Mahasiswa',
      jumlah: '1',
      tab: 
              <Tabs style='underline'>
                <Tabs.Item active title='TI 1'>
                  <h1>awdawd</h1>
                </Tabs.Item>
                <Tabs.Item title='TI 2'>
                  <h1>TI 2</h1>
                </Tabs.Item>
                <Tabs.Item title='TI 3'>
                  <h1>TI 3</h1>
                </Tabs.Item>
              </Tabs>
    },
    {
      id: 3,
      title: 'Jumlah Mata Kuliah',
      jumlah: '1'
    },
  ]
  return (
  
<WrapperDashboard>
  {/* <h1>{totalMhs}</h1>
    <h1>{totalMK}</h1> */}
    <div className="flex overflow-x-auto grid grid-cols-3 ">
      {/* {x.map((y) => (
            <Card>
              <h5>
                {y.title}
              </h5>
              <p>
                {y.jumlah}
              </p>
              {y.tab}
            </Card>
        // <div className='grid grid-cols-2 gap-2'>
        //   <div className='col-span-1'>
        //   </div>
        // </div>
      ))} */}
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Jumlah Mata Kuliah
        </h5>
        <HiOutlineUsers/>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {totalMhs}
        </p>
      </Card>
      
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Jumlah Dosen
        </h5>
        <HiOutlineUserGroup/>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {totalMhs}
        </p>
      </Card>

      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Jumlah Mahasiswa
        </h5>
          <HiOutlineBookOpen/>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {totalMK}
        </p>
      </Card>

      {/* <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Jumlah Jadwal Akademik
        </h5>
          <HiOutlineBookOpen/>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {totalMK}
        </p>
      </Card> */}

      {/* <Card className="my-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Jadwal Akademik
        </h5>
        <HiOutlineBookOpen/>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {totalMK}
          </p>
        </Card> */}

        </div>
        <div className='my-5'>
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>Total Mahasiswa Setiap Tahun</Accordion.Title>
              <Accordion.Content>
                {/* <div className='grid grid-cols-4 gap-4'> */}
                  <h1>Tahun 2020: 1000</h1>
                  <h1>Tahun 2021: 1000</h1>
                  <h1>Tahun 2022: 1000</h1>
                  <h1>Tahun 2023: 1000</h1>
                  <h1>Tahun 2024: 1000</h1>
                {/* </div> */}
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
</WrapperDashboard>
    
  )
}

export default HomeComponent