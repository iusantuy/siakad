import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../public/assets/images/Logo_DNBS.jpeg'
import { Form, Link, useLoaderData } from '@remix-run/react';
import ButtonComponent from '~/components/button';

const HeaderDosenLayout = () => {
  // const { data } = useLoaderData()
  // console.log(data)

  const menuDosen = [
    {
      id: 1,
      // name: 'Home',
      link: 
      <Link to='/dosen/absensi'>
        Absensi
      </Link>
    },
    {
        id: 2,
        // name: 'Home',
        link: 
        <Link to='/dosen/penilaian'>
          Penilaian
        </Link>
      }
  ]
  return (
    <Navbar fluid rounded>
        <Navbar.Brand href='/mhs'>
          <img src={logo} className="mr-3 h-6 sm:h-20" alt="Logo DNBS" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DNBS</span> */}
        </Navbar.Brand>

      {/* <Link to={'/mhs'}>
      </Link> */}

    <div className="flex md:order-2">
        {/* <h1 className='mx-5'>{data.nama}</h1> */}
        {/* <h1>awdnbk</h1> */}
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
        }
      >
        <Dropdown.Header>
          {/* <span className="block text-sm">{data.nim}</span> */}
          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
        </Dropdown.Header>
        <Link to={'/mhs/profile'}>
          <Dropdown.Item>Profil Mahasiswa</Dropdown.Item>
        </Link>
        <Dropdown.Item>Kalender Akademik</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Form method='POST' className='flex justify-center'>
            <ButtonComponent type="submit">
              Sign out
            </ButtonComponent>
          {/* <Dropdown.Item>
            </Dropdown.Item> */}
        </Form>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      {menuDosen.map((x) => (
        <h1 id={x.id}>
          {x.link}
        </h1>
      ))}
      
    </Navbar.Collapse>
  </Navbar>
  )
}

export default HeaderDosenLayout