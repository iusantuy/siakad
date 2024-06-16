import React from 'react'
import { Badge, Button, Card, Table } from '~/flowbite-react.module'
import Wrapper from '../../layouts/wrapper'
import { useLoaderData } from '@remix-run/react'
import TextInputComponent from '../../components/text-input'
import { Dropdown } from 'flowbite-react'


const AbsensiPage = () => {
    const data = useLoaderData()
    const pertemuan = [
        {
            ke: '1',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '2',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '3',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '4',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '5',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '6',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '7',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '8',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '9',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '10',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '11',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '12',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '13',
            status: 'hadir',
            tgl: <h1>-</h1>
        },
        {
            ke: '14',
            status: 'hadir',
            tgl: <h1>-</h1>
        }
    ]
    // const kehadiran = [
    //     {
    //         status
    //     }
    // ]
    // const 
    return (
        <Wrapper>
            <Card>
                <div className='text-center'>
                    <h1 className='font-bold'>DAFTAR HADIR KULIAH MAHASISWA</h1>
                    <h1>SEMESTER II - TAHUN AKADEMIK 2023/2024</h1>
                </div>

                {/* <div className="flex">
                    <div className="basis-1/4">
                        <h1>Mata Kuliah</h1>
                        <h1>Kode</h1>
                        <h1>Kelas</h1>
                        <h1>Semester</h1>
                        <h1>Tahun Akademik</h1>
                    </div>

                    <div className="basis-3/4">
                        <h1>Inteligensi Buatan</h1>
                        <h1>IF</h1>
                        <h1>TI 1</h1>
                        <h1>5</h1>
                        <h1>2023</h1>
                    </div>
                </div> */}

                <div className="flex">
                    <div className="basis-1/4">
                        <h1>Mata Kuliah</h1>
                        <h1>Hari</h1>
                    </div>

                    <div className="basis-3/4">
                        <h1>Inteligensi Buatan</h1>
                        <h1>Senin, 08:00 - 10:00</h1>
                    </div>
                </div>

                <table class="table-auto">
                    <thead>
                        <tr>
                            <th rowSpan='3' class="border border-gray-900 text-gray-900 font-medium">No.</th>
                            <th rowSpan='3' class="border border-gray-900 text-gray-900 font-medium">NIM</th>
                            <th rowSpan='3' class="border border-gray-900 text-gray-900 font-medium">Nama</th>
                            <th colSpan='14' class="border border-gray-900 px-4 py-2 text-gray-900 font-medium">Pertemuan</th>
                        </tr>
                        <tr>
                            {pertemuan.map((x) => (
                                    <th class="border border-gray-900 px-4 py-2 text-gray-900 font-medium">{x.ke}</th>
                            ))}
                            {/* <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">232101388</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Fairuz</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                            <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th>
                        <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</th> */}
                        </tr>
                        <tr>
                            {pertemuan.map((x) => (
                                    <th class="border border-gray-900 px-4 py-2 text-gray-900 font-medium">{x.tgl}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {/* <tr>
                        <td rowSpan='2' class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Title</td>
                        <td colSpan='2' class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>

                        <td colSpan='14' class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Petemuan</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                    </tr> */}
                        {data.map((x, i) => (
                            <tr className="hover:bg-gray-100">
                                <td class="border border-gray-900 px-4 py-2 text-gray-900 font-small">{i+1}</td>
                                <td class="border border-gray-900 px-4 py-2 text-gray-900 font-small">{x.nim}</td>
                                <td class="border border-gray-900 px-4 py-2 text-gray-900 font-small">{x.nama}</td>
                                {pertemuan.map((x) => (

                                <td class="border border-gray-900 px-4 py-2 text-gray-900 font-small">
                                    <Badge>{x.status}</Badge>

                                    {/* <select className='border-transparent'>
                                        <option value="hadir">hadir</option>
                                        <option value="izin">izin</option>
                                        <option value="sakit">sakit</option>
                                    </select> */}

                                       {/* <Dropdown id='absensi' name='absensi' autoComplete='absensi' size='sm' label="" dismissOnClick={false} renderTrigger={() => <span>aawq</span>}>
                                        <select>
                                            <option>wdaw</option>
                                            <option>awdwad</option>
                                        <Dropdown.Item>

                                    <Badge color='failure'>sakit</Badge>
                                        </Dropdown.Item>
                                        <Dropdown.Item>

                                     <Badge color='warning'>izin</Badge>
                                        </Dropdown.Item>
                                        </select>
                                     </Dropdown> */}

                                     {/* <select className='appearance-none border-none'>
                                        <option>
                
                                        <Badge>aa</Badge>
                                         
                                            <Badge>zzzz</Badge>
                                        </option>
                                     </select> */}
                                </td>

                                //   <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                                //     <Dropdown size='sm'>
                                //         <Dropdown.Item>

                                //     <Badge>{x.status}</Badge>
                                //         </Dropdown.Item>
                                //         <Dropdown.Item>

                                //     <Badge>zzzz</Badge>
                                //         </Dropdown.Item>
                                //     </Dropdown>
                                // </td>
                                ))}
                                {/* <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td> */}
                            </tr>
                        ))}
                    {/* <tr>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">2</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
                    </tr> */}
                    </tbody>
                </table>
                
            </Card>

        </Wrapper>
    )
}

export default AbsensiPage

{/* <Table hoverable>
<Table.Head>
    <Table.HeadCell>            
        No.
    </Table.HeadCell>
    <Table.HeadCell>
        NIM
    </Table.HeadCell>
    <Table.HeadCell>
        NAMA MAHASISWA
    </Table.HeadCell>
    <Table.HeadCell>
        <h1>
            Pertemuan
        </h1>

    <Table.HeadCell>
        <h1 className='text-center'>Pertemuan</h1>
        <Table.HeadCell>
            1
            MINGGU 1
            <Button size='xs'>Absen</Button>
        </Table.HeadCell>
        <Table.HeadCell>
            2
        </Table.HeadCell>
        <Table.HeadCell>
            3
        </Table.HeadCell>
        <Table.HeadCell>
            4
        </Table.HeadCell>
        <Table.HeadCell>
            5
        </Table.HeadCell>
        <Table.HeadCell>
            6
        </Table.HeadCell>
        <Table.HeadCell>
            7
        </Table.HeadCell>
        <Table.HeadCell>
            8
        </Table.HeadCell>
        <Table.HeadCell>
            9
        </Table.HeadCell>
        <Table.HeadCell>
            10
        </Table.HeadCell>
        <Table.HeadCell>
            11
        </Table.HeadCell>
        <Table.HeadCell>
            12
        </Table.HeadCell>
        <Table.HeadCell>
            13
        </Table.HeadCell>
        <Table.HeadCell>
            14
        </Table.HeadCell>
    </Table.HeadCell>
        
    </Table.HeadCell>
</Table.Head>
<Table.Body>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
        {data.map((x) => (
            <tr className='hover:bg-gray-100'>

                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">NIM</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Nama</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Nama</td>
                
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Nama</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
              
            </tr>
        ))}
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Adam</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
Fairuz
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<TextInputComponent/>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
<Badge>
Hadir
</Badge>
</td>

</tr>
<tr class="bg-emerald-200">
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">2</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Adam</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">3</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">4</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">5</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">5</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">00</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">00</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">00</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">00</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">00</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">00</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>
<tr>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">00</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
<td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
</tr>

    {data.map((x) => (
        <Table.Row>
            <Table.Cell>
                1
            </Table.Cell>
            <Table.Cell>
                {x.nim}
            </Table.Cell>
            <Table.Cell>
                {x.nama}
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge>
                    Hadir
                </Badge>
            </Table.Cell>
        </Table.Row>
    ))}
</Table.Body>
<Table.Body>
    IFKB002
</Table.Body>
</Table> */}

                // <Table.Row>
                //     <Table.Cell>
                //         1
                //     </Table.Cell>
                //     <Table.Cell>
                //         IFKB002
                //     </Table.Cell>
                //     <Table.Cell>
                //         Inteligensi Buatan
                //     </Table.Cell>
                //     <Table.Cell>
                //         <Badge>
                //             Hadir
                //         </Badge>
                //     </Table.Cell>
                //     <Table.Cell>
                        
                //     </Table.Cell>
                //     <Table.Cell>
                //         -
                //     </Table.Cell>
                //     <Table.Cell>
                //         1/1/2024
                //     </Table.Cell>
                //     <Table.Cell>
                //         -
                //     </Table.Cell>
                // </Table.Row>





                // https://stackoverflow.com/questions/66584502/table-not-using-tailwind-css