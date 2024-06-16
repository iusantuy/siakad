import React from 'react'
import { Dropdown, Footer, Popover, Sidebar, Tooltip } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineBookOpen, HiOutlineCalendar, HiOutlineHome, HiOutlineOfficeBuilding, HiOutlineUserGroup, HiOutlineUsers, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Form, Link, NavLink } from '@remix-run/react';
import logo from '../../public/assets/images/Logo_DNBS.jpeg'
import ButtonComponent from '~/components/button';
import SubMenu from '../components/submenu';

const menus = [
    {
        title: 'Dashboard',
        icon: <HiOutlineHome/>,
        link: '/dashboard'
    },
    // {
    //     title: 'Jadwal Kuliah',
    //     icon: <HiOutlineCalendar/>,
    //     link: '/dashboard/jadwal-kuliah'
    // },
    {
        title: 'Mata Kuliah',
        icon: <HiOutlineBookOpen/>,
        link: '/dashboard/mata_kuliah'
    },
    {
        title: 'Dosen',
        icon: <HiOutlineUsers/>,
        link: '/dashboard/dosen'
    },
    {
        title: 'Mahasiswa',
        icon: <HiOutlineUserGroup/>,
        link: '/dashboard/mahasiswa'
    },
    {
        title: 'Ruang',
        icon: <HiOutlineOfficeBuilding/>,
        link: '/dashboard/ruang'
    },
    {
        title: 'Jadwal Kuliah',
        icon: <HiOutlineCalendar/>,
        link: '/dashboard/jadwalkuliah'
    }
]

// const subMenus = [
//     {
//         title: 'Dosen',
//         icon: HiOutlineUsers,
//         link: '/dashboard/dosen',
//         subMenu: [
//             {
//                 title: 'Data',
//                 link: '/dashboard/dosen'
//             },
//             {
//                 title: 'Absensi',
//                 link: '/dashboard/dosen/absensi'
//             },
//             {
//                 title: 'Penilaian',
//                 link: '/dashboard/dosen/penilaian'
//             }
//         ]
//     },
//     {
//         title: 'Mahasiswa',
//         icon: HiOutlineUserGroup,
//         link: '/dashboard/mahasiswa',
//         subMenu: [
//             {
//                 title: 'Data',
//                 link: '/dashboard/mahasiswa'
//             },
//             {
//                 title: 'Perwalian',
//                 link: '/dashboard/mahasiswa/perwalian'
//             },
//             {
//                 title: 'KHS',
//                 link: '/dashboard/mahasiswa/khs'
//             }
//         ]
//     }
// ]

// const subMenuList = [
//     {
//         id: 1,
//         name: 'Mahasiswa',
//         link: 'dashboard',
//         icon: <HiOutlineUsers/>,
//         menus: ['data', 'perwalian', 'khs']
//     },
//     {
//         id: 2,
//         name: 'Dosen',
//         icon: <HiOutlineUserGroup/>,
//         menus: ['data', 'absensi', 'penilaian']
//     }
// ]


const SidebarLayout = () => {
  return (
        <Sidebar aria-label="Sidebar with logo branding example" className='fixed top-0'>
        <Sidebar.Logo href="#" img={logo} imgAlt="DNBS logo">
            STMIK DNBS
        </Sidebar.Logo>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                {/* <Link to='/dashboard'>
                <Sidebar.Item icon={HiOutlineHome}>
                </Sidebar.Item>
                </Link>
                <Link to='/dashboard'>
                    <Sidebar.Item icon={HiOutlineHome}>
                    </Sidebar.Item>
                </Link>
                <Link to='/dashboard'>
                        <Sidebar.Item href='/dashboard/matakuliah' icon={HiOutlineBookOpen}>
                        </Sidebar.Item>
                </Link>
                <Link to='/dashboard'>
                        <Sidebar.Item icon={HiOutlineBookOpen}>
                            <span>Nilai</span>
                        </Sidebar.Item>
                </Link> */}

                {/* {menus.map((menu) => (
                    <li key={menu.id}>
                        <NavLink to={menu.link} className={
                            ({isActive, isPending}) =>
                                isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        }>
                            {menu.title}
                        </NavLink>
                    </li>
                ))} */}

            {menus.map(menu => (
                <>
                    <NavLink className={
                        ({isActive, isPending}) => 
                        isActive 
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={menu.link}>
                        <li className="flex text-dark-300 text-md items-center gap-x-4 cursor-pointer p-1 hover:bg-gray-100 hover:text-blue-700 rounded-sm mt-1">
                            <span className="p-2 pt-2">
                                {menu.icon}
                            </span>
                            <span>{menu.title}</span>
                        </li>
                    </NavLink> 
                </>
            ))}

            {/* {menus.map(menu => (
                <>
                    <Link className={
                        ({isActive, isPending}) => 
                        isActive 
                        ? 'active'
                        : isPending
                        ? "pending"
                        : ""
                    } to={menu.link}>
                        <li className="flex text-dark-300 text-md items-center gap-x-4 cursor-pointer p-1 hover:bg-gray-100 hover:text-blue-700 rounded-sm mt-1">
                            <span className="p-2 pt-2">
                                {x.icon ? x.icon : <AiOutlineDoubleLeft/>}
                                {menu.icon}
                            </span>
                            <span>{menu.title}</span>
                            <span>{menu.title === 'Mahasiswa' ? <Popover content={<h1>wadwdawda</h1>} placement='right'><h1>Mahasiswa</h1></Popover> : menu.title}</span>
                        </li>
                    </Link> 
                </>
            ))} */}

                {/* <li>
                    <Link to='dashboard' className={"link"}>
                        <HiOutlineUsers className='min-w-max' size={25}/>
                        adadqwd
                    </Link>
                </li> */}

                {/* {subMenus.map((x, i) => (
                    <Sidebar.Collapse icon={x.icon} label={x.title}>
                        {x.subMenu?.map((y, i) => (
                            <Link to={y.link}>
                                <li className="flex text-dark-300 text-md items-center gap-x-4 cursor-pointer p-1 hover:bg-gray-100 hover:text-blue-700 rounded-sm mt-1">
                                <span className="p-2 pt-2">
                                    {x.icon ? x.icon : <AiOutlineDoubleLeft/>}
                                    wwwww
                                    </span>
                                <span>wqdqwd</span>
                                </li>
                            <li className="flex text-dark-300 text-md items-center gap-x-4 cursor-pointer p-1 hover:bg-gray-100 hover:text-blue-700 rounded-sm mt-1">
                            <span className="p-2 pt-2">
                                {x.icon ? x.icon : <AiOutlineDoubleLeft/>}
                                {y.icon}
                            </span>
                            <span>{y.title}</span>
                        </li>
                                <Sidebar.Item key={i}>                  
                                    <span>{y.title}</span>
                                </Sidebar.Item>
                            </Link>
                        ))}
                    </Sidebar.Collapse>
                ))} */}

                {/* {
                    subMenuList.map(menu => (
                        <div key={menu.id} className='flex flex-col gap-1'>
                            <SubMenu data={menu}/>
                        </div>
                    ))
                } */}

            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
                <Form method='POST' className='flex justify-center'>
                    <ButtonComponent className='w-full' type="submit">
                        Keluar
                    </ButtonComponent>
                </Form>
                <h1 className='flex justify-center'>Baked with love in Bandung</h1>
                <Footer.Copyright year='2024.' by='STMIK Dharma Negara'/>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
        </Sidebar>
  )
}

export default SidebarLayout