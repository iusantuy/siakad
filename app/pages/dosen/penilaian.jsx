import React from 'react'
import { useLoaderData } from '@remix-run/react'
import { Card, Table } from '~/flowbite-react.module'
import Wrapper from '../../layouts/wrapper'
import { Badge, TextInput } from '~/flowbite-react.module'
import TextInputComponent from '~/components/text-input'
import ButtonComponent from '../../components/button'
import InputNilaiComponent from '../../components/input-nilai'
import { Tooltip } from 'flowbite-react'
import _ from 'lodash'

function isEnterOrEscapeKeyEvent(event) {
    return event.key === 'Enter' || event.key === 'Escape'
}

const PenilaianPage = () => {
    const data = useLoaderData()
    const [isEditing, setIsEditing] = React.useState(false)
    const [absensi, setAbsensi] = React.useState(0)
    const [tgs, setTgs] = React.useState(0)
    const [uts, setUts] = React.useState(0)
    const [uas, setUas] = React.useState(0)
    const [average, setAverage] = React.useState()
    const [grd, setGrade] = React.useState()
    const [text, setText] = React.useState('-')
    const inputValue = (e) => e.target.value
    const changed = _.flow(inputValue, setText)

    const onChangedAbsensi = _.flow(inputValue, setAbsensi)

    const onChangedTgs = _.flow(inputValue, setTgs)

    const onChangedUts = _.flow(inputValue, setUts)

    const onChangedUas = _.flow(inputValue, setUas)

    // const onChangedAbsensi = (e) => {
    //     setAbsensi(e.target.value)
    // }

    // const onChangedTgs = (e) => {
    //     setTgs(e.target.value)
    // }

    // const onChangedUts = (e) => {
    //     setUts(e.target.value)
    // }

    // const onChangedUas = (e) => {
    //     setUas(e.target.value)
    // }

    

    let avg;
    let grade;
    let total;
    function generate() {
        total = Number(absensi) + Number(tgs) + Number(uts) + Number(uas)
        avg = Number(total/4)
        setAverage(avg)
        if (avg >= 80 && avg <= 100) {
            grade = 'A'
        } else if (avg >= 70 && avg <= 80) {
            grade = 'B'
        } else if (avg >= 60 && avg <= 70) {
            grade = 'C'
        } else if (avg >= 50 && avg <= 60) {
            grade = 'D'
        } else {
            grade = 'E'
        }

        // switch (avg) {
        //     case (avg >= 80 || avg <= 100):
        //         {
        //             grade = 'A'
        //         }
        //     case (avg >= 70 || avg <= 80):
        //         {
        //             grade = 'B'
        //         }
        //     case (avg >= 60 || avg <= 70):
        //         {
        //             grade = 'C'
        //         }
        //     case (avg >= 50 || avg <= 60):
        //         {
        //             grade = 'D'
        //         }
        //     default:
        //         {
        //             grade = 'E'
        //         }
        // }
        setGrade(grade);
    }
    const onEditEnd = () => {
        setIsEditing(false)
    }
    const nilai = [
        {
            id: 'absensi',
            default: '0'
        },
        {
            id: 'tgs',
            default: '0'
        },
        {
            id: 'uts',
            default: '0'
        },
        {
            id: 'uas',
            default: '0'
        }
    ]
    return (
        <Wrapper>
            <Card>
                <u>
                    <h1>PENILAIAN</h1>
                </u>
                <div className="flex">
                    <div className="basis-1/4">
                        <h1>Mata Kuliah</h1>
                        <h1>Kode</h1>
                        <h1>Semester</h1>
                        <h1>Nomor Induk Mahasiswa</h1>
                        <h1>Tahun Akademik</h1>
                    </div>

                    <div className="basis-3/4">
                        <h1>Inteligensi Buatan</h1>
                        <h1>IF</h1>
                        <h1>5</h1>
                        <h1>232101388</h1>
                        <h1>2023</h1>
                    </div>
                </div>

                {/* <button className='w-full max-w-24'>Input</button> */}

                <Table>
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
                        ABSENSI (10%)
                    </Table.HeadCell>
                    <Table.HeadCell>
                        TUGAS (20%)
                    </Table.HeadCell>
                    <Table.HeadCell>
                        UTS (30%)
                    </Table.HeadCell>
                    <Table.HeadCell>
                        UAS (40%)
                    </Table.HeadCell>
                    <Table.HeadCell>
                        NA
                    </Table.HeadCell>
                    <Table.HeadCell>
                        GRADE
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Action
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {data.map((x, i) => (
                    <tr className='hover:bg-gray-100'>
                    <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">{i+1}</td>
                    <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">{x.nim}</td>
                    <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">{x.nama}</td>

                    {/* <td contentEditable={true} class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">0</td>
                    <td contentEditable={true} class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">0</td>
                    <td contentEditable={true} class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">0</td>
                    <td contentEditable={true} class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">0</td> */}
                    {/* <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium"><h1 onDoubleClick={}></h1></td> */}


                    <td class="min-w-24 border border-gray-900 px-4 py-2 text-emerald-600 font-medium">
                    <Tooltip content='Double klik untuk input nilai'>
                        <InputNilaiComponent onChange={onChangedAbsensi} value={absensi}/>
                    </Tooltip>
                    </td>

                    <td class="min-w-24 border border-gray-900 px-4 py-2 text-emerald-600 font-medium">
                    <Tooltip content='Double klik untuk input nilai'>
                        <InputNilaiComponent onChange={onChangedTgs} value={tgs}/>
                    </Tooltip>
                    </td>

                    <td class="min-w-24 border border-gray-900 px-4 py-2 text-emerald-600 font-medium">
                    <Tooltip content='Double klik untuk input nilai'>
                        <InputNilaiComponent onChange={onChangedUts} value={uts}/>
                    </Tooltip>
                    </td>

                    <td class="min-w-24 border border-gray-900 px-4 py-2 text-emerald-600 font-medium">
                    <Tooltip content='Double klik untuk input nilai'>
                        <InputNilaiComponent onChange={onChangedUas} value={uas}/>
                    </Tooltip>
                    </td>

                    {/* {nilai.map((x) => (
                         <td class="min-w-24 border border-gray-900 px-4 py-2 text-emerald-600 font-medium">
                         <Tooltip content='Double klik untuk input nilai'>
                             <InputNilaiComponent onChange={changed} value={text}/>
                             {isEditing 
                             ? 
                             <input
                             maxLength={3}
                             required
                             type="text"
                             name="nilai"
                             id="nilai"
                             autoComplete="given-name"
                             className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                             // defaultValue={defaultValue.price}
                             onBlur={onEditEnd}
                         /> 
                         :
                         <div onDoubleClick={() => setIsEditing(true)}>
                                 100
                             </div>    
                         }
                         </Tooltip>
                         </td>
                    ))} */}
                    
                    {/* <td onKeyDown={(event) => {
                            if (isEnterOrEscapeKeyEvent(event)) {
                                event.preventDefault()
                                event.stopPropagation()
                            }
                        }} class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">
                                    <h1 onKeyDown={(event) => {
                            if (isEnterOrEscapeKeyEvent(event)) {
                                event.preventDefault()
                                event.stopPropagation()
                            }
                        }}  contentEditable={true} defaultValue={average}>100</h1>
                    </td> */}

                    {/* <td class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">
                    </td> */}

                    <td className='mx-1 px-1'>
                        {/* <h1 defaultValue={average}>A</h1> */}
                        <input className='border-transparent' value={average} type="text" />
                        {/* <h1 aria-valuetext={grd}></h1>
                        <span ></span> */}
                    </td>
                    <td className='mx-1 px-1'>
                        <input className='border-transparent' value={grd} type="text" />
                    {/* <h1 aria-valuetext={grd}></h1> */}
                    </td>
                    <td className='text-center'>
                        <button onClick={generate}>
                            generate
                        </button>
                    </td>

                    {/* <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">100</td> */}
                    {/* <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">100</td> */}
                    {/* <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{semester}</td> */}
                    {/* <td class="flex space-x-4 border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">

                    </td> */}
                    </tr>

                                                // <Table.Row>
                                                //     <Table.Cell>
                                                //         1
                                                //     </Table.Cell>
                                                //     <Table.Cell>
                                                //         {x.nim}
                                                //     </Table.Cell>
                                                //     <Table.Cell>
                                                //         {x.nama}
                                                //     </Table.Cell>
                                                //     <Table.Cell>
                                                //         <div className='flex w-full min-w-12'>
                                                //             <TextInputComponent
                                                //                 className='w-full min-w-12'
                                                //                 required
                                                //                 type="text"
                                                //                 name="nilai"
                                                //                 id="nilai"
                                                //                 autoComplete="given-name"
                                                //                 maxLength='3'
                                                //                 //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                //                 // disabled={isUpdate}
                                                //                 // defaultValue={defaultValue.nim}
                                                //             />
                                                //             {/* <Badge className='w-full max-w-24'>
                                                //                 nilai
                                                //             </Badge> */}
                                                //         </div>
                                                //     </Table.Cell>
                                                //     <Table.Cell>
                                                //         <div className='flex w-full min-w-24'>
                                                //             <TextInputComponent
                                                //                 className='w-full min-w-24'
                                                //                 required
                                                //                 type="text"
                                                //                 name="nilai"
                                                //                 id="nilai"
                                                //                 autoComplete="given-name"
                                                //                 //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                //                 // disabled={isUpdate}
                                                //                 // defaultValue={defaultValue.nim}
                                                //             />
                                                //             {/* <Badge className='w-full max-w-24'>
                                                //                 nilai
                                                //             </Badge> */}
                                                //         </div>
                                                //     </Table.Cell>
                                                //     <Table.Cell>
                                                //         <div className='flex w-full min-w-24'>
                                                //             <TextInputComponent
                                                //                 className='w-full min-w-24'
                                                //                 required
                                                //                 type="text"
                                                //                 name="nilai"
                                                //                 id="nilai"
                                                //                 autoComplete="given-name"
                                                //                 //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                //                 // disabled={isUpdate}
                                                //                 // defaultValue={defaultValue.nim}
                                                //             />
                                                //             {/* <Badge className='w-full max-w-24'>
                                                //                 nilai
                                                //             </Badge> */}
                                                //         </div>
                                                //     </Table.Cell>
                                                //     <Table.Cell>
                                                //         <div className='flex w-full min-w-24'>
                                                //             <TextInputComponent
                                                //                 className='w-full min-w-24'
                                                //                 required
                                                //                 type="text"
                                                //                 name="nilai"
                                                //                 id="nilai"
                                                //                 autoComplete="given-name"
                                                //                 //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                //                 // disabled={isUpdate}
                                                //                 // defaultValue={defaultValue.nim}
                                                //             />
                                                //             {/* <Badge className='w-full max-w-24'>
                                                //                 nilai
                                                //             </Badge> */}
                                                //         </div>
                                                //     </Table.Cell>
                                                //     <Table.Cell>
                                                //         100
                                                //     </Table.Cell>
                                                //     <Table.Cell>
                                                //         <ButtonComponent>
                                                //             Input
                                                //         </ButtonComponent>
                                                //     </Table.Cell>
                                                // </Table.Row>
                    ))}
                </Table.Body>
                {/* <Table.Body>
                    IFKB002
                </Table.Body> */}
                </Table>
            </Card>
        </Wrapper>
    )
}

export default PenilaianPage





{/* <td onKeyDown={(event) => {
    if (isEnterOrEscapeKeyEvent(event)) {
        event.preventDefault()
        event.stopPropagation()
        onEditEnd()
    }
}} contentEditable={() => setIsEditing(true)}
onChange={_.flow(inputValue, setText)}
class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">{text}</td>
        <td contentEditable={true} class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">0</td>
        <td contentEditable={true} class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">0</td>
        <td contentEditable={true} class="border border-gray-900 px-4 py-2 text-emerald-600 font-medium">0</td> */}

                    // <Table.Row>
                    //     <Table.Cell>
                    //         1
                    //     </Table.Cell>
                    //     <Table.Cell>
                    //         IFKB002
                    //     </Table.Cell>
                    //     <Table.Cell>
                    //         {data.nama}
                    //     </Table.Cell>
                    //     <Table.Cell>
                    //         <div className='flex w-full min-w-24'>
                    //             <TextInputComponent
                    //                 className='w-full min-w-24'
                    //                 required
                    //                 type="text"
                    //                 name="nilai"
                    //                 id="nilai"
                    //                 autoComplete="given-name"
                    //                 //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    //                 // disabled={isUpdate}
                    //                 // defaultValue={defaultValue.nim}
                    //             />
                    //             <Badge className='w-full max-w-24'>
                    //                 nilai
                    //             </Badge>
                    //         </div>
                    //     </Table.Cell>
                    //     <Table.Cell>
                    //         <div className='flex w-full min-w-24'>
                    //             <TextInputComponent
                    //                 className='w-full min-w-24'
                    //                 required
                    //                 type="text"
                    //                 name="nilai"
                    //                 id="nilai"
                    //                 autoComplete="given-name"
                    //                 //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    //                 // disabled={isUpdate}
                    //                 // defaultValue={defaultValue.nim}
                    //             />
                    //             <Badge className='w-full max-w-24'>
                    //                 nilai
                    //             </Badge>
                    //         </div>
                    //     </Table.Cell>
                    //     <Table.Cell>
                    //         <div className='flex w-full min-w-24'>
                    //             <TextInputComponent
                    //                 className='w-full min-w-24'
                    //                 required
                    //                 type="text"
                    //                 name="nilai"
                    //                 id="nilai"
                    //                 autoComplete="given-name"
                    //                 //   className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    //                 // disabled={isUpdate}
                    //                 // defaultValue={defaultValue.nim}
                    //             />
                    //             {/* <Badge className='w-full max-w-24'>
                    //                 nilai
                    //             </Badge> */}
                    //         </div>
                    //     </Table.Cell>
                    //     <Table.Cell>
                    //         100
                    //     </Table.Cell>
                    //     <Table.Cell>
                    //         <ButtonComponent>
                    //             Input
                    //         </ButtonComponent>
                    //     </Table.Cell>
                    // </Table.Row>



