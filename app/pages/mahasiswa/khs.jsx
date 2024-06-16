import { Tabs } from "flowbite-react"
import { Card, Table } from "~/flowbite-react.module"

const KhsMahasiswaPage = () => {
    const data = [
        {
            title: 'Semester 1',
            // content: 
            // <h1>
            // This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
            // Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            // control the content visibility and styling.
            // </h1>
        },
        {
            title: 'Semester 2',
            // content: 
            // <Card>
            //     <u>
            //         <h1>KARTU HASIL STUDI</h1>
            //     </u>
            //     <div className="flex">
            //         <div className="basis-1/4">
            //             <h1>NIM</h1>
            //             <h1>Nama</h1>
            //             <h1>Semester</h1>
            //             <h1>Program Studi</h1>
            //         </div>

            //         <div className="basis-3/4">
            //             <h1>232101388</h1>
            //             <h1>Fairuz Hibatullah Akbar</h1>
            //             <h1>I TA 2022/2023</h1>
            //             <h1>Teknik Informatika</h1>
            //         </div>
            //     </div>
            //     <Table>
            //     <Table.Head>
            //         <Table.HeadCell>            
            //             No.
            //         </Table.HeadCell>
            //         <Table.HeadCell>
            //             KODE
            //         </Table.HeadCell>
            //         <Table.HeadCell>
            //             MATA KULIAH
            //         </Table.HeadCell>
            //         <Table.HeadCell>
            //             NILAI
            //         </Table.HeadCell>
            //         <Table.HeadCell>
            //             SKS
            //         </Table.HeadCell>
            //         <Table.HeadCell>
            //             BOBOT
            //         </Table.HeadCell>
            //         {/* <Table.HeadCell>
            //             TGL. UAS
            //         </Table.HeadCell>
            //         <Table.HeadCell>
            //             PARAF
            //         </Table.HeadCell> */}
            //     </Table.Head>
            //     <Table.Body>
            //         <Table.Row>
            //             <Table.Cell>
            //                 1
            //             </Table.Cell>
            //             <Table.Cell>
            //                 IFKB002
            //             </Table.Cell>
            //             <Table.Cell>
            //                 Inteligensi Buatan
            //             </Table.Cell>
            //             <Table.Cell>
            //                 A
            //             </Table.Cell>
            //             <Table.Cell>
            //                 3
            //             </Table.Cell>
            //             <Table.Cell>
            //                 9
            //             </Table.Cell>
            //             {/* <Table.Cell>
            //                 1/1/2024
            //             </Table.Cell>
            //             <Table.Cell>
            //                 -
            //             </Table.Cell> */}
            //         </Table.Row>
            //     </Table.Body>
            //     {/* <Table.Body>
            //         IFKB002
            //     </Table.Body> */}
            //     </Table>
            // </Card>
        },
        {
            title: 'Semester 3'
        },
        {
            title: 'Semester 4'
        },
        {
            title: 'Semester 5'
        },
        {
            title: 'Semester 6'
        },
        {
            title: 'Semester 7'
        },
        {
            title: 'Semester 8'
        }
    ]
    return (
        <>
     <Tabs aria-label="Tabs with underline" style="underline">
        {data.map((x) => (
            <Tabs.Item active title={x.title}>
                <Card>
                <u>
                    <h1>KARTU HASIL STUDI</h1>
                </u>
                <div className="flex">
                    <div className="basis-1/4">
                        <h1>NIM</h1>
                        <h1>Nama</h1>
                        <h1>Semester</h1>
                        <h1>Jurusan</h1>
                    </div>

                    <div className="basis-3/4">
                        <h1>232101388</h1>
                        <h1>Fairuz Hibatullah Akbar</h1>
                        <h1>I TA 2022/2023</h1>
                        <h1>Teknik Informatika</h1>
                    </div>
                </div>
                <Table>
                <Table.Head>
                    <Table.HeadCell>            
                        No.
                    </Table.HeadCell>
                    <Table.HeadCell>
                        KODE
                    </Table.HeadCell>
                    <Table.HeadCell>
                        MATA KULIAH
                    </Table.HeadCell>
                    <Table.HeadCell>
                        NILAI
                    </Table.HeadCell>
                    <Table.HeadCell>
                        SKS
                    </Table.HeadCell>
                    <Table.HeadCell>
                        BOBOT
                    </Table.HeadCell>
                    {/* <Table.HeadCell>
                        TGL. UAS
                    </Table.HeadCell>
                    <Table.HeadCell>
                        PARAF
                    </Table.HeadCell> */}
                </Table.Head>
                <Table.Body>           
                            <tr className='hover:bg-gray-100'>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">1</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">IFKK033</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">Perangkat Lunak Enterprise</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">A</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">3</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">12</td>
                            </tr>

                            <tr className='hover:bg-gray-100'>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">2</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">IFPK002</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">Bahasa Inggris</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">A</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">2</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">8</td>
                            </tr>

                            <tr className='hover:bg-gray-100'>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">3</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">IFKB006</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">Ekonomi Informatika</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">A</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">2</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">8</td>
                            </tr>

                            <tr className='hover:bg-gray-100'>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">4</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">IFKK032</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">Grafika Komputer</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">A</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">3</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">12</td>
                            </tr>

                            <tr className='hover:bg-gray-100'>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">5</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">IFBB001</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">Kerja Praktek / Magang</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">A</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">2</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">8</td>
                            </tr>

                            <tr className='hover:bg-gray-100'>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">6</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">IFKK052</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">Basis Data Terdistribusi</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">A</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">3</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">12</td>
                            </tr>

                            <tr className='hover:bg-gray-100'>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">7</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">IFKK048</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">Manajemen Projek Teknologi Informasi</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">A</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">3</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">12</td>
                            </tr>
                    {/* {data.map((x, i) => (
                    ))} */}
                            <tr>
                                <td colSpan='3' class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium text-end">Jumlah</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium"></td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">18</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">72</td>
                            </tr>
                            <tr>
                                <td colSpan='3' class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium text-end">Indeks Prestasi</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">4.00</td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium"></td>
                                <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium"></td>
                            </tr>



                    {/* <Table.Row>
                        <Table.Cell>
                            1
                        </Table.Cell>
                        <Table.Cell>
                            IFKB002
                        </Table.Cell>
                        <Table.Cell>
                            Inteligensi Buatan
                        </Table.Cell>
                        <Table.Cell>
                            A
                        </Table.Cell>
                        <Table.Cell>
                            3
                        </Table.Cell>
                        <Table.Cell>
                            9
                        </Table.Cell>
                        <Table.Cell>
                            1/1/2024
                        </Table.Cell>
                        <Table.Cell>
                            -
                        </Table.Cell>
                    </Table.Row> */}
                </Table.Body>
                {/* <Table.Body>
                    IFKB002
                </Table.Body> */}
                </Table>
            </Card>
            </Tabs.Item>
        ))}
  
    </Tabs>





            {/* <Table>
                <Table.Head>
                    <Table.HeadCell>            
                        Mata Kuliah
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Kode
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Absensi
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Kuis
                    </Table.HeadCell>
                    <Table.HeadCell>
                        UTS
                    </Table.HeadCell>
                    <Table.HeadCell>
                        UAS
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Grade
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            Inteligensi Buatan
                        </Table.Cell>
                        <Table.Cell>
                            IFKB002
                        </Table.Cell>
                        <Table.Cell>
                            100
                        </Table.Cell>
                        <Table.Cell>
                            100
                        </Table.Cell>
                        <Table.Cell>
                            100
                        </Table.Cell>
                        <Table.Cell>
                            100
                        </Table.Cell>
                        <Table.Cell>
                            A
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Body>
                    IFKB002
                </Table.Body>
            </Table> */}

        {/* <div>nilai</div>
        <div>nilai</div>
        <div>nilai</div>
        <div>nilai</div>
        <div>nilai</div>
        <div>nilai</div>
        <div>nilai</div>
        <div>nilai</div>
        <div>nilai</div>
        <div>nilai</div> */}
        </>
    )
}

export default KhsMahasiswaPage



{/* <Sidebar.Collapse icon={HiOutlineCalendar} label="E-commerce">
<Sidebar.Item href="#">Products</Sidebar.Item>
<Sidebar.Item href="#">Sales</Sidebar.Item>
<Sidebar.Item href="#">Refunds</Sidebar.Item>
<Sidebar.Item href="#">Shipping</Sidebar.Item>
</Sidebar.Collapse>



{menus.map((x, i) => (
    <Link to={x.link}>
      <Sidebar.Item href="#" icon={x.icon}>{x.title}</Sidebar.Item>
    </Link>
))} */}

// {menus.map((x, i) => (
//     <Link to={x.link}>
//         <li key={i} className="text-dark-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md mt-2">
//             <span className="p-2 pt-2">
//             {/* {x.icon ? x.icon : <AiOutlineDoubleLeft/>} */}
//             {x.icon}
//             </span>
//             <span>{x.title}</span>
//         </li>
//     </Link>
// ))}