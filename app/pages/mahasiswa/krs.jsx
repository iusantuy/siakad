import React from "react"
import { Card, Table } from "~/flowbite-react.module"
import ButtonComponent from "../../components/button"



const KrsMahasiswaPage = () => {
    const [krs, setKrs] = React.useState([])
    function addRow() {
        setKrs(krs => [...krs, krs.length + 1])
    }
    function removeRow(item) {
        setKrs(krs => krs.filter(i => i !== item))
    }
    const td = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        },

    ]
    return (
        <>        
            <Card>
                <u>
                    <h1>KARTU RENCANA STUDI</h1>
                </u>
                <div className="flex">
                    <div className="basis-1/4">
                        <h1>Jurusan</h1>
                        <h1>Nama Mahasiswa</h1>
                        <h1>Nomor Induk Mahasiswa</h1>
                        <h1>Semester</h1>
                        <h1>Tahun Akademik</h1>
                    </div>

                    <div className="basis-3/4">
                        <h1>Teknik Informatika</h1>
                        <h1>Fairuz Hibatullah Akbar</h1>
                        <h1>232101388</h1>
                        <h1>5</h1>
                        <h1>2023</h1>
                    </div>
                </div>

                <ButtonComponent onClick={() => addRow()}>+Add</ButtonComponent>

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
                        SKS
                    </Table.HeadCell>
                    <Table.HeadCell>
                        TGL. UTS
                    </Table.HeadCell>
                    <Table.HeadCell>
                        PARAF
                    </Table.HeadCell>
                    <Table.HeadCell>
                        TGL. UAS
                    </Table.HeadCell>
                    <Table.HeadCell>
                        PARAF
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {krs.map(item => (
                        <tr>
                            <td className="border border-gray-900 px-4 py-2 text-gray-900 font-small">{item+0}</td>
                            {td.map(x => (

                            <td contentEditable className="border border-gray-900 px-4 py-2 text-gray-900 font-small">
                                {/* <h1 contentEditable></h1> */}
                            </td>
                            ))}
              
                            <td className="border border-gray-900 px-4 py-2 text-gray-900 font-small">
                                <button onClick={() => removeRow(item)}>&times;</button>
                            </td>
                        </tr>
                    ))}
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
                            3
                        </Table.Cell>
                        <Table.Cell>
                            1/1/2023
                        </Table.Cell>
                        <Table.Cell>
                            -
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

        </>
    )
}

export default KrsMahasiswaPage