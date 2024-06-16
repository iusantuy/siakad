import { Link } from '@remix-run/react'
import { Table } from 'flowbite-react'
import React from 'react'

const ListJadwalAkademik = ({id, judul, tanggal}) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {judul}
        </Table.Cell>
        <Table.Cell>{tanggal}</Table.Cell>
        <Table.Cell>
        <Link to={id} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Detail
        </Link>
        </Table.Cell>
    </Table.Row>
  )
}

export default ListJadwalAkademik