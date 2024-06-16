import { Link } from "@remix-run/react"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"





const ListMata_Kuliah = ({id, kodeMk, nama, sks}) => {
    return (
        <tr className='hover:bg-gray-100'>
            <td class="border px-4 py-2 text-gray-900 font-medium">{kodeMk}</td>
            <td class="border px-4 py-2 text-gray-900 font-medium">{nama}</td>
            <td class="border px-4 py-2 text-gray-900 font-medium">{sks}</td>
            <td class="flex justify-center space-x-4 px-4 py-2">
                <Link to={id}>
                    <HiOutlinePencil/>
                </Link>
                <button onClick={() => setOpenModal(true)} className='text-red-400'>
                    <HiOutlineTrash/>
                </button>
            </td>
      </tr>
    )
}

export default ListMata_Kuliah