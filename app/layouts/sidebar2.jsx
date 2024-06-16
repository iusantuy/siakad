import React from 'react'
import { Footer, Sidebar } from 'flowbite-react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiArrowSmRight, HiChartPie, HiInbox, HiOutlineBookOpen, HiOutlineCalendar, HiOutlineHome, HiOutlineUserGroup, HiOutlineUsers, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Form, Link } from '@remix-run/react';
import logo from '../../public/assets/images/Logo_DNBS.jpeg'
import ButtonComponent from '~/components/button';
import SubMenu from '../components/submenu';


const SidebarLayout = () => {
    // const menus = [
    //     {
    //         title: 'Dashboard',
    //         icon: <HiOutlineHome/>,
    //         link: '/dashboard'
    //     },
    //     {
    //         title: 'Jadwal Akademik',
    //         icon: <HiOutlineCalendar/>,
    //         link: '/dashboard/jadwal-akademik'
    //     },
    //     {
    //         title: 'Mata Kuliah',
    //         icon: <HiOutlineBookOpen/>,
    //         link: '/dashboard/matakuliah'
    //     }
    // ]
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
    
    const animation = {
        open: {
            width: "16rem",
            transition: {
                damping: 40
            }
        },
        closed: {
            width: "4rem",
            transition: {
                damping: 40
            }
        }
    }
    
    const subMenuList = [
        {
            name: 'Dashboard',
            icon: HiOutlineUsers,
            menus: ['mahasiswa', 'perwalian', 'KHS']
        },
        {
            name: 'Dosen',
            icon: HiOutlineUserGroup,
            menus: ['data', 'Absensi', 'Penilaian']
        }
    ]
    const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div className='fixed'>
        <motion.div 
            variants={animation}
            animate={isOpen ? "open" : "closed"}
            className='fixed top-0 bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative'>
                <div className='flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3'>
                    <img src="" alt="" width={45}/>
                    <span className='text-xl whitespace-pre'>
                        STMIK DNBS
                    </span>
                </div>

                <div className='flex flex-col h-full'>
                    <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden'>
                        <li>
                            <Link to='/dashboard' className={"link"}>
                                <HiOutlineUsers className='min-w-max' size={25}/>
                                adadqwd
                            </Link>
                        </li>

                        <div className='border-y py-5 border-slate-300'>
                        <small className='pl-3 text-slate-500 inline-block mb-2'>
                            wqdwqdwqd
                        </small>
                        {
                            subMenuList.map(menu => (
                                <div key={menu.name} className='flex flex-col gap-1'>
                                    <SubMenu data={menu}/>
                                </div>
                            ))
                        }
                        </div>
                    </ul>
                </div>
                
                <motion.div
                    animate={
                        isOpen 
                        ?
                        {
                            x: 0,
                            y: 0,
                            rotate: 0
                        }
                        :
                        {
                            x: -10,
                            y: -200,
                            rotate: 180
                        }
                    }
                    transition={{
                        duration: 0
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                    className='absolute w-fit h-fit z-50 right-2 bottom-3 cursor-pointer'>
                    <HiArrowRight size={25}/>
                </motion.div>
        </motion.div>
    </div>
  )
}

export default SidebarLayout